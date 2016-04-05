/**
 * 框架组件
 */
var nj = require('../../lib/nojs-react')
var {React, ReactDOM} = nj
var $ = require('jquery')
var Tree = require('../../lib/tree')
var Marked = require('marked')

exports.Frame = React.createClass({
    getInitialState () {
        return {}
    },
    componentDidMount () {
        let a = 1
        var self = this
        var menuSource  = this.props.menuSource
        menuSource && $.getJSON(menuSource, (json)=>{
            var menu = this.state.menu = Tree.init({
                data : json.data,
                element : document.getElementById('frameMenu')
            }).onSelect(function(node,e){
                var link = node.link
                if( !link ){
                    e.preventDefault()
                    return
                }
                self.jump(link, node)
            })
            
            this.state.menuFormatData = menu.props.dataFormat.databyid

            watchHash()

            var {url, id} = nj.utils.parseHash()
            if( !id ){
                menu.select(json.data[1])
            }
        })

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
        //nj.pageframe.destoryEvent.complete()//.end()
        // iframeContainer.load(url, contentInit)
        $.get('doc/'+url+'.md', (json)=>{
            wrap.html(Marked(json))
            Prism.highlightAll(true)
            this.props.onChange && this.props.onChange(node, this.refs.frameContent)
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
        return (
        <div className="nj-frame">
            <div className="nj-frame-side">
                <div id="frameMenu" className="nj-tree"></div>
            </div>
            <div className="nj-frame-content">
                <div className="nj-frame-inner pd40" ref="frameContent"></div>
            </div>
        </div>
        )
    }
})