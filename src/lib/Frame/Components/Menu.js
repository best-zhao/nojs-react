import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'
import Tree from 'nj/tree'

const Menu = React.createClass({
    changeHandle (node, e) {
        if( !node.link ){
            e.preventDefault()
        }
    },
    componentDidMount () {
        const {tree} = this.refs
        const {onReady} = this.props
        //组件渲染完毕后 向外传递格式化后的节点数据
        onReady && onReady(tree.state.dataFormat.databyid)
    },
    componentWillReceiveProps (nextProps) {
        //通过props.defaultNode来更新当前选中节点
        const {tree} = this.refs
        let {defaultNode} = nextProps
        defaultNode = tree.state.dataFormat.databyid[defaultNode]        
        defaultNode && tree.select(defaultNode)
    },
    render () {
        let {defaultNode, menu, sidebar} = this.props
        let tree = <div className="nj-tree">
            <Tree ref="tree" 
                data={menu} 
                onChange={this.changeHandle} 
                defaultNode={defaultNode}
                //使用Link组件更新路由 css控制Link覆盖文字之上
                defineName={item=><span>{item.link ? <Link to={'/'+item.id}></Link> : null} {item.name}</span> }
            />
        </div>            
        if( typeof sidebar=='function' ){
            tree = sidebar(tree)
        }
        return <div className="grid-menu">
            <div className="grid-inner">{tree}</div>
        </div>
    }
})

export default Menu