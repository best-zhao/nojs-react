'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _ = require('../../');

var _2 = _interopRequireDefault(_);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Topbar = require('./Topbar');

var _Topbar2 = _interopRequireDefault(_Topbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var localStorage = _.utils.localStorage;
var joinClass = _.utils.joinClass;

var menuVisible = 'menu_visible';

var Container = _.React.createClass({
    displayName: 'Container',

    contextTypes: {
        router: _.React.PropTypes.object
    },
    getInitialState: function getInitialState() {
        var _this = this;

        return {
            menuVisible: this.setVisible(),
            topbarItems: [{ content: _.React.createElement('i', { className: 'nj-icon nj-icon-menu' }), type: 'button', handle: this.toggleMenu, align: 'left' }, { content: _.React.createElement('i', { className: 'nj-icon nj-icon-back' }), type: 'button', handle: function handle(e) {
                    return _this.context.router.goBack();
                }, align: 'left' }]
        };
    },
    componentDidMount: function componentDidMount() {
        var self = this;

        var _props$routes = _slicedToArray(this.props.routes, 1);

        var rootProps = _props$routes[0].props;
        var menu = rootProps.menu;


        (0, _jquery2.default)(document).delegate('div.grid-main a, div.grid-topbar a', 'click', function (e) {
            var _this2 = this;

            var target = this.target;
            if (!target && !e.isDefaultPrevented()) {
                var _ret = function () {
                    //如果之前添加了preventDefault 这里不再跳转
                    e.preventDefault();
                    var href = _this2.getAttribute('href');
                    if (!href) {
                        return {
                            v: void 0
                        };
                    }
                    var _self$props$params = self.props.params;
                    var id = _self$props$params.id;
                    var url = _self$props$params.url;

                    //如果url与另一个节点的link匹配 则直接跳都那个node

                    var node_url = menu.filter(function (n) {
                        return n.link == href && n.id != id;
                    })[0];
                    if (node_url) {
                        self.context.router.push('/' + node_url.id);
                    } else {
                        self.context.router.push('/' + id + '/' + encodeURIComponent(href));
                    }
                }();

                if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
            }
        });
    },
    toggleMenu: function toggleMenu(e) {
        this.setState({ menuVisible: this.setVisible(true) });
        e.preventDefault();
    },
    setVisible: function setVisible(turn) {
        var visible = localStorage.get(menuVisible) || true;
        visible = visible ? JSON.parse(visible) : visible;
        visible = turn ? !visible : visible;
        localStorage.set(menuVisible, visible);
        return visible;
    },
    render: function render() {
        var _props$routes2 = _slicedToArray(this.props.routes, 1);

        var rootProps = _props$routes2[0].props; //this.props.routes[0].props

        var menu = rootProps.menu;
        var sidebar = rootProps.sidebar;
        var _rootProps$showTopbar = rootProps.showTopbar;
        var showTopbar = _rootProps$showTopbar === undefined ? true : _rootProps$showTopbar;
        var _rootProps$topbarItem = rootProps.topbarItems;
        var topbarItems = _rootProps$topbarItem === undefined ? [] : _rootProps$topbarItem;
        var style = rootProps.style;
        var menuVisible = this.state.menuVisible;
        var _props = this.props;
        var children = _props.children;
        var params = _props.params;

        var _children = children && _.React.cloneElement(children, { parent: this });

        var className = joinClass('app-container', !menuVisible && 'hide-menu', showTopbar && 'show-topbar', style && 'app-style' + style);
        return _.React.createElement(
            'div',
            { className: className },
            _.React.createElement(_Menu2.default, { defaultNode: params.id, menu: menu, sidebar: sidebar }),
            showTopbar ? _.React.createElement(_Topbar2.default, { items: this.state.topbarItems.concat(topbarItems) }) : null,
            _children
        );
    }
});

exports.default = Container;