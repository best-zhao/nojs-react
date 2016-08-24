import nj from 'nj'
const {React, render} = nj

import $ from 'jquery'
import Marked from 'marked'
import {Frame} from 'nj/frame'
import Demo from './Demos/'


const Logo = React.createClass({
    getInitialState () {
        var authData = ref.getAuth()
        return authData ? {uid : authData.uid, username:authData.qq.username} : {}
    },
    sign (signin, e) {
        if( signin ){
            authWidthQQ((error, authData)=>{
                this.setState({uid:authData.uid, username:authData.qq.username})
            })
        }else{
            ref.unauth(()=>{
                this.setState({uid:null, username:null})
            })            
        }
    },
    render () {
        const {uid, username} = this.state
        return <div><h1>nojs-react</h1>
            <div className="_foot">
                {uid?
                    <span>{username} 
                        <a href="javascript:void(0)" onClick={this.sign.bind(this,false)}>退出</a>
                    </span> :
                    <a href="javascript:void(0)" onClick={this.sign.bind(this,true)}>QQ登陆</a>
                }
            </div>
        </div>
    }
})
$.getJSON('./examples/menu.json').then(json=>{
    const frameOptions = {
        logo : <Logo/>,
        menu : json.data,
        parseUrl (url, node) {
            return node ? './examples/doc/'+url+'.md' : url
        },
        parseContent (html, fromUrl) {
            return /.md$/.test(fromUrl) ? Marked(html) : html
        },
        onChange (node, hashData, container) {
            node = node || this.state.menuFormatData[hashData.id]
            if( node ){
                var demo = Demo[node.link] || Demo[node.demo]  

                typeof demo=='function' && setTimeout(()=>{
                    demo(container)
                }, 10)
            }
            Prism.highlightAll(true)
        }
    }
    render(<Frame {...frameOptions}/>, document.getElementById('frameContainer'))
})

var Wilddog = require("wilddog");
var ref = new Wilddog("https://nojs-react.wilddogio.com/");
var MenusRef = ref.child('menus')

MenusRef.on("value", function(datasnapshot) {    
    console.log(1,datasnapshot.val())
}, function(error){
    console.log(2,error)
    // 处理请求失败打错误
});


// MenusRef.push({"id":3, "name":"Popup", "parentid":1, "link":"popup"})


// 创建一个回调来处理终端用户认证的结果
function authHandler(error, authData) {
  if (error) {
      console.log("Login Failed!", error);
  } else {
      console.log("Authenticated successfully with payload:", authData);
  }
}
// 弹出OAuth认证
const authWidthQQ = callback=>ref.authWithOAuthPopup("qq", (error, authData)=>{
    authHandler(error, authData)
    callback && callback(error, authData)
})


//监控终端用户的认证状态
function authDataCallback(authData) {
  if (authData) {
    console.log(authData,"User " + authData.uid + " is logged in with " + authData.provider);
  } else {
    console.log("User is logged out");
  }
}
ref.onAuth(authDataCallback);




