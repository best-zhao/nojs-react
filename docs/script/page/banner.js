import $ from 'jquery'
import {React, render, ReactDOM, utils} from 'nj'
import drag from 'nj/drag'

export default class Banner extends React.Component {
    constructor (props) {
        super(props)
        let {layers=[]} = this.props
        this.state = {
            layers
        }
    }
    componentDidMount () {
        let {root} = this.props
        //点击空白 blur
        root.canvas.el.click(e=>{
            if( !$(e.target).closest('.layer').length ){
                this.setState({focus:null})
            }            
        })
    }    
    push (layer) {
        let {layers} = this.state
        layers.push(layer)
        this.setState({layers, focus:layer})
    }
    setFocus (layer) {
        this.setState({focus:layer})
    }
    componentDidUpdate (prevProps, prevState) {
        let {editor} = this.refs
        if( editor && prevState.editor!=this.state.editor ){
            editor.focus()
            selectText(editor)
        }
    }
    render () {
        let {layers, focus, editor} = this.state
        let {root} = this.props
        return <div>
            {layers.map((ly,i)=>
                <Drag key={i} limit={root.canvas.el} 
                    onDragDown={this.setFocus.bind(this, ly)}
                    MoveEvent={pos=>{
                        ly.x = pos.left
                        ly.y = pos.top
                    }}
                >
                    <div 
                        onDoubleClick={e=>this.setState({editor:ly})} 
                        className={'layer'+(focus===ly?' drag-focus':'')} 
                        style={Object.assign({top:ly.y, left:ly.x}, ly.style)}
                        ref={focus==ly?'focus':'layer'}
                    > 
                        <div className="inner" dangerouslySetInnerHTML={{__html:ly.html}}></div>
                    </div>
                </Drag>
            )}
            {editor ? 
                <div className="layer-mask" style={Object.assign({top:editor.y, left:editor.x}, editor.style)}>
                    <div className="inner" contentEditable="true" ref="editor" 
                        onBlur={()=>{
                            let $editor = $(this.refs.editor)
                            let height = $editor.height()
                            //同步内容高度变化
                            editor.style.height = height
                            //height变化时 .inner top:-50%样式 也会使top位置变化
                            let changetop = height/2 - $editor.parent().height()/2
                            //中和top变化
                            editor.y += changetop
                            this.setState({editor:null})
                        }} 
                        onKeyUp={e=>{
                            editor.html = e.target.innerHTML
                        }} 
                        dangerouslySetInnerHTML={{__html:editor.html}}
                    ></div>
                </div>
                : null
            }
        </div>
    }
}

//选中文本
function selectText(element) {
    var text = element.innerText
    if (document.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
        /*if(selection.setBaseAndExtent){
            selection.setBaseAndExtent(element, 0, element, 1);
        }*/
    } else {
        // alert("none");
    }
}

//设置光标位置 只适合inputElement
function setCaretPosition(ctrl, pos){
    if(ctrl.setSelectionRange){
        console.log(1, pos)
        ctrl.focus();
        ctrl.setSelectionRange(pos, pos);
    }else if (ctrl.createTextRange) {
        console.log(2, pos)
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }else{
        console.log(ctrl, ctrl.innerText, pos)
    }
}

class Drag extends React.Component {
    componentDidMount () {
        let el = $(ReactDOM.findDOMNode(this))        
        let options = Object.assign({
            overflow : this.getSize()
        }, this.props)
        this.drag = new drag(el, el.children(), options)
    }
    getSize () {
        let el = $(ReactDOM.findDOMNode(this))
        let w = el.width()
        let h = el.height()
        return {x:-w/2, y:-h/2, width:w/2, height:h/2}
    }
    componentWillReceiveProps (nextProps) {
        this.drag.overflow = this.getSize()
    }
    render(){
        return this.props.children
    }
}