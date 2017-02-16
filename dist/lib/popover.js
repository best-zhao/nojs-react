'use strict';

/**
 * 弹出层
 */
var nj = require('./nojs-react');
var React = nj.React;
var ReactDOM = nj.ReactDOM;
var mixins = nj.mixins;
var clickEvent = nj.clickEvent;

var align = require('./align');
var $ = require('jquery');

var Popover = React.createClass({
    displayName: 'Popover',

    statics: {
        create: function create(options) {
            var _container = nj.utils.createContainer();
            options = options || {};
            var pop = ReactDOM.render(React.createElement(Popover, options), _container);
            document.body.removeChild(_container);
            return pop;
        }
        // destory (component) {
        //     if( !component || !component.isMounted() ){
        //         return
        //     }
        //     var {nearby} = component.state

        //     document.body.removeChild(component.element)
        // }

    },
    mixins: [align, mixins.setDisplay],
    getDefaultProps: function getDefaultProps() {
        return { trigger: 'hover', effect: 'scale' };
    },
    getInitialState: function getInitialState() {
        var nearby = nj.utils.dom(this.props.nearby);
        return {
            origin: '0 0',
            nearby: nearby,
            target: nj.utils.dom(this.props.target),
            template: this.props.template
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState({
            template: nextProps.template
        });
    },
    getOrigin: function getOrigin(position) {
        var pos = position || this.props.position || {};
        var origin = [0, 0];
        var direction = 'top'; //尖角图标指向的方向
        var _pos = 0;
        for (var i in pos) {
            if (typeof pos[i] == 'string') {
                _pos = 100;
                direction = i;
            }
            if (parseInt(pos[i]) > _pos) {
                _pos = parseInt(pos[i]);
                direction = i;
            }
        }
        if (pos.left != undefined) {
            origin[0] = 0;
        } else if (pos.right != undefined) {
            origin[0] = '100%';
        }
        if (pos.top != undefined) {
            origin[1] = 0;
        } else if (pos.bottom != undefined) {
            origin[1] = '100%';
        }

        this.state.direction = direction;
        this.state.origin = origin.join(' ');
        this.setState({ origin: this.state.origin });
        return this.state.origin;
    },
    componentDidMount: function componentDidMount() {
        var _this = this;

        // var el = $(ReactDOM.findDOMNode(this))
        var self = this;
        var _state = this.state;
        var nearby = _state.nearby;
        var target = _state.target;
        var _props = this.props;
        var delegate = _props.delegate;
        var trigger = _props.trigger;

        var bindTarget = target || nearby;

        // if( !nearby ){
        //     return
        // }

        // var layerEl = $(this.wrap)

        function show(element) {
            if (!target) {
                self.state.nearby = element;
            }
            self.setDisplay(true);
        }
        var delay;
        var events = '';
        var eventSP = '.popover';
        var _event = '';
        var layerBind;

        function hide() {
            if (self.keepVisible || !self.state.visible) {
                self.keepVisible = null;
                return;
            }
            delay = window.setTimeout(function () {
                !self.keepVisible && self.setDisplay(false);
            }, 10);
        }
        if (trigger == 'hover') {
            var _show = function _show(e) {
                self.setDisplay(false);
                window.clearTimeout(delay);
                show(this);
            };

            if (bindTarget) {
                _event = 'mouseenter' + eventSP;
                events += _event;
                bindTarget.on(_event, _show);

                _event = 'mouseleave' + eventSP;
                events += ' ' + _event;
                bindTarget.on(_event, hide);

                // console.log(_event, events)
            } else if (delegate) {
                $(delegate[1] || document.body).delegate(delegate[0], 'mouseenter', _show).delegate(delegate[0], 'mouseleave', hide);
            }

            layerBind = function layerBind() {
                $(_this.wrap).hover(function (e) {
                    window.clearTimeout(delay);
                }, hide);
            };
        } else if (trigger == 'click') {
            var _show = function _show(e) {
                self.keepVisible = true;
                self.state.visible && trigger == 'click' ? self.setDisplay(false) : show(this);
                e.preventDefault();
            };

            if (bindTarget) {
                if (/text|textarea/.test(bindTarget[0].type)) {
                    trigger = 'focus';
                }
                bindTarget.on(clickEvent, _show);
            } else if (delegate) {
                $(delegate[1] || document.body).delegate(delegate[0], trigger, _show);
            }

            this.onDisplayChange(function (visible) {
                if (!visible && _this.keepVisible) {
                    _this.keepVisible = null;
                    return false;
                }
            });

            if (trigger == 'focus') {
                bindTarget && bindTarget.on('blur', function () {
                    //当浮层上有单击事件发生时 blur会先触发 导致layerEl上的click事件没有执行 所以这里延迟
                    delay = setTimeout(hide, 150);
                });
            }
            docWatch.push(this);

            layerBind = function layerBind() {
                $(_this.wrap).click(function (e) {
                    clearTimeout(delay);
                    _this.keepVisible = true;
                });
            };
        }

        this.state.trigger = trigger;

        var showClassName = this.props.showClassName || 'nj-popover-nearby';
        this.onShow(function () {
            self.getOrigin();
            window.clearTimeout(_this.hidedelay); //nearby有多个元素集合时 鼠标快速滑过 pop显示在下一目标上 上次的element还未移除

            layerBind();

            if (_this.align) {
                //当鼠标在多个相近得nearby间快速扫动时，align定位不会及时更新 所以加延时处理
                setTimeout(function (e) {
                    _this.align.set({
                        nearby: _this.state.nearby
                    });
                }, 0);
            } else {
                _this.setAlign(Object.assign({}, _this.props, {
                    nearby: _this.state.nearby,
                    element: $(_this.wrap),
                    onTurn: function onTurn(turnPosition) {
                        self.getOrigin(turnPosition);
                    }
                }));
            }

            $(_this.state.nearby).addClass(showClassName);
        }).onHide(function () {

            $(_this.state.nearby).removeClass(showClassName);
            // Popover.destory(this)

            _this.hidedelay = window.setTimeout(function (e) {

                document.body.removeChild(_this.element);

                var layer = _this.refs.layer;

                layer.layer = null;
                _this.align = null;
            }, 200);
        });
    },
    renderLayer: function renderLayer() {
        var _props2 = this.props;
        var sharp = _props2.sharp;
        var name = _props2.name;
        var _state2 = this.state;
        var className = _state2.className;
        var template = _state2.template;
        var origin = _state2.origin;
        var direction = _state2.direction;

        className = nj.utils.joinClass('nj-popover', sharp && 'nj-popover-sharp-' + direction, //窗体是否带尖角图标
        className, name);
        var style = { transformOrigin: origin };
        template = typeof template == 'function' ? template.call(this) : template;
        var body = template;
        if (typeof template == 'string') {
            body = React.createElement('span', { dangerouslySetInnerHTML: { __html: template } });
        }
        var sharpClass = nj.utils.joinClass('nj-icon nj-icon-sharp', direction && 'nj-icon-sharp-' + direction);

        return React.createElement(
            'div',
            { className: className, style: style },
            React.createElement(
                'div',
                { className: 'nj-popover-inner', style: style },
                body
            ),
            sharp ? React.createElement('i', { className: sharpClass }) : null
        );
    },
    render: function render() {
        return React.createElement(Layer, { ref: 'layer', from: this });
    }
});

//点击document隐藏所有pop
var docWatch = function () {
    var initial;
    var pops = [];
    var hide = function hide(e) {
        return window.setTimeout(function (i) {
            pops.forEach(function (pop) {
                if (pop.state.trigger == 'focus' && e.target === pop.state.nearby) {
                    return;
                }
                pop.setDisplay(false);
            });
        }, 0);
    };
    return {
        push: function push(pop) {
            if (!initial) {
                initial = true;
                $(document).on(clickEvent, hide);
            }
            pops.push(pop);
        }
    };
}();

var Layer = React.createClass({
    displayName: 'Layer',
    renderLayer: function renderLayer() {
        if (!this.layer) {
            this.layer = nj.utils.createContainer('nj-popover-container nj-layer-wrap');
        }
        var from = this.props.from;

        var layerElement = from.renderLayer();
        ReactDOM.unstable_renderSubtreeIntoContainer(this, layerElement, this.layer);
        from.element = this.layer;
        from.wrap = $(this.layer).children()[0];
    },
    componentDidMount: function componentDidMount() {
        // this.renderLayer()
    },
    componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
        this.renderLayer();
    },

    render: function render() {
        return null;
    }
});

module.exports = Popover;