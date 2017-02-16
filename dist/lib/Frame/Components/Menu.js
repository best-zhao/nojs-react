'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _tree = require('nj/tree');

var _tree2 = _interopRequireDefault(_tree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = _react2.default.createClass({
    displayName: 'Menu',
    changeHandle: function changeHandle(node, e) {
        if (!node.link) {
            e.preventDefault();
        }
    },
    componentDidMount: function componentDidMount() {
        var tree = this.refs.tree;
        var onReady = this.props.onReady;
        //组件渲染完毕后 向外传递格式化后的节点数据

        onReady && onReady(tree.state.dataFormat.databyid);
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        //通过props.defaultNode来更新当前选中节点
        var tree = this.refs.tree;
        var defaultNode = nextProps.defaultNode;

        defaultNode = tree.state.dataFormat.databyid[defaultNode];
        defaultNode && tree.select(defaultNode);
    },
    render: function render() {
        var _props = this.props;
        var defaultNode = _props.defaultNode;
        var menu = _props.menu;
        var sidebar = _props.sidebar;

        var tree = _react2.default.createElement(
            'div',
            { className: 'nj-tree' },
            _react2.default.createElement(_tree2.default, { ref: 'tree',
                data: menu,
                onChange: this.changeHandle,
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
});

exports.default = Menu;