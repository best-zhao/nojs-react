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
        let el = findDOMNode(this)
        let self = this
        $(el).delegate('a', 'click', function(e){
            let target = this.target
            if( !target ){
                e.preventDefault()
                let href = encodeURIComponent(this.getAttribute('href'))
                let {params:{id, url}} = self.props
                href && self.context.router.push('/'+id+'/'+href)
            }
        })
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
    componentWillReceiveProps (nextProps) {
        //组件初始化渲染完毕时 menuData不存在 
        //父Container会再次传递menuData过来触发componentWillReceiveProps事件
        const {menuData, params:{id, url}} = nextProps
        let node = menuData && menuData[id]
        this.load(url||node&&node.link, id)
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
                let {menuData} = this.props
                onComplete && onComplete({id, url})
                //更新html后 需要加载相应组件
                let pageName = scripts[url] || scripts[id]

                if( !scripts[url] && scripts[id] ){//只有id匹配 需检查url是否跟id所在节点的link是否匹配
                    if( url != menuData[id].link ){
                        return
                    }
                }
                pageName && require("bundle!js/" + pageName)(p=>{
                    this.constructor.leaveEvent = p.onLeave
                    p.init && p.init({id, url})
                    //this.renderComponent()
                })
                
            })
        })
        .fail(data=>{
            //console.log(this.props.params, data)
        })
    },
    // renderComponent () {
    //     let el = $(findDOMNode(this))
    //     let components = [{'name':'datepicker'}];
    //     components.forEach(item=>{
    //         let {name, module=name} = item
    //         require("bundle!js/Component/" + module)(Component=>{
    //             el.find('[data-render="'+name+'"]').each(function(){
    //                 render(<Component />, this)
    //             })
    //         })            
    //     })
    // },
    render () {
        const {html=''} = this.state
        return <div className="grid-main"><div className="grid-inner" dangerouslySetInnerHTML={{__html:html}}></div></div>
    }
})

export default Content