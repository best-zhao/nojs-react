'use strict';

var nj = require('./nojs-react');
var React = nj.React;
var ReactDOM = nj.ReactDOM;
var utils = nj.utils;
/**
 * 遮罩层组件
 * 提供show/hide 2个事件 
 */

var Mask = React.createClass({
  displayName: 'Mask',

  mixins: [nj.mixins.setDisplay],
  getDefaultProps: function getDefaultProps() {
    return { effect: 'fade' };
  },

  statics: function () {
    var mask, wrap;
    return {
      show: function show(name) {
        wrap = wrap || nj.utils.createContainer('nj-mask ng-layer-wrap');
        this.mask = mask = ReactDOM.render(React.createElement(Mask, null), wrap);
        mask.setState({ name: name });
        mask.setDisplay(true);
      },
      hide: function hide() {
        if (mask) {
          mask.setDisplay(false);
          mask.setState({ 'name': '' });
        }
      }
    };
  }(),
  render: function render() {
    var _state = this.state;
    var name = _state.name;
    var className = _state.className;

    return React.createElement('div', { ref: 'layer', className: utils.joinClass(name, className) });
  }
});

module.exports = Mask;