'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * auto-complete
 */
var nj = require('./nojs-react');
var React = nj.React,
    ReactDOM = nj.ReactDOM,
    mixins = nj.mixins,
    utils = nj.utils,
    Mui = nj.Mui;

var $ = require('jquery');
var Popover = require('./popover');
// var fetch = require('isomorphic-fetch')

var Autocomplete = module.exports = React.createClass({
    displayName: 'exports',
    getDefaultProps: function getDefaultProps() {
        return { getItem: function getItem(item) {
                return String(item);
            }, disableEnter: false, max: 20 };
    },
    getInitialState: function getInitialState() {
        return {
            results: this.props.results || [],
            //缓存远程数据
            cache: {},
            value: this.props.value || ''
        };
    },
    keyup: function keyup(e) {
        var _this = this;

        var key = e.keyCode,
            value = e.target.value,
            delay;
        // 有效输入键
        // [8 : backspace] [32 : space] [46: delete]
        if (key == 8 || key == 32 || key == 46 || key == 229 // 中文键或全角 部分可输入字符
        || key > 47 && key < 58 // [48-57 : 0-9]
        || key > 64 && key < 91 // [65-90 : a-z]
        || key > 95 && key < 112 // [96-111 : 小键盘]
        || key > 185 && key < 193 // [186-192 : ;=<->/`]
        || key > 218 && key < 223 // [219-222 : [\]' ]
        ) {
                clearTimeout(delay);
                // T.showBox('hide');
                delay = setTimeout(function () {
                    _this.filter(value);
                    // T.onKeyup && T.onKeyup.call(T,T.state);
                }, 100);
            }
    },
    keydown: function keydown(e) {
        var key = e.keyCode;
        switch (key) {
            case 13:
                //enter
                this.move('enter');
                if (this.props.disableEnter) {
                    //阻止触发表单事件 
                    e.preventDefault();
                }
                break;
            case 38:
                //up
                this.move("up");
                break;
            case 40:
                //down
                this.move("down");
                break;
        }
    },

    //移动鼠标选中结果项
    move: function move(direction) {
        var _state = this.state,
            index = _state.index,
            results = _state.results;

        var length = results.length;
        index = typeof index == 'number' ? index : -1;

        if (direction == 'enter') {
            index >= 0 && this.select(index, 'enter');
            return;
        }

        if (direction == 'up') {
            index = index <= 0 ? length - 1 : --index;
        } else if (direction == 'down') {
            index = index >= length - 1 ? 0 : ++index;
        }
        var item = this.state.results[index],
            value;
        value = item ? this.props.getItem(item) : this.state.value;
        this.setState({ index: index, value: value });
    },
    select: function select(index, type, e) {
        var _this2 = this;

        var item = this.state.results[index];
        if (!item) {
            return;
        }
        var value = this.props.getItem(item);

        this.state.value = value;
        this.state.index = index;

        this.setState({ value: value, index: index });
        this.chooseEvent.complete(item, type === 'enter');
        type == 'click' && this.refs.input.focus();
        window.setTimeout(function (e) {
            return _this2.setDisplay(false);
        }, 240);
    },
    componentDidMount: function componentDidMount() {
        var results = this.state.results; //默认传入的results

        if (results) {
            this.forceUpdate(function () {
                //var {container} = this.refs                
            });
        }
        this.fetchEvent = utils.addEventQueue.call(this, 'onFetch');
        this.fetchCompleteEvent = utils.addEventQueue.call(this, 'onFetchComplete');
        this.chooseEvent = utils.addEventQueue.call(this, 'onChoose');
        this.completeEvent = utils.addEventQueue.call(this, 'onComplete');
    },
    componentDidUpdate: function componentDidUpdate() {
        var _this3 = this;

        var _refs = this.refs,
            input = _refs.input,
            container = _refs.container;


        if (container && !container._init_) {
            container._init_ = true;
            container.onShow(function (e) {
                $(container.wrap).width($(input).outerWidth());
            }).onDisplayChange(function (visible) {
                var results = _this3.state.results;

                if (visible && !results.length) {
                    //没有结果 阻止显示
                    return false;
                }
            });
        }
    },
    setDisplay: function setDisplay(display) {
        var container = this.refs.container;
        container && container.setDisplay(display);
    },
    filter: function filter(value) {
        var _this4 = this;

        var container = this.refs.container;

        var done = function done(results) {
            results = results.slice(0, max);
            _this4.setState({ results: results, index: null });
            _this4.setDisplay(results.length ? true : false);
            _this4.completeEvent.complete(results, _this4.refs.input.value);
        };

        if (!value) {
            var results = this.props.results || [];
            done(results);
            return;
        }
        var _props = this.props,
            data = _props.data,
            source = _props.source,
            getItem = _props.getItem,
            max = _props.max;


        if (data) {
            var results = data.filter(function (item) {
                return getItem(item).indexOf(value) >= 0;
            });
            done(results);
        } else if (source) {
            //remote fetch
            var cache = this.state.cache;

            var _data = cache[source + value];

            if (_data) {
                done(_data);
                return;
            }
            var promise = $.getJSON(source + value);
            // var promise = fetch(source+value, {
            //     credentials: 'include',
            //     method : 'GET',
            //     mode: "no-cors",
            //     headers : {'X-Requested-With':'XMLHttpRequest'}
            // }).then(res=>res.json())

            promise = this.fetchEvent.complete(promise, value) || promise;

            promise.then(function (json) {
                json = _this4.fetchCompleteEvent.complete(json) || json || [];
                cache[source + value] = json;
                done(json);
            });
        }
    },
    change: function change(e) {
        this.setState({ value: e.target.value });
        e.stopPropagation(); //onChange事件会影响到父组件 阻止冒泡
    },
    render: function render() {
        var _this5 = this;

        var _props2 = this.props,
            container = _props2.container,
            getItem = _props2.getItem,
            name = _props2.name;
        var _state2 = this.state,
            index = _state2.index,
            value = _state2.value,
            results = _state2.results;
        var input = this.refs.input;


        if (!container) {
            var list = React.createElement(
                'ul',
                null,
                results.map(function (item, i) {
                    item = getItem(item);
                    return React.createElement(
                        'li',
                        { key: item, onClick: _this5.select.bind(_this5, i, 'click'), className: i === index ? 'active nj-mui-active' : '' },
                        React.createElement(
                            Mui,
                            null,
                            item
                        )
                    );
                })
            );
        }
        return React.createElement(
            'span',
            null,
            React.createElement('input', _extends({}, this.props, {
                ref: 'input',
                value: value,
                onChange: this.change,
                onKeyDown: this.keydown,
                onKeyUp: this.keyup })),
            !container && input && React.createElement(Popover, {
                nearby: input,
                trigger: 'click',
                ref: 'container',
                name: 'auto-complete-pop auto-complete-' + name,
                template: list })
        );
    }
});