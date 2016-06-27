/**
 * 获取组合组件之间的父子关系
 * 通过point与rootID双重验证组件层级关系
 */
var nj = require('../lib')
// var {React, ReactDOM} = nj
var ReactDOM = require('react-dom')
var $ = require('jquery')

var config = exports.config = {
    statics : {
        point : null,
        //所有组件实例
        instances : [
            // {   
            //     //存放子组件实例
            //     components : [],
            //     handle : this
            // }
        ],

        getByHandle (handle) {
            for( var i=0,n=this.instances.length;i<n;i++ ){
                var item = this.instances[i].handle
                if( item.props.handle==handle ){
                    return item
                }
            }
        }
    },
    getDefaultProps () {
        return {}
    },    
    getInitialState () {
        var state = {childComponents:[]}
        var fn = this.constructor
        if( fn.parents ){//对于组合类组件中的非最顶级组件 html指令标签初始化的方式 index来源于props
            state.index = this.props.index
            state.parentComponent = this.props.parentComponent
        }
        var point = fn.point = fn.instances.length//组件当前指针
        
        fn.instances.push({
            handle : this,
            components : []
        })
        return state
    },  
    /*componentWillMount () {
        this.state.type=='switch' && console.log(0, this.state)
    },  */ 
    componentWillMount  () {
        
        var fn = this.constructor
        var state = this.state

        //查找存在指针的父组件
        var parents = fn.parents || []
        var parentConstructor
        var parentComponent
        var parentPoint

        for( var i=0; i<parents.length; i++ ){
            parentConstructor = parents[i]
            parentPoint = parentConstructor.point     
                   
            if( parentPoint != null ){
                parentComponent = parentConstructor.instances[parentPoint]                
                
                //遍历父组件中 已存在的同类组件 计算出当前组件所处的索引
                var index = 0
                parentComponent.components.forEach(f=>{
                    if( fn===f.constructor ){
                        index++
                    }
                })
                state.index = index

                //将当前组件添加到有效的父组件中
                parentComponent.components.push(this)
                parentComponent = parentComponent.handle
                state.parentComponent = parentComponent
                break;
            }
        }

        state.childComponents = fn.instances[fn.instances.length-1].components
        
        // console.log(222,this.props.type,this._reactInternalInstance._rootNodeID)
        //fn.parents = null
    },  
    componentDidMount () {
        var fn = this.constructor
        //标记在组件顶层dom上
        ReactDOM.findDOMNode(this).$component = this
        fn.point = null
    },
    componentWillUnmount () {
        //从父组件中移除
        var {parentComponent} = this.state
        if( parentComponent ){
            var {childComponents} = parentComponent.state
            var index = childComponents.indexOf(this)
            childComponents.splice(index, 1)
        }        
    },
}
//设置组件可能存在父子组件关系的
exports.setParents = function(parents){
    return $.extend(true, {}, config, {statics:{parents:parents}})
}

/**
 * 当子组件是动态存在的时候 需要获取一次父组件
 */
exports.getParentComponent = function(){
    var {parentComponent} = this.state
    if( parentComponent ){
        return
    }
    var selfNode = ReactDOM.findDOMNode(this)
    //可能存在关系的父组件
    var parents = this.constructor.parents || [] 

    var body = document.body
    var parent = selfNode
    while ( parent = parent.parentNode ){
        var handle = parent.$component
        if( handle && parents.indexOf(handle.constructor)>=0 ){
            this.state.parentComponent = handle
            handle.state.childComponents.push(this)
            break;
        }
        if( parent === body ){
            break;
        }
    }
}