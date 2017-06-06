'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _tree = require('nj/tree');

var _tree2 = _interopRequireDefault(_tree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_React$Component) {
    _inherits(Menu, _React$Component);

    function Menu() {
        _classCallCheck(this, Menu);

        return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
    }

    _createClass(Menu, [{
        key: 'changeHandle',
        value: function changeHandle(node, e) {
            if (!node.link) {
                e.preventDefault();
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var tree = this.refs.tree;
            var onReady = this.props.onReady;
            //组件渲染完毕后 向外传递格式化后的节点数据

            onReady && onReady(tree.state.dataFormat.databyid);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            //通过props.defaultNode来更新当前选中节点
            var tree = this.refs.tree;
            var defaultNode = nextProps.defaultNode;

            defaultNode = tree.state.dataFormat.databyid[defaultNode];
            defaultNode && tree.select(defaultNode);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                defaultNode = _props.defaultNode,
                menu = _props.menu,
                sidebar = _props.sidebar;

            var tree = _react2.default.createElement(
                'div',
                { className: 'nj-tree' },
                _react2.default.createElement(_tree2.default, { ref: 'tree',
                    data: menu,
                    onChange: this.changeHandle.bind(this),
                    defaultNode: defaultNode
                    //使用Link组件更新路由 css控制Link覆盖文字之上
                    , defineName: function defineName(item) {
                        return _react2.default.createElement(
                            'span',
                            null,
                            item.link ? _react2.default.createElement(_reactRouter.Link, { to: '/' + item.id }) : null,
                            ' ',
                            item.name
                        );
                    }
                })
            );
            if (typeof sidebar == 'function') {
                tree = sidebar(tree);
            }
            return _react2.default.createElement(
                'div',
                { className: 'grid-menu' },
                _react2.default.createElement(
                    'div',
                    { className: 'grid-inner' },
                    tree
                )
            );
        }
    }]);

    return Menu;
}(_react2.default.Component);

exports.default = Menu;