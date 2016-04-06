import nj from 'nj'
const {React, render} = nj

import $ from 'jquery'
import Marked from 'marked'
import {Frame} from 'nj/frame'
import Demo from './Demos/'

$.getJSON('./menu.json', json=>{
    const frameOptions = {
        logo : <h1>nojs-react</h1>,
        menu : json.data,
        parseUrl (url) {
            return 'doc/'+url+'.md'
        },
        parseContent (html) {
            return Marked(html)
        },
        onChange (node, container) {
            var link = node.link
            var demo = Demo[link] || Demo[node.demo]

            demo && setTimeout(()=>{
                demo(container)
            }, 10)

            Prism.highlightAll(true)
        }
    }
    render(<Frame {...frameOptions}/>, document.getElementById('frameContainer'))
})



