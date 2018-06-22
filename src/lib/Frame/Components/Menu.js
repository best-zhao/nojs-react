import {Link} from 'react-router'
import $ from 'jquery'
import Tree from 'nj/tree'
import nj, {React, ReactDOM, mixins, utils} from '../../nojs-react'

class Menu extends React.Component{
    changeHandle (node, e) {
        if( !node.link ){
            e.preventDefault()
        }
    }
    componentDidMount () {
        let tree = this.refs[this.props.menuVisible?'tree':'menu']
        const {onReady, parentSelect} = this.props
        //组件渲染完毕后 向外传递格式化后的节点数据
        onReady && onReady(tree.state.dataFormat.databyid)

        // if( !parentSelect ){//不允许父节点选中 点击展开
            tree.onChange((node,e)=>{
                if( node.children.length && !node.link ){
                    // if ( node.open && node.link ){
                    //     return
                    // }
                    e.preventDefault()
                    tree.toggle(node)
                }
            })
        // }
    }
    componentWillReceiveProps (nextProps) {
        //通过props.defaultNode来更新当前选中节点
        let {tree, menu} = this.refs
        let {defaultNode} = nextProps

        let treeDefaultNode = tree.state.dataFormat.databyid[defaultNode]        
        treeDefaultNode && tree.select(treeDefaultNode)
        let menuDefaultNode = menu.state.dataFormat.databyid[defaultNode]   
        menuDefaultNode && menu.select(menuDefaultNode)
    }
    render () {
        let {defaultNode, menu, sidebar, parentSelect, menuVisible} = this.props
        let _props = {
            data : menu,
            onChange: this.changeHandle.bind(this), 
            defaultNode: defaultNode,
            //使用Link组件更新路由 css控制Link覆盖文字之上
            defineName: item=>{
                let allowSelect = item.link
                if( item.children.length && !parentSelect ){//不允许父节点选中
                    allowSelect = false
                }
                return <span>{allowSelect ? <Link to={'/id/'+item.id}></Link> : null} {item.name}</span>
            }
        }
        let tree = <span>
            <div className={utils.joinClass('nj-tree', 'nj-max-tree', !menuVisible&&'d_hide')}>
                <Tree {..._props} ref="tree" />
            </div>  
            <div className={utils.joinClass('nj-tree', 'nj-menu-tree', menuVisible&&'d_hide')}>
                <Tree {..._props} ref="menu" style="menu"/>
            </div>
        </span>              

        if( typeof sidebar=='function' ){
            tree = sidebar(tree)
        }
        return <div className="grid-menu">
            <div className="grid-inner">{tree}</div>
        </div>
    }
}

module.exports =  Menu