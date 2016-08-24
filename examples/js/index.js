import nj from 'nj'
const {React, render} = nj

import $ from 'jquery'
import Marked from 'marked'
import {Frame} from 'nj/frame'
import Demo from './Demos/'


$.getJSON('./examples/menu.json').then(json=>{
    const frameOptions = {
        logo : <h1>nojs-react</h1>,
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
MenusRef.orderByChild("name").on("child_added", function(snapshot) {
  console.log(snapshot.key() + " was " + snapshot.val().name + " meters tall");
});


// MenusRef.push({"id":3, "name":"Popup", "parentid":1, "link":"popup"})