/**
 * 框架组件
 */
require('../css/frame.css')

var nj = require('./nojs-react')
var {React, ReactDOM} = nj
var {Component} = React
var $ = require('jquery')
var Tree = require('./tree')

exports.Frame = React.createClass({
    getInitialState () {
        return {}
    },
    componentDidMount () {
        var self = this
        var {menu} = this.props
        var menuTree = this.state.menu = Tree.init({
            data : menu,
            element : document.getElementById('frameMenu')
        }).onSelect(function(node,e){
            var link = node.link
            if( !link ){
                e.preventDefault()
                return
            }
            self.jump(link, node)
        })
        
        this.state.menuFormatData = menuTree.props.dataFormat.databyid

        var {url, id} = nj.utils.parseHash()
        if( !id ){
            menuTree.select(menuData[1])
        }

        function watchHash(e){
            var {url, id} = nj.utils.parseHash()
            if( !url && !id ){
                return
            }
            if( url ){
                self.jump(url)
            }
            if( id ){
                self.state.menu.select(self.state.menuFormatData[id])
            }
        }
        window.onhashchange = watchHash

        watchHash()        
    },
    jump (url, node, e) {
        if( this.jump.start || !url ){
            return
        }

        var hashData = nj.utils.parseHash()    
        
        var nodeId = node ? node.id : hashData.id
        this.jump.start = 1
        setTimeout(()=>{
            this.jump.start = null
        },10)
        
        var wrap = $(this.refs.frameContent)
        wrap.css({'visibility':'hidden'}).fadeOut(100)
        setTimeout(function(){
            wrap.css('visibility', 'visible').fadeIn(100)
        }, 200)

        var {onChange, parseUrl, parseContent} = this.props

        url = typeof parseUrl=='function' ? parseUrl(url) : url

        //nj.pageframe.destoryEvent.complete()//.end()
        // iframeContainer.load(url, contentInit)
        $.get(url, (json)=>{
            json = typeof parseContent=='function' ? parseContent(json) : json
            wrap.html(json)            
            onChange && onChange(node, this.refs.frameContent)
        }).error(()=>{
            wrap.html('')
        })
        this.jump.url = url

        var hash = []
        if( nodeId ){
            hash.push('id='+nodeId)
        }
        if( !node && url ){
            hash.push('url='+encodeURIComponent(url))
        }
        location.hash = hash.join('&')
    },
    componentWillReceiveProps (){

    },
    render () {
        var {logo} = this.props
        logo = logo && <div className="nj-frame-logo">{logo}</div>
        return (
        <div className="nj-frame">
            <div className="nj-frame-side">
                {logo}
                <div id="frameMenu" className="nj-tree"></div>
            </div>
            <div className="nj-frame-content">
                <div className="nj-frame-inner" ref="frameContent"></div>
            </div>
        </div>
        )
    }
});
