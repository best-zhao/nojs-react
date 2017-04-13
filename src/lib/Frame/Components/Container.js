import $ from 'jquery'
import nj, {React, utils} from '../../'
import Menu from './Menu'
import Topbar from './Topbar'

const {localStorage, joinClass} = utils
const menuVisible = 'menu_visible'

const Container = React.createClass({
    contextTypes: {
        router : React.PropTypes.object
    },    
    getInitialState () {
        return {
            menuVisible:this.setVisible(),
            topbarItems : [
                {content:<i className="nj-icon nj-icon-menu"></i>, type:'button', handle:this.toggleMenu, align:'left'},
                {content:<i className="nj-icon nj-icon-back"></i>, type:'button', handle:e=>this.context.router.goBack(), align:'left'}
            ]
        }
    },
    componentDidMount () {
        let self = this
        let {routes:[{props:rootProps}]} = this.props
        let {menu} = rootProps

        $(document).delegate('div.grid-main a, div.grid-topbar a', 'click', function(e){
            let target = this.target
            if( !target && !e.isDefaultPrevented() ){//如果之前添加了preventDefault 这里不再跳转
                e.preventDefault()
                let href = this.getAttribute('href')
                if( !href ){
                    return
                }
                let {params:{id, url}} = self.props

                //如果url与另一个节点的link匹配 则直接跳都那个node
                let node_url = menu.filter(n=>n.link==href&&n.id!=id)[0]
                if( node_url ){
                    self.context.router.push('/'+node_url.id)
                }else{
                    self.context.router.push('/'+id+'/'+encodeURIComponent(href))
                }
            }
        })
    },
    toggleMenu (e) {
        this.setState({menuVisible:this.setVisible(true)})
        e.preventDefault()
    },
    setVisible (turn) {
        let visible = localStorage.get(menuVisible) || true
        visible = visible ? JSON.parse(visible) : visible
        visible = turn ? !visible : visible
        localStorage.set(menuVisible, visible)
        return visible
    },
    render () {
        let {routes:[{props:rootProps}]} = this.props//this.props.routes[0].props
        let {menu, sidebar, showTopbar=true, topbarItems=[], style} = rootProps

        const {menuVisible} = this.state
        const {children, params} = this.props
        const _children = children && React.cloneElement(children, {parent:this})

        let className = joinClass(
            'app-container', 
            !menuVisible && 'hide-menu',
            showTopbar && 'show-topbar',
            style && 'app-style'+style
        )
        return <div className={className}>
            <Menu defaultNode={params.id} menu={menu} sidebar={sidebar} />
            { showTopbar ?  <Topbar items={this.state.topbarItems.concat(topbarItems)}/> : null }
            {_children}
        </div>
    }
})

export default Container