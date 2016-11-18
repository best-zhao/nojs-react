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
        var el = (0, _reactDom.findDOMNode)(this);
        var self = this;
        (0, _jquery2.default)(el).delegate('a', 'click', function (e) {
            var target = this.target;
            if (!target) {
                e.preventDefault();
                var href = encodeURIComponent(this.getAttribute('href'));
                var _self$props$params = self.props.params;
                var id = _self$props$params.id;
                var url = _self$props$params.url;

                href && self.context.router.push('/' + id + '/' + href);
            }
        });
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
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        //组件初始化渲染完毕时 menuData不存在 
        //父Container会再次传递menuData过来触发componentWillReceiveProps事件
        var menuData = nextProps.menuData;
        var _nextProps$params = nextProps.params;
        var id = _nextProps$params.id;
        var url = _nextProps$params.url;

        var node = menuData && menuData[id];
        this.load(url || node && node.link, id);
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
                var menuData = _this.props.menuData;

                onComplete && onComplete({ id: id, url: url });
                //更新html后 需要加载相应组件
                var pageName = scripts[url] || scripts[id];

                if (!scripts[url] && scripts[id]) {
                    //只有id匹配 需检查url是否跟id所在节点的link是否匹配
                    if (url != menuData[id].link) {
                        return;
                    }
                }
                pageName && require("bundle!js/" + pageName)(function (p) {
                    _this.constructor.leaveEvent = p.onLeave;
                    p.init && p.init({ id: id, url: url });
                    //this.renderComponent()
                });
            });
        }).fail(function (data) {
            //console.log(this.props.params, data)
        });
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