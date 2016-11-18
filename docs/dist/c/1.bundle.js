webpackJsonp([1],{

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.init = undefined;

	var _nj = __webpack_require__(1);

	var _form = __webpack_require__(261);

	var init = exports.init = function init(_ref) {
	    var id = _ref.id;
	    var url = _ref.url;

	    (0, _nj.render)(_nj.React.createElement(Nav, { url: url }), document.getElementById('demo-nav'));
	    _form.Form.start();
	};

	var Nav = _nj.React.createClass({
	    displayName: 'Nav',
	    getDefaultProps: function getDefaultProps() {
	        return { items: [{ text: 'nj-form', url: 'form/normal.html' }, { text: 'React Component', url: 'form/component.html' }, { text: 'InputGroup', url: 'form/input-group.html' }] };
	    },
	    render: function render() {
	        var _props = this.props;
	        var items = _props.items;
	        var url = _props.url;

	        return _nj.React.createElement(
	            'div',
	            null,
	            _nj.React.createElement(
	                'a',
	                { href: 'form/form', className: 'back' },
	                '<<返回'
	            ),
	            items.map(function (item) {
	                return _nj.React.createElement(
	                    'a',
	                    { href: item.url, className: item.url == url ? 'current' : '', key: item.url },
	                    item.text
	                );
	            })
	        );
	    }
	});

/***/ }

});