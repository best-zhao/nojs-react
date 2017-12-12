import $ from 'jquery'
import {React, render, ReactDOM, utils} from 'nj'
import {Switch, SwitchMenu, SwitchItem} from 'nj/switch'
import Color from './color'
import Drag from './drag'
import drag from 'nj/drag'

export default class Side extends React.Component {
    constructor (props) {
        super(props)

        let area
        let canvas_top
        let canvas_left
        let {root} = this.props

        this.dragOptions = {
            flow : 'float',
            target : 'banner',
            onDragDown : ()=>{
                let {el, areas} = root.canvas
                let {top, left} = el.offset()
                canvas_top = top
                canvas_left = left
                area = areas.filter('[data-dragarea="banner"]')
            },
            onDragMove : (x, y)=>{
                let {el, areas} = root.canvas
                root.canvas.target = null
                areas.removeClass('drag-active')

                let top = area.offset().top
                let height = area.outerHeight()
                
                //x方向只要在画布区域即可
                let left = canvas_left
                let width = el.outerWidth()

                if( x>left && x<(left+width) && y>top && y<(top+height) ){
                    root.canvas.target = area.addClass('drag-active')
                }
            },
            onDragUp (x, y) {
                let {el, target, areas} = root.canvas
                areas.removeClass('drag-active')
                if( target ){
                    let $layer = $(`<div class="layer"></div>`)
                    target.append($layer)
                    //计算出相对画布的位置
                    let top = y - canvas_top - $layer.innerHeight()/2
                    let left = x - canvas_left - $layer.innerWidth()/2
                    $layer.css({top, left})

                    new drag($layer, null, {
                        limit : el
                    })
                }
            }
        }

        this.state = {
            styles : {}
        }
    }
    setStyle (key, value) {
        let {root} = this.props
        let {styles} = this.state
        styles[key] = `#${root.state.pageid} ${value}`
        styles = Object.keys(styles).map(k=>styles[k]).join('')
        root.setState({styles})
    }
    render () {
        let {root} = this.props
        return <div className="page-side">
            <h6>页面</h6>
            <div className="mb15 side-body">
                <div>背景色 <Color onChange={color=>{
                    this.setStyle('body', `{background:${color}}`)
                }}/></div>
            </div>
            <h6>Banner</h6>
            <div className="mb10 side-body">
                <div>背景色 <Color onChange={color=>{
                    this.setStyle('banner', `.banner{background:${color}}`)
                }}/></div>
            </div>
            <Drag {...this.dragOptions}><button>test</button></Drag>
            <Drag {...this.dragOptions}><button>test</button></Drag>
        </div>
    }
}