import $ from 'jquery'
import {React, render, ReactDOM, utils} from 'nj'
import {Switch, SwitchMenu, SwitchItem} from 'nj/switch'
import Color from './color'
import Drag from './drag'
import Banner from './banner'
import drag from 'nj/drag'
import {Input} from 'nj/form'

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
            onDragUp : (x, y)=>{
                let {el, target, areas} = root.canvas
                areas.removeClass('drag-active')
                if( target ){
                    // let $layer = $(`<div class="layer"></div>`)
                    // target.append($layer)
                    //计算出相对画布的位置
                    let top = y - canvas_top //- $layer.innerHeight()/2
                    let left = x - canvas_left// - $layer.innerWidth()/2
                    // $layer.css({top, left})

                    this.bannerLayer.push({
                        x : left,
                        y : top
                    })
                    // new drag($layer, null, {
                    //     limit : el,
                    //     onDragDown () {
                    //         this.drag.addClass('drag-active')
                    //     },
                    //     UpEvent () {
                    //         //this.drag.removeClass('drag-active')
                    //     }
                    // })
                }
            }
        }

        this.state = {}
    }
    componentDidMount () {
        let {root} = this.props
        setTimeout(()=>{
            let $banner = root.canvas.areas.filter('[data-dragarea="banner"]')
            let bannerRoot = $('<div></div>').appendTo($banner)
            this.bannerLayer = render(<Banner layers={[]}/>, bannerRoot[0])
        }, 1)
    }
    setStyle (module, key, value) {
        let {root} = this.props
        let {data} = root.state
        data[module].css[key] = value
        root.setState({data})
    }
    render () {
        let {root} = this.props
        let {data:{body, banner}} = root.state

        return <div className="page-side">

            <h6>页面</h6>
            <div className="mb15 side-body">
                <div>背景色 <Color value={body.css['background-color']} onChange={color=>{
                    this.setStyle('body', 'background-color', color)
                }}/></div>
                <div>背景图片 <Input defaultValue={body.css['background-image']} onChange={e=>{
                    this.setStyle('body', 'background-image', `url(${e.target.value})`)
                }}/></div>
            </div>

            <h6>Banner</h6>
            <div className="mb10 side-body">
                <div>背景色 <Color value={banner.css['background-color']} onChange={color=>{
                    this.setStyle('banner', 'background-color', color)
                }}/></div>
                <div>背景图片 <Input defaultValue={banner.css['background-image']} onChange={e=>{
                    this.setStyle('banner', 'background-image', `url(${e.target.value})`)
                }}/></div>
                <div>高度:<Input defaultValue={400} onChange={e=>{
                    this.setStyle('banner', 'height', `${e.target.value}px`)
                }}/></div>
            </div>

            <Drag {...this.dragOptions}><button>test</button></Drag>
            <Drag {...this.dragOptions}><button>test</button></Drag>
        </div>
    }
}