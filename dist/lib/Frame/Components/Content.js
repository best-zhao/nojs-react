'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _form = require('nj/form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = _react2.default.createClass({
    displayName: 'Content',

    statics: {
        onLeave: function onLeave(e) {
            Content.leaveEvent && Content.leaveEvent(e);
        }
    },
    contextTypes: {
        router: _react2.default.PropTypes.object
    },
    getInitialState: function getInitialState() {
        return {};
    },
    componentDidMount: function componentDidMount() {
        this.jump();
        this.context.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
    },
    routerWillLeave: function routerWillLeave(nextLocation) {
        //return false
        // console.log(nextLocation)
        // 返回 false 会继续停留当前页面，
        // 否则，返回一个字符串，会显示给用户，让其自己决定
        // if (!this.state.isSaved)
        //return '确认要离开？';
    },
    jump: function jump(props) {
        var _ref = props || this.props;

        var _ref$routes = _slicedToArray(_ref.routes, 1);

        var rootProps = _ref$routes[0].props;
        var _ref$params = _ref.params;
        var id = _ref$params.id;
        var url = _ref$params.url;
        var menu = rootProps.menu;
        //获取当前节点

        var node = menu.filter(function (n) {
            return n.id == id;
        })[0];
        this.load(url || node && node.link, id);
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        var params = this.props.params;
        var nParams = nextProps.params;

        (nParams.id != params.id || nParams.url != params.url) && this.jump(nextProps);
        //     //组件初始化渲染完毕时 menuData不存在 
        //     //父Container会再次传递menuData过来触发componentWillReceiveProps事件
        //     const {menuData, params:{id, url}} = nextProps
        //     let node = menuData && menuData[id]
        //     this.load(url||node&&node.link, id)
    },
    load: function load(url, id) {
        var _this = this;

        var _props$routes = _slicedToArray(this.props.routes, 1);

        var rootProps = _props$routes[0].props;
        var template = rootProps.template;
        var htmlParse = rootProps.htmlParse;
        var onComplete = rootProps.onComplete;
        var _rootProps$scripts = rootProps.scripts;
        var scripts = _rootProps$scripts === undefined ? {} : _rootProps$scripts;


        var realUrl = url;
        if (url && typeof template == 'function') {
            realUrl = template({ id: id, url: url });
        }
        realUrl && _jquery2.default.get(realUrl).then(function (html) {
            if (typeof htmlParse == 'function') {
                html = htmlParse(html, { id: id, url: url });
            }
            _this.setState({ html: html }, function (e) {
                var _props = _this.props;
                var menu = _props.menu;
                var parent = _props.parent;

                onComplete && onComplete({ id: id, url: url });

                //更新html后 需要加载相应组件
                var pageName = scripts[url] || scripts[id];
                if (!scripts[url] && scripts[id]) {
                    //只有id匹配 需检查url是否跟id所在节点的link是否匹配
                    var node = menu.filter(function (n) {
                        return n.id == id;
                    })[0];
                    if (url != node.link) {
                        return;
                    }
                }
                pageName && require("bundle!js/" + pageName)(function (p) {
                    _this.constructor.leaveEvent = p.onLeave;
                    p.init && p.init({ id: id, url: url });
                });

                setTimeout(function (e) {
                    return parent.forceUpdate();
                }, 1);
            });
        }).fail(function (data) {
            //console.log(this.props.params, data)
        });
    },
    render: function render() {
        var _state$html = this.state.html;
        var html = _state$html === undefined ? '' : _state$html;

        return _react2.default.createElement(
            'div',
            { className: 'grid-main' },
            _react2.default.createElement('div', { className: 'grid-inner', dangerouslySetInnerHTML: { __html: html } })
        );
    }
});

exports.default = Content;