import {React, render} from 'nj'
import Frame from 'nj/Frame/index'
import Marked from 'marked'
import Menu from 'json!../menu.json'
import Prism from './prism'

const options = {
    defaultNode : "0",
    menu : Menu.data,
    template : ({id, url}) => 'html/'+url+(url.indexOf('.')<0 ? '.md' : ''),
    htmlParse : (html, {id, url}) => url.indexOf('.')<0 ? Marked(html) : html,
    onComplete : ({id, url}) => Prism.highlightAll(),
    scripts : {
        'mask' : 'demo/mask',
        'form/normal.html' : 'demo/form',
        'form/component.html' : 'demo/form',
        'form/input-group.html' : 'demo/form'
    }
}

render(
    <Frame {...options} />, 
    document.getElementById('root')
)