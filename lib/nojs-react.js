
require('../css/react.css')

//引入React和ReactDOM
var React = exports.React = require('react/lib/ReactWithAddons');
var ReactDOM = exports.ReactDOM = require('react-dom');
var $ = require('jquery')
exports.render = ReactDOM.render

//工具集
exports.utils = require('../utils/utils');

exports.mixins = {
    setDisplay : require('../mixins/effect'),
    childComponents : require('../mixins/childComponents')
};

/* 
 * [jQuery animate动画扩展]
 * http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.js
 * easeIn：加速度缓动；
 * easeOut：减速度缓动；
 * easeInOut：先加速度至50%，再减速度完成动画
 */    
$.extend($.easing, {
    //指数曲线缓动
    easeOutExpo: function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    }
});


/**
 * fetch: 针对IE低版本处理
 * https://github.com/camsong/blog/issues/2
 * 
 * 由于 IE8 是 ES3，需要引入 ES5 的 polyfill: es5-shim, es5-sham
 * 引入 Promise 的 polyfill: es6-promise
 * 引入 fetch 探测库：fetch-detector
 * 引入 fetch 的 polyfill: fetch-ie8
 * 可选：如果你还使用了 jsonp，引入 fetch-jsonp
 * 可选：开启 Babel 的 runtime 模式，现在就使用 async/await
 */
require('fetch-detector')
require('fetch-ie8')
require('es6-promise').polyfill()


/**
 * html标签指令组件 兼容ie处理
 * 保证nojs-react在head处引入并执行
 */
'form|input|input-group|select|scroll|scroll-items|scroll-page|switch|switch-menu|switch-item'.split('|').forEach(dir=>{
    let tagName = 'nj-'+dir
    document.createElement(tagName)
})


window.noJS = window.noJS || {}
window.noJS.load = function(js){
    document.write('<script src="'+js+'"></'+'script>')
}


var muiTimer
function addMui(e){
    var mui = $('<div class="nj-mui"><span></span></div>')
    var self = $(this)    
    self.addClass('nj-mui-active').append(mui)
    mui.children().css(exports.Mui.style(e, this))

    muiTimer && window.clearTimeout(muiTimer)
    muiTimer = window.setTimeout(e=>{
        self.removeClass('nj-mui-active').children('.nj-mui').remove()
    }, 2000)    
}

var nj_selector = 'button'

exports.mui = function(selector){
    nj_selector += ','+selector
}

$(function(){
    $(document).delegate(nj_selector, 'click', addMui)
})


exports.Mui = React.createClass({
    statics : {
        style (e, node) {
            var self = $(node)
            var offset = self.offset()
            var size = self.outerWidth()
            
            var top = e.clientY - offset.top + $(window).scrollTop()
            var left = e.clientX - offset.left + $(window).scrollLeft()
            var radius = (left>size/2 ? left : size-left)+5

            return {
                'width' : radius*2,
                'height' : radius*2,
                'top' : top-radius,
                'left' : left-radius
            }
        }
    },
    getDefaultProps () {
        return {tag:'div'}
    },
    getInitialState () {
        return {animate:[]}
    },
    handleClick (e) {
        var {animate} = this.state
        var style = exports.Mui.style(e, ReactDOM.findDOMNode(this))
        var index = animate.length
        
        var timer = window.setTimeout(e=>{
            animate.shift()
            this.setState({animate})
        }, 3000)
        animate.push(timer)
        
        this.setState({animate, style})
        var {onClick} = this.props
        onClick && onClick(e)
    },
    render () {
        var {tag} = this.props
        var {animate, style} = this.state
        var className = exports.utils.joinClass(
            this.props.className, 
            animate&&'nj-mui-active', 
            'nj-mui-item'
        )
        return React.createElement(
            tag,
            Object.assign({}, this.props, { onClick: this.handleClick, className: className }),
            this.props.children,
            animate.map((item, i)=><div className="nj-mui" key={item}><span style={style}></span></div>)
        )
    }
})