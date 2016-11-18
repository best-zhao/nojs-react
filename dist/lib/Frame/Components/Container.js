'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = _react2.default.createClass({
    displayName: 'Container',
    getInitialState: function getInitialState() {
        return {};
    },
    readyHandle: function readyHandle(menuData) {
        //获取menu tree的数据 用来传递到_children组件中
        this.setState({ menuData: menuData });
    },
    render: function render() {
        var _props$routes = _slicedToArray(this.props.routes, 1);

        var rootProps = _props$routes[0].props;
        var menu = rootProps.menu;
        var menuData = this.state.menuData;
        var _props = this.props;
        var children = _props.children;
        var params = _props.params;

        var _children = children && _react2.default.cloneElement(children, { menuData: menuData });
        return _react2.default.createElement(
            'div',
            { className: 'app-container' },
            _react2.default.createElement(_Menu2.default, { defaultNode: params.id, menu: menu, onReady: this.readyHandle }),
            _children
        );
    }
});

exports.default = Container;