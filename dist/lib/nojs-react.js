'use strict';

require('../../css/react.css');

//引入React和ReactDOM
var React = exports.React = require('react/lib/ReactWithAddons');
var ReactDOM = exports.ReactDOM = require('react-dom');
var $ = require('jquery');
exports.render = ReactDOM.render;

//工具集
exports.utils = require('../utils/utils');

exports.mixins = {
    setDisplay: require('../mixins/effect'),
    childComponents: require('../mixins/childComponents')
};

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
require('fetch-detector');
require('fetch-ie8');
require('es6-promise').polyfill();

/**
 * html标签指令组件 兼容ie处理
 * 保证nojs-react在head处引入并执行
 */
'form|input|input-group|select|scroll|scroll-items|scroll-page|switch|switch-menu|switch-item'.split('|').forEach(function (dir) {
    return document.createElement('nj-' + dir);
});

var isMobile = exports.isMobile = screen.width <= 640;
exports.clickEvent = isMobile ? 'tap' : 'click';

window.noJS = window.noJS || {};
window.noJS.ready = function (fn) {
    fn(exports);
};

var muiTimer;
function addMui(e) {
    var mui = $('<div class="nj-mui"><span></span></div>');
    var self = $(this);
    self.addClass('nj-mui-active').append(mui);
    mui.children().css(exports.Mui.style(e, this));

    muiTimer && window.clearTimeout(muiTimer);
    muiTimer = window.setTimeout(function (e) {
        self.removeClass('nj-mui-active').children('.nj-mui').remove();
    }, 2000);
}

var nj_selector = 'button';

exports.mui = function (selector) {
    nj_selector += ',' + selector;
};

$(function () {
    $(document).delegate(nj_selector, 'click', addMui);
});

exports.Mui = React.createClass({
    displayName: 'Mui',

    statics: {
        style: function style(e, node) {
            var self = $(node);
            var offset = self.offset();
            var size = self.outerWidth();

            var top = e.clientY - offset.top + $(window).scrollTop();
            var left = e.clientX - offset.left + $(window).scrollLeft();
            var radius = (left > size / 2 ? left : size - left) + 5;

            return {
                'width': radius * 2,
                'height': radius * 2,
                'top': top - radius,
                'left': left - radius
            };
        }
    },
    getDefaultProps: function getDefaultProps() {
        return { tag: 'div' };
    },
    getInitialState: function getInitialState() {
        return { animate: [] };
    },
    handleClick: function handleClick(e) {
        var _this = this;

        var animate = this.state.animate;

        var style = exports.Mui.style(e, ReactDOM.findDOMNode(this));
        var index = animate.length;

        var timer = window.setTimeout(function (e) {
            animate.shift();
            _this.setState({ animate: animate });
        }, 3000);
        animate.push(timer);

        this.setState({ animate: animate, style: style });
        var onClick = this.props.onClick;

        onClick && onClick(e);
    },
    render: function render() {
        var tag = this.props.tag;
        var _state = this.state;
        var animate = _state.animate;
        var style = _state.style;

        var className = exports.utils.joinClass(this.props.className, animate && 'nj-mui-active', 'nj-mui-item');
        return React.createElement(tag, Object.assign({}, this.props, { onClick: this.handleClick, className: className }), this.props.children, animate.map(function (item, i) {
            return React.createElement(
                'div',
                { className: 'nj-mui', key: item },
                React.createElement('span', { style: style })
            );
        }));
    }
});