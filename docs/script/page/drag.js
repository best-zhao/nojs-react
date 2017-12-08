import $ from 'jquery'
import {React, render, utils, ReactDOM} from 'nj'
import drag from 'nj/drag'

export default class Drag extends React.Component {
    componentDidMount () {
        let self = this
        let el = $(ReactDOM.findDOMNode(this))
        let {onDragDown, onDragMove, onDragUp} = this.props

        this.holder = el.clone()
        this.drag = new drag(el, null, {
            wrap : $('div.page-side')
        })

        this.drag.onDragDown = function(){
            let offset = el.offset()
            el.css({
                'position':'absolute',
                'top' : offset.top,
                'left' : offset.left,
                // 'width' : el.width(),
                // 'height' : el.height()
            })
            .addClass('drag_target').after(self.holder)
            onDragDown && onDragDown.call(this)
        }

        let x
        let y
        this.drag.MoveEvent = function(pos, e){
            // console.log(pos, e.clientX, e.clientY)
            x = e.clientX;//鼠标位置
            y = e.clientY;
            onDragMove && onDragMove.call(this, x, y)
        }

        this.drag.UpEvent = function(e){
            self.holder.remove();
            el.removeClass('drag_target').removeAttr('style')
            onDragUp && onDragUp.call(this, x, y)
        }
    }
    componentWillReceiveProps (nextProps) {
        //console.log(nextProps)
    }
    render () {
        return this.props.children
    }
}