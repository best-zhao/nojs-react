/**
 * html指令组件
 */
import nj from '../lib'
import $ from 'jquery'
const {React, ReactDOM} = nj

const Directive = function(options){
    this.options = options || {}
    $(()=>this.start(null,1))

    //exports 为某个或某类组件集合 
    const {exports, elementGroups} = this.options    
    exports.start = this.start.bind(this)

    //将指令对应的组件挂到exports上
    for( var i in elementGroups ){
        exports[getComponentName(i)] = elementGroups[i].component
    }
}

Directive.prototype = {
    start (container,f) {
        const {elementGroups} = this.options
        for( var i in elementGroups ){
            this.directiveInit(i, container||document.body)
        }
    },
    directiveInit (type, context, parentComponent) {
        if( !context ){
            return
        }
        var components = []
        var formElements = nj.utils.toArray(context.querySelectorAll('nj-'+type))
        formElements.forEach((node)=>{
            var c = this.initial(node, type, parentComponent)
            if( c ){
                c.state.parentComponent = parentComponent
                components.push(c)
            }
        })
        return components
    },
    initial (node, type, parentComponent) {
        var el = document.createElement('span')
        node.parentNode.insertBefore(el, node);
        node.parentNode.removeChild(node);

        var Component = this.options.elementGroups[type].component
        if( Component ){
            var options = parseAttrs(nj.utils.getAttributes(node))
            options._childNodes = nj.utils.toArray(node.childNodes)
            options._componentType = type
            options.text = options.text || node.innerText
            // if( options.value!=undefined ){
            //     options.defaultValue = options.value
            //     delete options.value
            // }
            // options._node = el
            // if( type=='input-group' && parentComponent ){//继承form组件showicon属性
            //     options.showicon = parentComponent.props.showicon
            // }
            return ReactDOM.render(<Component {...options} />, el)
        }
    },
    //当前组件渲染完毕后 检测是否有子组件
    getChildComponents (component) {
        var {_childNodes, _componentType} = component.props
        if( !_componentType ){//只适用于nj-html方式创建的组件
            return
        }
        var wrap = component.refs.wrap//ReactDOM.findDOMNode(component)
        var childNodes = _childNodes || []
        childNodes.forEach((n)=>{
            wrap.appendChild(n)
        })
        var children = this.options.elementGroups[_componentType]
        children = children && children.children
        var components = []
        children && children.forEach((type)=>{
            components = components.concat(this.directiveInit(type, wrap, component))
        })
        component.state.childComponents = components

        var instances = component.constructor.instances
        for( var i=0,n=instances.length;i<n;i++ ){
            if( instances[i].handle===component ){
                Array.prototype.push.apply(instances[i].components, components)
                break;
            }
        }
    }
}

//<input required>将默认属性值为空的转化为required="required"
function parseAttrs(attrs){
    for( var i in attrs ){
        if( attrs[i]==='' && i!='defaultValue' ){
            attrs[i] = i
        }
    }
    return attrs
}
//nj-input => Input / nj-input-group => InputGroup
function getComponentName(name){
    return name.replace('nj-', '').replace(/^(\w)/,function(a,b,c){
      return b.toUpperCase()
    }).replace(/-(\w)/,function(a,b,c){
      return b.toUpperCase()
    })
}

export default Directive