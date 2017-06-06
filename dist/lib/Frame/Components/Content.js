'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _form = require('nj/form');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = function (_React$Component) {
    _inherits(Content, _React$Component);

    _createClass(Content, null, [{
        key: 'onLeave',
        value: function onLeave(e) {
            Content.leaveEvent && Content.leaveEvent(e);
        }
    }]);

    function Content(props) {
        _classCallCheck(this, Content);

        var _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Content, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.jump();
            this.context.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
        }
    }, {
        key: 'routerWillLeave',
        value: function routerWillLeave(nextLocation) {
            //return false
            // console.log(nextLocation)
            // 返回 false 会继续停留当前页面，
            // 否则，返回一个字符串，会显示给用户，让其自己决定
            // if (!this.state.isSaved)
            //return '确认要离开？';
        }
    }, {
        key: 'jump',
        value: function jump(props) {
            var _ref = props || this.props,
                _ref$routes = _slicedToArray(_ref.routes, 1),
                rootProps = _ref$routes[0].props,
                _ref$params = _ref.params,
                id = _ref$params.id,
                url = _ref$params.url;

            var menu = rootProps.menu;
            //获取当前节点

            var node = menu.filter(function (n) {
                return n.id == id;
            })[0];
            this.load(url || node && node.link, id);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var params = this.props.params;
            var nParams = nextProps.params;

            (nParams.id != params.id || nParams.url != params.url) && this.jump(nextProps);
        }
    }, {
        key: 'load',
        value: function load(url, id) {
            var _this2 = this;

            var _props$routes = _slicedToArray(this.props.routes, 1),
                rootProps = _props$routes[0].props;

            var template = rootProps.template,
                htmlParse = rootProps.htmlParse,
                onComplete = rootProps.onComplete,
                loadScript = rootProps.loadScript,
                _rootProps$scripts = rootProps.scripts,
                scripts = _rootProps$scripts === undefined ? {} : _rootProps$scripts;


            var realUrl = url;
            if (url && typeof template == 'function') {
                realUrl = template({ id: id, url: url });
            }

            realUrl && _jquery2.default.get(realUrl).then(function (html) {
                if (typeof htmlParse == 'function') {
                    html = htmlParse(html, { id: id, url: url });
                }
                _this2.setState({ html: html }, function (e) {
                    var parent = _this2.props.parent;

                    var node = rootProps.menu.filter(function (n) {
                        return n.id == id;
                    })[0];
                    onComplete && onComplete({ id: id, url: url }, node);

                    //更新html后 需要加载相应组件

                    /**
                     * 在页面中添加一个隐藏域来标识当前页面 <input id="$pageName" value="index">
                     * 当id或url都不方便匹配时(url中存在动态参数) 可使用此方法
                     */
                    var _pageName = (0, _jquery2.default)('#__pageName__').val();

                    var pageName = scripts[_pageName] || scripts[url] || scripts[id];

                    if (!scripts[url] && scripts[id]) {
                        //只有id匹配 需检查url是否跟id所在节点的link是否匹配
                        if (url != node.link) {

                            return;
                        }
                    }
                    pageName && typeof loadScript == 'function' && loadScript(pageName, function (p) {
                        _this2.constructor.leaveEvent = p.onLeave;
                        p.init && p.init({ id: id, url: url });
                    });

                    setTimeout(function (e) {
                        return parent.forceUpdate();
                    }, 1);
                });
            }).fail(function (data) {});
        }
    }, {
        key: 'render',
        value: function render() {
            var _state$html = this.state.html,
                html = _state$html === undefined ? '' : _state$html;

            return _react2.default.createElement(
                'div',
                { className: 'grid-main' },
                _react2.default.createElement('div', { className: 'grid-inner', dangerouslySetInnerHTML: { __html: html } })
            );
        }
    }]);

    return Content;
}(_react2.default.Component);

Content.contextTypes = {
    router: _propTypes2.default.object
};

exports.default = Content;