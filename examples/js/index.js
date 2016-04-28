import nj from 'nj'
const {React, render} = nj

import $ from 'jquery'
import Marked from 'marked'
import {Frame} from 'nj/frame'
import Demo from './Demos/'


$.getJSON('./menu.json').then(json=>{
    const frameOptions = {
        logo : <h1>nojs-react</h1>,
        menu : json.data,
        parseUrl (url,node) {
            return node ? 'doc/'+url+'.md' : url
        },
        parseContent (html, fromUrl) {
            return /.md$/.test(fromUrl) ? Marked(html) : html
        },
        onChange (node, hashData, container) {
            node = this.state.menuFormatData[hashData.id]
            if( node ){
                var demo = Demo[node.link] || Demo[node.demo]  

                typeof demo=='function' && setTimeout(()=>{
                    demo(container)
                }, 10)
            }
            // Prism.highlightAll(true)
        }
    }
    render(<Frame {...frameOptions}/>, document.getElementById('frameContainer'))
})



