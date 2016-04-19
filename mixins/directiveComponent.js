/**
 * html指令组件
 */
import nj from '../lib'
import $ from 'jquery'
const {React, ReactDOM} = nj

const Directive = function(options){
    this.options = options || {}
    $(()=>this.start(null,1))

    //exports 为某个或某类组件集合 对外提供的接口 
    const {exports, elementGroups} = this.options    
    

    //将指令对应的组件挂到exports上
    var rootComponent
    for( var i in elementGroups ){
        var com = exports[getComponentName(i)] = elementGroups[i].component
        if( !rootComponent ){//最外层的父组件
            rootComponent = com
        }
        com.getByHandle = (handle)=> {
            for( var n=com.instances.length,i=n-1; i>=0; i-- ){
                var item = com.instances[i].handle
                if( item.props.handle == handle ){
                    return item
                }
            }
        }
    }

    rootComponent.start = this.start.bind(this)
    
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
        formElements.forEach((node,i)=>{
            var c = this.initial(node, type, parentComponent,i)
            if( c ){
                components.push(c)
            }
        })
        return components
    },
    initial (node, type, parentComponent, index) {
        var el = document.createElement('span')
        node.parentNode.insertBefore(el, node);
        node.parentNode.removeChild(node);

        var Component = this.options.elementGroups[type].component
        if( Component ){
            var options = parseAttrs(nj.utils.getAttributes(node))
            options._childNodes = nj.utils.toArray(node.childNodes)
            options._componentType = type
            options.text = options.text || node.innerText
            options.index = index || 0

            var componentInfo = this.options.elementGroups[type]
            var componentChildren = componentInfo.children || []
            
            if( options._childNodes.length ){
                options.children = []
                //先在props.children中占位 必须是有效的元素节点
                options._children = options._childNodes.filter(n=>{
                    if( n.nodeType==1 ){
                        var name = n.nodeName.toLowerCase().replace(/^nj-/, '')
                        componentChildren.indexOf(name)<0 && options.children.push('')
                        return true
                    }
                })
            }
            if( parentComponent ){
                options.parentComponent = parentComponent
            }
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
    //当前组件渲染完毕后 将dom移入组件 并且检测是否有子组件
    getChildComponents (component) {
        var {_childNodes, _componentType, _children} = component.props
        if( !_componentType ){//只适用于nj-html方式创建的组件
            return
        }
        var {wrap} = this.options
        if( typeof wrap=='function' ){
            wrap = wrap(component)
        }else{
            wrap = component.refs.wrap || ReactDOM.findDOMNode(component)
        }
        
        var {children, wrapItem} = this.options.elementGroups[_componentType]

        var childNodes = _childNodes || [];//_children过滤了非元素节点
        (wrapItem?_children:childNodes).forEach((n,i)=>{
            var w = wrap
            if( typeof wrapItem=='function' ){
                w = wrapItem(component,n,i)
            }
            w && w.appendChild(n)
        })
        
        var components = []

        children && children.forEach((type)=>{
            var c = this.directiveInit(type, ReactDOM.findDOMNode(component), component)
            components = components.concat(c)
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