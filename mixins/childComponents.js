/**
 * 获取组合组件之间的父子关系
 */
var nj = require('../lib/nojs-react')
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
    
    getInitialState () {
        var state = {childComponents:[]}
        var fn = this.constructor
        var point = fn.point = fn.instances.length//组件当前指针
        
        fn.instances.push({
            handle : this,
            components : []
        })

        // console.log(fn.instances)

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
                parentComponent.components.forEach((f)=>{
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
        
        if( parentComponent ){
            state.parentComponent = parentComponent
        }
        return state
    },
    componentDidMount  () {
        var fn = this.constructor
        this.state.childComponents = fn.instances[fn.instances.length-1].components
        fn.point = null
        fn.parents = null
    }
}
//设置组件可能存在父子组件关系的
exports.setParents = function(parents){
    return $.extend(true, {}, config, {statics:{parents:parents}})
}