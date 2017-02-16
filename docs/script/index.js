import $ from 'jquery'
import nj, {React, render} from 'nj'
import Frame from 'nj/Frame/index'
import {Form} from 'nj/form'
import Marked from 'marked'
import Menu from 'json!../menu.json'
import Prism from './prism'

const options = {
    // style : 2,
    defaultNode : "0",
    menu : Menu.data,
    _sidebar : tree=><div>
        <h3 style={{padding:'1.5em 1em', fontWeight:'100', margin:0}}>nojs-react</h3>
        {tree}
    </div>,
    showTopbar : true,
    topbarItems : [
        // {content:'<div style="width:170px">logo</div>', align:'left', index:-1, type:'button'},
        {content:'<a href="form/normal.html">aaa21312</a>', type:'link'},
        {content:options=>{
            let hasForm = $('div.grid-main').find('form').length
            let verify = Form.getByHandle('verify')
            return hasForm && <div {...options}>
                <button className="nj-button nj-button-small" onClick={e=>verify.submit()}>done</button>
            </div> 
        }}
    ],
    template : ({id, url}) => 'html/'+url+(url.indexOf('.')<0 ? '.md' : ''),
    htmlParse : (html, {id, url}) => url.indexOf('.')<0 ? Marked(html) : html,
    onComplete : ({id, url}) => Prism.highlightAll(),
    scripts : {
        'mask' : 'demo/mask',
        'popup' : 'demo/popup',
        'form/normal.html' : 'demo/form',
        'form/component.html' : 'demo/form',
        'form/input-group.html' : 'demo/form'
    }
}

render(
    <Frame {...options} />, 
    document.getElementById('root')
)