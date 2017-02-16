import React from 'react'
import {render, findDOMNode} from 'react-dom'
import $ from 'jquery'
import {Form} from 'nj/form'

const Content = React.createClass({
    statics : {        
        onLeave (e) {
            Content.leaveEvent && Content.leaveEvent(e)
        }
    },
    contextTypes: {
        router : React.PropTypes.object
    },
    getInitialState () {
        return {}
    },
    componentDidMount () {
        this.jump()
        this.context.router.setRouteLeaveHook(
            this.props.route, 
            this.routerWillLeave
        )
    },
    routerWillLeave(nextLocation) {
        //return false
        // console.log(nextLocation)
      // 返回 false 会继续停留当前页面，
      // 否则，返回一个字符串，会显示给用户，让其自己决定
      // if (!this.state.isSaved)
        //return '确认要离开？';
    },
    jump (props) {
        let {routes:[{props:rootProps}], params:{id, url}} = props || this.props
        let {menu} = rootProps
        //获取当前节点
        let node = menu.filter(n=>n.id==id)[0]
        this.load(url||node&&node.link, id)
    },
    componentWillReceiveProps (nextProps) {
        let {params} = this.props
        let {params:nParams} = nextProps;
        (nParams.id!=params.id || nParams.url!=params.url) && this.jump(nextProps)
    //     //组件初始化渲染完毕时 menuData不存在 
    //     //父Container会再次传递menuData过来触发componentWillReceiveProps事件
    //     const {menuData, params:{id, url}} = nextProps
    //     let node = menuData && menuData[id]
    //     this.load(url||node&&node.link, id)
    },
    load (url, id) {
        let {routes:[{props:rootProps}]} = this.props
        let {template, htmlParse, onComplete, scripts={}} = rootProps

        let realUrl = url
        if( url && typeof template=='function' ){
            realUrl = template({id, url})
        }
        realUrl && $.get(realUrl).then(html=>{
            if( typeof htmlParse=='function' ){
                html = htmlParse(html, {id, url})
            }
            this.setState({html}, e=>{
                let {menu, parent} = this.props
                onComplete && onComplete({id, url})
                
                //更新html后 需要加载相应组件
                let pageName = scripts[url] || scripts[id]
                if( !scripts[url] && scripts[id] ){//只有id匹配 需检查url是否跟id所在节点的link是否匹配
                    let node = menu.filter(n=>n.id==id)[0]
                    if( url != node.link ){
                        return
                    }
                }
                pageName && require("bundle!js/" + pageName)(p=>{
                    this.constructor.leaveEvent = p.onLeave
                    p.init && p.init({id, url})
                })

                setTimeout(e=>parent.forceUpdate(), 1)
            })
        })
        .fail(data=>{
            //console.log(this.props.params, data)
        })
    },    
    render () {
        const {html=''} = this.state
        return <div className="grid-main">
            <div className="grid-inner" dangerouslySetInnerHTML={{__html:html}}></div>
        </div>
    }
})

export default Content