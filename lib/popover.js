/**
 * 弹出层
 */
var nj = require('./nojs-react')
var {React, ReactDOM, mixins} = nj
var align = require('./align')
var $ = require('jquery');

var Popover = React.createClass({
    statics : {
        create (options) {
            options = options || {};
            return ReactDOM.render(
              <Popover {...options} />,
              nj.utils.createContainer('nj-popover-container nj-layer-wrap')
            )
        }
    },
    mixins: [align, mixins.setDisplay, React.addons.LinkedStateMixin],
    getInitialState () {
        return {origin:'0 0', nearby:nj.utils.dom(this.props.nearby)}
    },
    getDefaultProps () {
        return {mode:'hover', effect:'scale'}
    },
    getOrigin (position) {
        var pos = position || this.props.position || {}
        var origin = [0,0]
        if( pos.left!=undefined ){
            origin[0] = 0
        }else if( pos.right!=undefined ){
            origin[0] = '100%'
        }
        if( pos.top!=undefined ){
            origin[1] = 0
        }else if( pos.bottom!=undefined ){
            origin[1] = '100%'
        }
        this.state.origin = origin.join(' ')
        this.setState({origin:this.state.origin})
        return this.state.origin
    },
    componentDidMount () {
        var self = this
        var nearby  = this.state.nearby
        if( !nearby ){
            return
        }
        var el = $(ReactDOM.findDOMNode(this))

        this.setAlign({
          nearby : nearby,
          element : el,
          relative : this.props.relative,
          position : this.props.position,
          onTurn (turnPosition) {
            self.getOrigin(turnPosition)
          }
        })
        

        var mode = this.props.mode

        function show(element){
            self.state.nearby = element            
            self.setDisplay(true)
        }
        var delay
        var handleFromPop
        function hide(){
            if( handleFromPop ){
                handleFromPop = null
                return
            }
            delay = window.setTimeout(()=>{
                self.setDisplay(false)
            }, 10)
        }
        if( mode=='hover' ){
            nearby.hover(function(){
                self.setDisplay(false)
                window.clearTimeout(delay)
                show(this)
            }, hide)
            // nearby.hover(function(){
            //     window.clearTimeout(delay)
            //     show(this)
            // }, hide)
            
            el.hover(function(){
                window.clearTimeout(delay)
            }, hide)

        }else if( mode=='click' ){
            nearby.click(function(e){
                self.state.visible ? self.setDisplay(false) : show(this)
                e.stopPropagation()
                e.preventDefault()
            })
            $(document).click(hide)
            el.click(function(e){
                handleFromPop = true
            })
        }

        var showClassName = this.props.showClassName || 'nj-popover-nearby'
        this.onShow(()=>{
            self.getOrigin()
            this.align.set({
                nearby : this.state.nearby
            })
            $(this.state.nearby).addClass(showClassName)
        }).onHide(()=>{
            $(this.state.nearby).removeClass(showClassName)
        })
    },
    render () {
        var className = nj.utils.joinClass('nj-popover', this.state.className, this.props.name)
        var style = {transformOrigin:this.state.origin}
        return (
        <div className={className} style={style}>
            <div className="nj-popover-inner" style={style} ref="wrap">
                {this.props.template}
            </div>
        </div>)
    }
})

module.exports = Popover