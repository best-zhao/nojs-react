import nj from 'nj'
const {React, ReactDOM} = nj

import $ from 'jquery'
import {Frame} from './frame'
import Demo from './Demos/'


const frameOptions = {
    menuSource : './menu.json',
    onChange (node, container) {
        var link = node.link
        var demo = Demo[link] || Demo[node.demo]

        demo && setTimeout(()=>{
            demo(container)
        }, 10)
    }
}


const frame = ReactDOM.render(<Frame {...frameOptions}/>, document.getElementById('frameContainer'))


