
import $ from 'jquery'
import {React, render, utils} from 'nj'
import Drag from './drag'
import drag from 'nj/drag'
import '../../css/page.css'

export const init = ()=>{
    render(<Page/>, document.getElementById('mounted'))
}

class Page extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
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
                <body>
                    <div>1<br />12</div>
                    <div class="banner" data-dragarea="banner"></div>
                    <div class="page-all page-main" data-dragarea="content"></div>
                </body>
            </html>`
        }

        let canvas_top
        let canvas_left
        let self = this

        this.dragOptions = {
            flow : 'float',
            target : 'banner',
            onDragDown : ()=>{
                let {top, left} = this.canvas.el.offset()
                canvas_top = top
                canvas_left = left
            },
            onDragMove : (x, y)=>{
                this.canvas.target = null
                this.canvas.areas.removeClass('drag-active')

                for( let i=0, n=this.canvas.areas.length; i<n; i++ ){
                    let area = this.canvas.areas.eq(i)
                    let top = area.offset().top
                    let height = area.outerHeight()
                    
                    //x方向只要在画布区域即可
                    let left = canvas_left
                    let width = this.canvas.el.outerWidth()

                    if( x>left && x<(left+width) && y>top && y<(top+height) ){
                        area.addClass('drag-active')
                        this.canvas.target = area
                        break;
                    }
                }    
            },
            onDragUp  (x, y) {
                self.canvas.areas.removeClass('drag-active')
                let {target} = self.canvas
                if( target ){
                    let $layer = $(`<div class="layer"></div>`)
                    target.append($layer)
                    //计算出相对画布的位置
                    let top = y - canvas_top - $layer.innerHeight()/2
                    let left = x - canvas_left - $layer.innerWidth()/2
                    $layer.css({top, left})

                    new drag($layer, null, {
                        limit : self.canvas.el
                    })
                }
            }
        }
    }
    componentDidMount () {
        let $body = $(this.refs.body)
        $body.scrollLeft(($body.children().innerWidth()-$body.width())/2).scrollTop(90)

        let {canvas} = this.refs
        let el = $(canvas)

        this.canvas = {
            el,
            areas : el.find('[data-dragarea]')
        }        
    }
    render () {
        let {template} = this.state
        return <div className="page-container">
            <div className="page-body" ref="body">
                <div className="_inner">
                    <div className="page-canvas">
                        <div ref="canvas" className="canvas-content" dangerouslySetInnerHTML={{__html:template}}></div>
                    </div>
                </div>
            </div>
            <div className="page-side">
                <Drag {...this.dragOptions}><button>test</button></Drag>
                <Drag {...this.dragOptions}><button>test</button></Drag>
            </div>
        </div>
    }
}