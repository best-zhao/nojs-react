webpackJsonp([1],{54:function(t,e,n){"use strict";var i=n(18),o=i.React,s=i.ReactDOM,a=i.utils,r=o.createClass({displayName:"Mask",mixins:[i.mixins.setDisplay],getDefaultProps:function(){return{effect:"fade"}},statics:function(){var t,e;return{show:function(n){e=e||i.utils.createContainer("nj-mask ng-layer-wrap"),this.mask=t=s.render(o.createElement(r,null),e),t.setState({name:n}),t.setDisplay(!0)},hide:function(){t&&(t.setDisplay(!1),t.setState({name:""}))}}}(),componentDidMount:function(){a.stopScroll(s.findDOMNode(this),function(t){t.preventDefault()})},render:function(){var t=this.state,e=t.name,n=t.className;return o.createElement("div",{ref:"layer",className:a.joinClass(e,n)})}});t.exports=r},145:function(t,e,n){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},o="function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?function(t){return"undefined"==typeof t?"undefined":i(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":"undefined"==typeof t?"undefined":i(t)},s=n(8),a=n(18),r=a.utils.dom,l=function(t){this.options=t=t||{},this.element=r(t.element),this.nearby=r(t.nearby);var e=this.nearby&&this.nearby[0]===window;this.position=s.extend(e?{top:50,left:50}:{top:100,left:0},t.position),void 0!==this.position.right&&delete this.position.left,void 0!==this.position.bottom&&delete this.position.top,this.relative=void 0!=t.relative?t.relative:e?!0:!1,this.fixed=void 0===t.fixed&&e?"fixed":t.fixed,this.cssFixed="fixed"==this.fixed&&e,this.offset=t.offset||[0,0],this.isWrap=this.nearby&&(e||this.nearby.find(this.element).length),this.autoAdjust=t.autoAdjust,this.element&&this.bind()};l.prototype={bind:function(){var t=this,e=this.element.data("align");e?this.nearby.add(window).off(e):(e=".align"+(new Date).getTime(),this.element.data("align",e));var n=this.options.scrollby||!this.cssFixed&&this.fixed&&this.nearby;n&&s(n).on("scroll"+e,function(){t.set()}),s(window).on("resize"+e,function(){t.set()}),this.set()},get:function(t){t=t||this.nearby;var e=t.offset(),n={width:t.outerWidth(),height:t.outerHeight(),x:e?e.left:0,y:e?e.top:0,scrollLeft:this.cssFixed?0:t.scrollLeft(),scrollTop:this.cssFixed?0:t.scrollTop(),WIDTH:this.element.outerWidth(!0),HEIGHT:this.element.outerHeight(!0)};return n},set:function(t){if(this.element){t=t||{};var e=r(t.nearby)||this.nearby;if(e&&!this.element.is(":hidden")){var n=t.position||this.position;this.element.css("position",this.cssFixed?"fixed":"absolute");var i,s,a,l,c,u,f=this.get(e),d={x:{},y:{}},p={};this.isWrap&&(f.x=f.y=0),d.x.element="WIDTH",d.y.element="HEIGHT",d.x.nearby="width",d.y.nearby="height",d.x.offset=0,d.y.offset=1,d.x.scroll="scrollLeft",d.y.scroll="scrollTop";for(s in n)a=l=n[s],c="undefined"==typeof a?"undefined":o(a),"function"==c&&(a=a(f),c="undefined"==typeof a?"undefined":o(a)),u="top"==s||"bottom"==s?"y":"x",i=d[u],a="number"==c?(f[i.nearby]-(this.relative?f[i.element]:0))*a/100:parseInt(a,10),("bottom"==s||"right"==s)&&(a*=-1,a-=f[i.element]-f[i.nearby]),a+=f[u]+this.offset[i.offset]+f[i.scroll],p["x"==u?"left":"top"]=a;var h=this.checkBorder(f,n,p);return h?(this.options.onTurn&&this.options.onTurn.call(this,h),void this.set({position:h,nearby:e})):"animate"==this.fixed?void this.element.stop().animate(p,200):void this.element.css(p)}}},checkBorder:function(t,e,n){if(this.turnPosition)return void(this.turnPosition=null);var i,o={},a=s(window);for(var r in e)o[r]=e[r];if(n.left<0||n.left>t.WIDTH&&t.WIDTH+n.left-a.scrollLeft()>a.width()){var l=e.left,c=e.right;void 0!=l?(delete o.left,o.right=l):void 0!=c&&(delete o.right,o.left=c),i=!0}if(n.top<0||n.top>t.HEIGHT&&t.HEIGHT+n.top-a.scrollTop()>a.height()){var u=e.top,f=e.bottom;void 0!=u?(delete o.top,o.bottom=u):void 0!=f&&(delete o.bottom,o.top=f),i=!0}return i?this.turnPosition=o:void 0}};var c=a.mixins;t.exports=c.align={getDefaultProps:function(){return{}},setAlign:function(t){var e=this.isMounted?this.align:null;this.align=e||new l(t),this.align.set(t)}}},146:function(t,e,n){"use strict";var i=n(18),o=n(8),s=n(145),a=n(54),r=i.React,l=i.ReactDOM,c=i.mixins,u=[],f=[],d=function(t){t&&(f.indexOf(t)<0&&f.push(t),f.forEach(function(e){e.setState({isFocus:e===t})}))},p=function y(){y.init||(y.init=1,o(document).on("keydown",function(t){if(27==t.keyCode){var e=f.slice(-1)[0];e&&e.props.bindEsc&&e.setDisplay(!1)}}))},h={create:function(t){t=t||{};var e=l.render(r.createElement(m,t),i.utils.createContainer("nj-popup-container ng-layer-wrap"));return p(),u.push(e),e},destory:function(t){u.forEach(function(e,n){e===t&&(u.splice(n,1),document.body.removeChild(l.findDOMNode(e).parentNode))})},alert:function(t){t=Object.assign({title:"提示：",name:"popup-alert popup-tip",bindEsc:!1,buttons:[{text:"确定",className:"nj-button nj-button-red",handle:function(t){return!0}}]},t);var e=m.create(t);return e.onHide(function(){m.destory(this)}),window.setTimeout(function(){e.setDisplay(!0)},1),e},confirm:function(t){t=Object.assign({title:"提示：",showClose:!1,name:"popup-confirm popup-tip",buttons:[{text:"确定",className:"nj-button nj-button-red",handle:function(t){return!0}},{text:"取消",className:"nj-button"}]},t),t.template=r.createElement("div",null,r.createElement("span",{className:"nj-icon nj-icon-warn"}),r.createElement("div",{className:"_content"},t.template));var e=m.create(t);return e.onHide(function(){m.destory(this)}),e.setDisplay(!0),e},tip:function(){return{show:function(t,e,n){n=n||{},m.tip.hide();var i="undefined"!=typeof n.timer?n.timer:1500;"loading"==t?e=e||"loading……":i&&setTimeout(function(){o.setDisplay(!1)},i);var o=m.tip.handle=m.alert({title:"",template:r.createElement("div",{className:"tip-area tip-"+t},r.createElement("i",{className:"nj-icon nj-icon-"+t}),r.createElement("span",{className:"tip-text",dangerouslySetInnerHTML:{__html:e}})),showMask:!1,buttons:null}),s=n.reload;s&&o.onShow(function(){window.setTimeout(function(){"string"==typeof s?window.location.href=s:window.location.reload()},1500)})},hide:function(){var t=m.tip.handle;t&&t.setDisplay(!1)}}}()},m=r.createClass({displayName:"Popup",mixins:[s,c.setDisplay,r.addons.LinkedStateMixin],statics:h,getDefaultProps:function(){return{effect:"drop",showMask:!0,bindEsc:!0}},getInitialState:function(){return{buttons:this.props.buttons||[],title:this.props.title||"",template:this.props.template}},componentWillMount:function(){this.thenEvent=i.utils.addEventQueue.call(this,"then")},componentDidMount:function(){this.setAlign({nearby:window,position:this.props.position,element:l.findDOMNode(this)}),this.onShow(function(){this.props.showMask&&a.show(),d(this),this.align.set({position:this.props.position})}).onHide(function(){var t=this;f.pop();var e;f.forEach(function(n){n.props.showMask&&n!==t&&(e=n)}),this.props.showMask&&!e&&a.hide(),this.setState({isFocus:null}),d(f.slice(-1)[0]),this.thenEvent.complete(this.res)})},componentWillUnmount:function(){console.log(this)},buttonHandle:function(t,e){this.res=t&&t.call(this,e);e.isDefaultPrevented()||this.setDisplay(!1,e)},cancel:function(){this.res=!1,this.setDisplay(!1)},render:function(){var t=this.state.template;t="function"==typeof t?t.call(this):t;var e=r.createElement("div",{className:"_body",ref:"body"},t);"string"==typeof t&&(e=r.createElement("div",{className:"_body",ref:"body",dangerouslySetInnerHTML:{__html:t}}));var n=i.utils.joinClass("nj-popup",this.state.className,this.state.isFocus&&"popup-active",this.props.name),o=this.state.buttons;return r.createElement("div",{className:n},r.createElement("div",{className:"_close",onClick:this.cancel}),r.createElement("div",{className:"_head"},this.state.title),e,r.createElement("div",{className:o.length?"_foot":"d_hide"},o.map(function(t,e){var n=t.className;return n||(n="nj-button ",n+=0==e?"nj-button-red":"nj-button-default"),r.createElement("button",{key:e,type:"button",className:n,onClick:this.buttonHandle.bind(this,t.handle)},t.text)}.bind(this))))}});t.exports=m},154:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.init=void 0;var o=n(146),s=i(o),a=n(8),r=i(a);e.init=function(){var t=s["default"].create({title:"Popup Title",template:"<div>12</div>",buttons:[{text:"确定"},{text:"取消"}]});(0,r["default"])("#showPopup").click(function(){return t.setDisplay(!0)}),(0,r["default"])("#alertPopup").click(function(){return s["default"].alert({template:"操作成功！"})}),(0,r["default"])("#confirmPopup").click(function(){return s["default"].confirm({template:"确认操作?"}).then(function(t){s["default"].tip.show("ok",t?"选择了是":"选择了否")})})}}});