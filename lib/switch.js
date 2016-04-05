/**
 * Switch组件
 */
var nj = require('./nojs-react'), {React, ReactDOM, mixins} = nj
var $ = require('jquery')

exports.Switch = React.createClass({  
    mixins : [mixins.childComponents.config],
    getInitialState () {
        return {index:0, trigger:this.props.trigger||'click'}
    },
    componentDidMount () {
        // var el = $(ReactDOM.findDOMNode(this))
        // el.click(()=>{

        // })
        //自动切换
        var interval = this.props.interval
        interval && window.setInterval(()=>{
            this.change(++this.state.index)
        }, interval)

        this.changeEvent = nj.utils.addEventQueue.call(this, 'onChange').add(this.props.onChange)
    },
    change (index) {
        var length = this.state.length 
        index = index <0 ? length-1 : index
        index = index>= length ? 0 : index
        this.setState({index:index})

        this.state.childComponents.forEach((c)=>{
            // c.setState({active:!c.state.active})
            c.forceUpdate()
        })
        this.changeEvent.complete(index)
    },
    render () {
        var className = nj.utils.joinClass('nj-switch', this.props.className)
        return (
        <div {...this.props} className={className}>
            {this.props.children}
        </div>
        )
    }
})

exports.SwitchMenu = React.createClass({
    mixins : [mixins.childComponents.setParents([exports.Switch])],    
    render () {
        var parentComponent = this.state.parentComponent
        var index = parentComponent.state.index
        var className = nj.utils.joinClass('nj-switch-menu', index==this.state.index&&'nj-switch-menu-active')
        
        var options = {className:className}
        
        var trigger = parentComponent.state.trigger
        var eventType = trigger=='hover' ? 'onMouseEnter' : 'onClick'
        options[eventType] = parentComponent.change.bind(parentComponent,this.state.index)

        options = Object.assign({}, this.props, options)

        return (
        <div {...options} >
            {this.props.children}
        </div>
        )
    }
})

exports.SwitchItem = React.createClass({
    mixins : [mixins.childComponents.setParents([exports.Switch])],
    componentDidMount () {
        //以SwitchItem的数量来更新Switch组件的切换子项个数
        this.state.parentComponent.state.length = this.state.index+1
    },
    render () {
        var index = this.state.parentComponent.state.index
        var className = nj.utils.joinClass('nj-switch-item', index==this.state.index?'nj-switch-item-active':'d_hide')
        return (
        <div {...this.props} className={className}>
            {this.props.children}
        </div>
        )
    }
})