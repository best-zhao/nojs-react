webpackJsonp([9,2],{133:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e){return t=t<0?0:t,t=t>e?t%e:t}var a=n(7),o=i(a),r=n(24),l=i(r),c=n(54),p=i(c),h=n(55),d=i(h);n(83),o.default.extend(o.default.easing,{easeOutExpo:function(t,e,n,i,s){return e==s?n+i:i*(1-Math.pow(2,-10*e/s))+n}});var u=r.React.createClass({displayName:"Scroll",mixins:[r.mixins.childComponents.config],getDefaultProps:function(){return{direction:"y",children:[]}},getInitialState:function(){var t=this.props,e=t.step,n=void 0===e?1:e,i=t.time,s=t.repeat,a=void 0===s||s,o=t.auto,r=void 0===o||o;return n=parseInt(n),{step:n,time:i||(n?6e3:30),repeat:a,auto:r,index:0,size:{},scrollLength:0}},componentDidMount:function(){var t=this;this.scrollEvent=l.default.utils.addEventQueue.call(this,"onScroll"),this.scrollEndEvent=l.default.utils.addEventQueue.call(this,"onScrollEnd");var e=this.state.page;e&&(this.onScrollEnd(function(e){return t.start()}),e.forceUpdate()),v.getChildComponents(this),this.props.computed&&(0,o.default)(window).on("resize",function(){t.reset()}),setTimeout(function(){t.reset();var e=t.state,n=e.length,i=e.view,s=e.step,a=e.size,r=e.itemsComponent;if(!(n<=i)){var l=n%i;l&&t.append(0,s?i-l:i);var c=t.props.direction;"y"==c&&(a.total=(0,o.default)(r.refs.items).height()),t.start();var p=(0,o.default)(r.refs.wrap);if(p.hover(function(){t.stop()},function(){t.start()}),screen.width<=640){var h="y"==c?"swipeDown":"swipeRight",d="y"==c?"swipeUp":"swipeLeft";p[h](function(){return t.scroll(!1),!1}),p[d](function(){return t.scroll(),!1})}}},1),m.complete(this)},append:function(t,e){var n=this.state,i=n.repeat,s=n.length,a=n.size,o=n.itemsComponent;if(i){var r,l,c=o.props,p=c.children,h=c._children,d=s-t,u=h,m=[];e>d&&(r=p.slice(t),u&&p.forEach(function(e,n){n>=t&&m.push(n)}),t=0,e-=r.length),l=p.slice(t,t+e),u&&p.forEach(function(n,i){i>=t&&i<t+e&&m.push(i)}),r?Array.prototype.push.apply(r,l):r=l;var f=this.state.totalLength;Array.prototype.push.apply(p,r),this.state.totalLength=p.length,"x"==this.props.direction&&(a.total=this.state.totalLength*a.item),this.setState({size:a}),o.setState({children:p},function(t){u&&m.forEach(function(t){o.refs["item"+f].appendChild(u[t].cloneNode(!0)),f++})})}},start:function(){var t=this,e=this.state,n=e.auto,i=e.length,s=e.view,a=e.time;n&&i>s&&(clearInterval(this.delay),this.delay=setInterval(function(){t.scroll()},a))},stop:function(){this.delay=clearInterval(this.delay)},reset:function(){var t=this.props,e=(t.computed,t.direction),n=t.step,i=this.state.itemsComponent,s="x"==e,a=(0,o.default)(i.refs.wrap),r=(0,o.default)(i.refs.items),l=(0,o.default)(i.refs.item0),c=this.state.size={box:s?a.width():a.height(),total:s?null:r.height(),item:s?l.outerWidth(!0):l.outerHeight(!0)};s&&(c.total=this.state.totalLength*c.item),this.state.view=Math.ceil(c.box/c.item),"view"==n&&(this.state.step=this.state.view),this.setState({size:c}),i.forceUpdate()},scroll:function(t){var e=this;if(!(0,o.default)(r.ReactDOM.findDOMNode(this)).is(":hidden")){var n,i=this.state,a=i.size,c=i.step,p=i.scrollLength,h=i.totalLength,d=i.length,u=i.view,m=i.itemsComponent;"number"==typeof t?n=s(t,d):t=!1!==t,void 0!==t&&this.start();var f=(0,o.default)(m.refs.wrap),g=this.props.direction;f.stop();if(!l.default.utils.elementInDOM(r.ReactDOM.findDOMNode(this)))return this.stop(),void f.stop();var v,x,w=0,y=(a.total,a.box,"x"==g?"scrollLeft":"scrollTop"),C={},E=f[y](),T=t?1:-1;if(0==c?v=1:(v=c*a.item,w=800),c){if(v*=T,!t&&p<c&&void 0===n){var M=h-(p+d);M<u&&(this.append(h%d,u-M),h=this.state.totalLength),f[y](f[y]()+a.item*d),p+=d}p+=T*c}else p=Math.floor(E/a.item);this.state.index=p%d,void 0===n?(C[y]="+="+v,this.state[y]=x=E+T*v):(p=n,this.state.index=n,C[y]=this.state[y]=x=E=a.item*n),this.state.scrollLength=p,this.state.endIndex=s(this.state.index+u-1,d),f.animate(C,w,"easeOutExpo",function(){if(x>=d*a.item){var t=c?a.item*e.state.index:0;f[y](t),p=e.state.scrollLength=e.state.index=c?e.state.index:t}var n=h-p-u;n<u&&e.append(s(e.state.endIndex+n+1,d),u-n),e.scrollEndEvent.complete()}),this.state.childComponents.forEach(function(t){t.forceUpdate()}),this.scrollEvent.complete(this.state.index)}},render:function(){var t=this.props,e=t.className,n=t.children;return e=l.default.utils.joinClass("nj-scroll",e),r.React.createElement("div",{className:e},n)}});u.PropTypes={step:d.default.number,time:d.default.number,pageTemplate:d.default.func};var m=l.default.utils.addEventQueue.call(u,"onCreated"),f=r.React.createClass({displayName:"ScrollItems",mixins:[r.mixins.childComponents.setParents([u])],getInitialState:function(){return{}},componentDidMount:function(){v.getChildComponents(this);var t=this.state.parentComponent;t.state.totalLength=t.state.length=this.props.children.length,t.state.itemsComponent=this;var e=t.props,n=e.direction,i=e.computed,s=e.view,a=void 0===s?1:s,r="x"==n,l={display:r?"inline-block":"block"};if(i){var c,p=(0,o.default)(this.refs.wrap);r?(c=p.width()/a,l.width=c,l.height=c/i):(c=p.height()/a,l.width=c*i,l.height=c)}this.setState({itemStyle:l})},render:function(){var t=this.state,e=t.parentComponent,n=t.itemStyle,i=e.props.direction,s="x"==i,a=this.props,o=a.children,c=a.className;c=l.default.utils.joinClass("nj-scroll-item clearfix",c);var p=e.state.size;return r.React.createElement("div",{ref:"wrap",className:"nj-scroll-wrap"},r.React.createElement("div",{ref:"items",className:"nj-scroll-items clearfix",style:s?{width:p.total}:{}},o.map(function(t,e){return r.React.createElement("span",{className:c,ref:"item"+e,key:e,style:n},t)})))}}),g=r.React.createClass({displayName:"ScrollPage",mixins:[r.mixins.childComponents.setParents([u])],getDefaultProps:function(){return{pages:0}},handleClick:function(t){var e=this.state.parentComponent;e.stop(),e.scroll(t)},componentDidMount:function(){v.getChildComponents(this),this.state.parentComponent.state.page=this},render:function(){for(var t=this,e=this.state.parentComponent,n=e.state,i=n.length,s=n.index,a=[],o=0;o<i;o++)a.push(o+1);var c=this.props,p=c.trigger,h=c.className,d=this.props.template||e.props.pageTemplate;return r.React.createElement("div",{className:"nj-scroll-page "+h},r.React.createElement("div",{className:"-page-inner"},a.map(function(e,n){var i="function"==typeof d&&d.call(t,n),a=i||e,o={ref:"item"+n,className:l.default.utils.joinClass("-page-item",e-1==s&&"-page-active"),key:e};return"string"==typeof i&&(o.dangerouslySetInnerHTML={__html:i},a=null),o["hover"==p?"onMouseEnter":"onClick"]=t.handleClick.bind(t,e-1),r.React.createElement("span",o,a)})))}});g.PropTypes={pages:d.default.number};var v=new p.default({elementGroups:{scroll:{children:["scroll-items","scroll-page"],component:u},"scroll-items":{component:f,wrapItem:function(t,e,n){return t.refs["item"+n]}},"scroll-page":{component:g}},exports:e});v.start()},134:function(t,e,n){"use strict";var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},s=n(24),a=s.React,o=(s.ReactDOM,s.mixins),r=(n(7),n(54).default),l=a.createClass({displayName:"Switch",mixins:[o.childComponents.config],getInitialState:function(){return{index:0,trigger:this.props.trigger||"click"}},componentDidMount:function(){var t=this;h.getChildComponents(this);var e=this.props.interval;e&&window.setInterval(function(){t.change(++t.state.index)},e),this.changeEvent=s.utils.addEventQueue.call(this,"onChange"),this.readyEvent=s.utils.addEventQueue.call(this,"onReady"),setTimeout(function(e){return t.readyEvent.complete()},1)},change:function(t,e){var n=this.state.length;t=t<0?n-1:t,t=t>=n?0:t,this.state.index=t,this.setState({index:t}),this.state.childComponents.forEach(function(t){t.forceUpdate()}),this.changeEvent.complete(t,e)},render:function(){var t=s.utils.joinClass("nj-switch",this.props.className);return a.createElement("div",i({},this.props,{className:t}),this.props.children)}}),c=a.createClass({displayName:"SwitchMenu",mixins:[o.childComponents.setParents([l])],componentDidMount:function(){h.getChildComponents(this)},render:function(){var t=this.state.parentComponent,e=t.state.index,n=s.utils.joinClass("nj-switch-menu",e==this.state.index&&"nj-switch-menu-active"),i={className:n};return i["hover"==t.state.trigger?"onMouseEnter":"onClick"]=t.change.bind(t,this.state.index),i=Object.assign({},this.props,i),a.createElement("div",i,this.props.children)}}),p=a.createClass({displayName:"SwitchItem",mixins:[o.childComponents.setParents([l])],componentDidMount:function(){h.getChildComponents(this),this.state.parentComponent.state.length=this.state.index+1},render:function(){var t=this.state.parentComponent.state.index,e=s.utils.joinClass("nj-switch-item",t==this.state.index?"nj-switch-item-active":"d_hide");return a.createElement("div",i({},this.props,{className:e}),this.props.children)}}),h=new r({elementGroups:{switch:{children:["switch-menu","switch-item"],component:l},"switch-menu":{component:c},"switch-item":{component:p}},exports:e});h.start()},295:function(t,e,n){t.exports=n(38)},38:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var s=n(7),a=(i(s),n(19)),o=(i(a),n(53),n(134),n(133),n(84));i(o);n(83);var r={rootID:1,type:"list-ios",maxlevel:3,onFetch:function(t,e){return t.then(function(t){return t.data})},data:[{id:2,name:"Mask",parentid:1},{id:21,name:"Mask1",parentid:2},{id:3,name:"Popup",parentid:1},{id:5,name:"Trees",parentid:1},{id:51,name:"Tree",parentid:5,link:"tree/tree"},{id:52,name:"SelectTree",parentid:5,link:"tree/selectTree"},{id:53,name:"LinkTree",parentid:5,link:"tree/linkTree"},{id:54,name:"JsonTree",parentid:5},{id:6,name:"Form Verify",parentid:1,link:"form/form",demo:"form"},{id:7,name:"Switch",parentid:1,link:"switch"},{id:8,name:"Scroll",parentid:1,link:"scroll"},{id:9,name:"Face",parentid:1,link:"face"},{id:10,name:"Auto-complete",parentid:1,link:"autocomplete"},{id:11,name:"Datepicker",parentid:1,link:"datepicker"},{id:12,name:"Editor",parentid:1,link:"editor"}]};(0,a.render)(a.React.createElement(o.LinkTree,r),document.getElementById("treeLink"))},83:function(t,e,n){"use strict";function i(t){return"tagName"in t?t:t.parentNode}function s(t,e,n,i){return Math.abs(t-e)>=Math.abs(n-i)?t-e>0?"Left":"Right":n-i>0?"Up":"Down"}function a(){h=null,u.last&&(u.el.trigger("longTap"),u={})}function o(){h&&clearTimeout(h),h=null}function r(){l&&clearTimeout(l),c&&clearTimeout(c),p&&clearTimeout(p),h&&clearTimeout(h),l=c=p=h=null,u={}}var l,c,p,h,d=n(7),u={};!function(){var t,e;d(document).on("touchstart",function(n){n=n.originalEvent?n.originalEvent:n,t=Date.now(),e=t-(u.last||t),u.el=d(i(n.touches[0].target)),l&&clearTimeout(l),u.x1=n.touches[0].pageX,u.y1=n.touches[0].pageY,e>0&&e<=250&&(u.isDoubleTap=!0),u.last=t,h=setTimeout(a,750)}).on("touchmove",function(t){if(t=t.originalEvent?t.originalEvent:t,o(),u.x2=t.touches[0].pageX,u.y2=t.touches[0].pageY,Math.abs(u.x1-u.x2),u.x2&&Math.abs(u.x1-u.x2)>30||u.y2&&Math.abs(u.y1-u.y2)>30){var e=s(u.x1,u.x2,u.y1,u.y2);u.el.trigger("Left"==e||"Right"==e?"slideX":"slideY",u)}}).on("touchend",function(t){t=t.originalEvent?t.originalEvent:t,o(),u.x2&&Math.abs(u.x1-u.x2)>30||u.y2&&Math.abs(u.y1-u.y2)>30?p=setTimeout(function(){u.direction=s(u.x1,u.x2,u.y1,u.y2),u.el.trigger("swipe",u),u.el.trigger("swipe"+u.direction,u),u={}},0):"last"in u&&(c=setTimeout(function(){var t=d.Event("tap");t.cancelTouch=r,u.el.trigger(t),u.isDoubleTap?(u.el.trigger("doubleTap"),u={}):l=setTimeout(function(){l=null,u.el.trigger("singleTap"),u={}},250)},0))}).on("touchcancel",r),d(window).on("scroll",r)}(),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap","slideX","slideY"].forEach(function(t){d.fn[t]=function(e){return this.on(t,e)}})}},[295]);