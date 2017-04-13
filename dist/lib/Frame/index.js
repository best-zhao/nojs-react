'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _Container = require('./Components/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Content = require('./Components/Content');

var _Content2 = _interopRequireDefault(_Content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('../../../css/frame.css');

var Root = _react2.default.createClass({
    displayName: 'Root',

    //对外提供go方法
    go: function go(url) {
        var routers = this.refs.routers;
        var params = routers.state.params;
        var router = routers.router;

        router.push('/' + params.id + '/' + encodeURIComponent(url));
    },
    render: function render() {
        var props = this.props;

        return _react2.default.createElement(
            _reactRouter.Router,
            { history: _reactRouter.hashHistory, ref: 'routers' },
            _react2.default.createElement(
                _reactRouter.Route,
                { path: '/', component: _Container2.default, props: props },
                props.defaultNode ? _react2.default.createElement(_reactRouter.IndexRedirect, { to: '/' + props.defaultNode }) : null,
                _react2.default.createElement(_reactRouter.Route, { path: '/:id(/:url)', component: _Content2.default, onLeave: _Content2.default.onLeave })
            )
        );
    }
});
module.exports = Root;