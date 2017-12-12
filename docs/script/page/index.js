
import $ from 'jquery'
import {React, render, utils} from 'nj'
import Side from './side'
import '../../css/page.css'

export const init = ()=>{
    render(<Page/>, document.getElementById('mounted'))
}

class Page extends React.Component {
    constructor (props) {
        super(props)
        let pageid = 'page-index'
        this.state = {
            pageid,
            styles : '',
            // maskVisible : false,
            template : `<html>
                <head>
                    <title>12</title>
                    <link rel="stylesheet" href="css/base.css">
                    <style>
                        .banner{height:300px;background:#f2f2f2;margin-bottom:20px} 
                        .page-main{height:500px;background:#f2f2f2;width:1200px;margin:0 auto}
                        .drag-active{border:1px solid #f90}
                        .layer{position:absolute;width:90px;height:90px;background:#ccc}
                    </style>
                </head>
                <body class="pageid">
                    <div>1<br />12</div>
                    <div class="banner" data-dragarea="banner"></div>
                    <div class="page-all page-main" data-dragarea="content"></div>
                </body>
            </html>`
        }        
    }
    componentDidMount () {
        let $body = $(this.refs.body)
        let $inner = $body.children()
        $inner.width($inner.children().outerWidth(true))
        $body.scrollLeft(($inner.innerWidth()-$body.width())/2).scrollTop(90)

        let {canvas} = this.refs
        let el = $(canvas)

        this.canvas = {
            el,
            areas : el.find('[data-dragarea]')
        }        
    }
    render () {
        let {template, styles, pageid} = this.state
        template += `<style>${styles}</style>`
        return <div className="page-container">
            <div className="page-body" ref="body">
                <div className="_inner">
                    <div className="page-canvas">
                        <div ref="canvas" className="canvas-content" id={pageid} dangerouslySetInnerHTML={{__html:template}}></div>
                    </div>
                </div>
            </div>
            <Side root={this}/>
        </div>
    }
}