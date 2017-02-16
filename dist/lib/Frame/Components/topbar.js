'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * topbar
                                                                                                                                                                                                                                                                   */


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ = require('../../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var joinClass = _.utils.joinClass;


var Topbar = _.React.createClass({
    displayName: 'Topbar',
    render: function render() {
        var items = this.props.items;

        items.forEach(function (item) {
            item.index = item.index || 0;
        });
        items.sort(function (a, b) {
            return a.index > b.index;
        });
        var topbarLeft = items.filter(function (item) {
            return item.align == 'left';
        });
        var topbarRight = items.filter(function (item) {
            return item.align == 'right' || !item.align;
        });

        var getItem = function getItem(_ref, i) {
            var content = _ref.content;
            var type = _ref.type;
            var handle = _ref.handle;

            var options = { key: i, className: joinClass('item', type && 'item-' + type), onClick: handle };
            return typeof content == 'string' ? _.React.createElement('div', _extends({}, options, { dangerouslySetInnerHTML: { __html: content } })) : typeof content == 'function' ? content(options) || null : _.React.createElement(
                'div',
                options,
                content
            );
        };
        return _.React.createElement(
            'div',
            { className: 'grid-topbar' },
            _.React.createElement(
                'div',
                { className: '_inner clearfix' },
                _.React.createElement(
                    'div',
                    { className: 'fl l' },
                    topbarLeft.map(getItem)
                ),
                _.React.createElement(
                    'div',
                    { className: 'fr r' },
                    topbarRight.map(getItem)
                )
            )
        );
    }
});

exports.default = Topbar;