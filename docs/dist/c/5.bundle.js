webpackJsonp([5],{138:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.init=void 0;var s=n(300);(function(e){e&&e.__esModule})(s),t.init=function(){}},300:function(e,t,n){"use strict";var s=n(24),a=s.React,i=s.ReactDOM,r=s.utils,c=a.createClass({displayName:"Mask",mixins:[s.mixins.setDisplay],getDefaultProps:function(){return{effect:"fade"}},statics:function(){var e,t;return{show:function(n){t=t||s.utils.createContainer("nj-mask ng-layer-wrap"),this.mask=e=i.render(a.createElement(c,null),t),e.setState({name:n}),e.setDisplay(!0)},hide:function(){e&&(e.setDisplay(!1),e.setState({name:""}))}}}(),componentDidMount:function(){r.stopScroll(i.findDOMNode(this),function(e){e.preventDefault()})},render:function(){var e=this.state,t=e.name,n=e.className;return a.createElement("div",{ref:"layer",className:r.joinClass(t,n)})}});e.exports=c}});