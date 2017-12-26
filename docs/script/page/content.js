import $ from 'jquery'
import {React, render, ReactDOM, utils} from 'nj'
import drag from 'nj/drag'

export default class Content extends React.Component {
    constructor (props) {
        super(props)
        let {layers=[]} = this.props
        this.state = {
            layers
        }
    }
    push (layer) {
        let {layers} = this.state
        layers.push(layer)
        this.setState({layers})
    }
    render () {
        let {layers, focus, editor} = this.state
        let {root} = this.props
        return <div>
            {layers.map((ly,i)=>
                <Drag key={i}>
                    <div className={'content-item'}> 
                        <div className="inner" dangerouslySetInnerHTML={{__html:ly.html}}></div>
                    </div>
                </Drag>
            )}
            
        </div>
    }
}


class Drag extends React.Component {
    componentDidMount () {
        let el = $(ReactDOM.findDOMNode(this))        
        // let options = Object.assign({
        //     overflow : this.getSize()
        // }, this.props)
        this.drag = new drag(el, el.children())
    }
    // getSize () {
    //     let el = $(ReactDOM.findDOMNode(this))
    //     let w = el.width()
    //     let h = el.height()
    //     return {x:-w/2, y:-h/2, width:w/2, height:h/2}
    // }
    componentWillReceiveProps (nextProps) {
        //this.drag.overflow = this.getSize()
    }
    render(){
        return this.props.children
    }
}

//side区域拖拽模块选项
export const getContentOptions = _this=>{
    let area
    let canvas_top
    let canvas_left
    let side_x
    let {root} = _this.props

    return {
        onDragDown (props) {                
            let {el, areas} = root.canvas
            let {top, left} = el.offset()
            canvas_top = top
            canvas_left = left
            area = areas.filter('[data-dragarea="'+props.target+'"]')
            side_x = $(ReactDOM.findDOMNode(_this)).offset().left 
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

            if( x>left && x<(left+width) && y>top && y<(top+height) && x<side_x ){
                root.canvas.target = area.addClass('drag-active')
            }
        },
        onDragUp : (x, y, props)=>{
            let {el, target, areas} = root.canvas
            areas.removeClass('drag-active')
            if( target ){                    
                //计算出相对画布的位置
                let top = y - canvas_top
                let left = x - canvas_left                   

                let item = Object.assign({
                    x : left,
                    y : top
                }, props.module)
                root.state.data[props.target].layers.push(item)
            }
            root.canvas.target = null
        }
    }
}

