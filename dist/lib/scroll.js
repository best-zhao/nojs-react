'use strict';

/*
 * 无间断滚动
 */
var nj = require('./nojs-react');
var React = nj.React;
var ReactDOM = nj.ReactDOM;
var mixins = nj.mixins;

var $ = require('jquery');
var Directive = require('../mixins/directiveComponent').default;
require('./touch');

/* 
 * [jQuery animate动画扩展]
 * http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.js
 * easeIn：加速度缓动；
 * easeOut：减速度缓动；
 * easeInOut：先加速度至50%，再减速度完成动画
 */
$.extend($.easing, {
    //指数曲线缓动
    easeOutExpo: function easeOutExpo(x, t, b, c, d) {
        return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    }
});

var Scroll = React.createClass({
    displayName: 'Scroll',

    mixins: [mixins.childComponents.config],
    getDefaultProps: function getDefaultProps() {
        return {
            //滚动方向，默认纵向
            direction: 'y',
            children: []
        };
    },
    getInitialState: function getInitialState() {
        var _props = this.props;
        var _props$step = _props.step;
        var step = _props$step === undefined ? 1 : _props$step;
        var time = _props.time;
        var _props$repeat = _props.repeat;
        var repeat = _props$repeat === undefined ? true : _props$repeat;
        var _props$auto = _props.auto;
        var auto = _props$auto === undefined ? true : _props$auto;

        step = parseInt(step);
        return {
            step: step, //滚动步长，0为连续滚动
            time: time || (step ? 6000 : 30), //滚动速度，连续推荐设置40ms ;间断滚动时，该值为滚动的间隔时间
            repeat: repeat, //是否重复循环无间断
            auto: auto,

            index: 0,
            size: {},
            // totalLength : length,//总个数 包含追加
            scrollLength: 0 //已滚动个数
        };
    },
    componentDidMount: function componentDidMount() {
        var _this = this;

        this.scrollEvent = nj.utils.addEventQueue.call(this, 'onScroll');
        this.scrollEndEvent = nj.utils.addEventQueue.call(this, 'onScrollEnd');

        //React创建的组件 父组件完成后 首次要更新下page
        var page = this.state.page;

        if (page) {
            this.onScrollEnd(function (e) {
                return _this.start();
            });
            page.forceUpdate();
        }

        directive.getChildComponents(this);

        this.props.computed && $(window).on('resize', function () {
            _this.reset();
        });
        setTimeout(function () {
            //computed情况下 scroll-items组件必须先计算完成后 这里才reset
            _this.reset();

            var _state = _this.state;
            var length = _state.length;
            var view = _state.view;
            var step = _state.step;
            var size = _state.size;
            var itemsComponent = _state.itemsComponent;
            // console.log(length,view)

            if (length <= view) {
                return;
            }
            var nextLast = length % view;

            //初始化的追加个数 保证next即可 
            //next所需:view-nextLast
            //step==0连续滚动时 拷贝view个即可
            nextLast && _this.append(0, step ? view - nextLast : view);

            var direction = _this.props.direction;
            if (direction == 'y') {
                size.total = $(itemsComponent.refs.items).height();
            }
            _this.start();

            var wrap = $(itemsComponent.refs.wrap);
            wrap.hover(function () {
                _this.stop();
            }, function () {
                _this.start();
            });

            //mobile touch
            if (screen.width <= 640) {
                var prevAction = direction == 'y' ? 'swipeDown' : 'swipeRight',
                    nextAction = direction == 'y' ? 'swipeUp' : 'swipeLeft';

                wrap[prevAction](function () {
                    _this.scroll(false);
                    return false;
                });
                wrap[nextAction](function () {
                    _this.scroll();
                    return false;
                });
            }
        }, 1);

        createdEvents.complete(this);
    },
    append: function append(start, appendLength) {
        /*
         * 使用向后追加元素的方式来实现不间断滚动
         * 初始化追加一次 ；每次滚动完毕后检测是否追加
         */
        var _state2 = this.state;
        var repeat = _state2.repeat;
        var length = _state2.length;
        var size = _state2.size;
        var itemsComponent = _state2.itemsComponent;

        if (!repeat) {
            return;
        }
        var _itemsComponent$props = itemsComponent.props;
        var children = _itemsComponent$props.children;
        var _children = _itemsComponent$props._children;

        var copy,

        //剩余一次可截取个数
        last = length - start,
            c;

        //以html指令方式创建的组件 这里要手动append dom
        var doms = _children,
            domSlice = [];

        if (appendLength > last) {
            copy = children.slice(start); //从当前copy到结尾
            if (doms) {
                children.forEach(function (n, i) {
                    i >= start && domSlice.push(i);
                });
            }
            start = 0;
            appendLength = appendLength - copy.length;
        }
        c = children.slice(start, start + appendLength);
        if (doms) {
            children.forEach(function (n, i) {
                i >= start && i < start + appendLength && domSlice.push(i);
            });
        }
        if (copy) {
            Array.prototype.push.apply(copy, c);
        } else {
            copy = c;
        }

        var _totalLength = this.state.totalLength; //添加之前的个数

        Array.prototype.push.apply(children, copy);

        this.state.totalLength = children.length; //追加后的总个数

        if (this.props.direction == 'x') {
            size.total = this.state.totalLength * size.item;
        }
        this.setState({ size: size });
        itemsComponent.setState({ children: children }, function (a) {
            if (doms) {
                domSlice.forEach(function (n) {
                    itemsComponent.refs['item' + _totalLength].appendChild(doms[n].cloneNode(true));
                    _totalLength++;
                });
            }
        });
    },
    start: function start() {
        var _this2 = this;

        var _state3 = this.state;
        var auto = _state3.auto;
        var length = _state3.length;
        var view = _state3.view;
        var time = _state3.time;
        // console.log(length,auto,view)

        if (auto && length > view) {
            clearInterval(this.delay);
            this.delay = setInterval(function () {
                _this2.scroll();
            }, time);
        }
    },
    stop: function stop() {
        this.delay = clearInterval(this.delay);
    },
    reset: function reset() {
        // var {childComponents} = this.state
        var _props2 = this.props;
        var computed = _props2.computed;
        var direction = _props2.direction;
        var step = _props2.step;

        var itemsComponent = this.state.itemsComponent;
        var horizontal = direction == 'x';
        var wrap = $(itemsComponent.refs.wrap);
        var content = $(itemsComponent.refs.items);
        var item = $(itemsComponent.refs.item0);

        var size = this.state.size = {
            box: horizontal ? wrap.width() : wrap.height(), //容器尺寸
            total: horizontal ? null : content.height(), //内容总尺寸
            item: horizontal ? item.outerWidth(true) : item.outerHeight(true) //单项尺寸
        };
        if (horizontal) {
            size.total = this.state.totalLength * size.item;
        }
        this.state.view = Math.ceil(size.box / size.item);

        if (step == 'view') {
            this.state.step = this.state.view;
        }
        this.setState({ size: size });
        itemsComponent.forceUpdate();
    },
    scroll: function scroll(next) {
        var _this3 = this;

        /*
         * next 
         * boolean: 向前/后滚动 控制方向
         * number: 索引值 直接滚动到某一张 （若repeat=true 该索引是相对追加之前的）
         */
        var _state4 = this.state;
        var size = _state4.size;
        var step = _state4.step;
        var scrollLength = _state4.scrollLength;
        var totalLength = _state4.totalLength;
        var length = _state4.length;
        var view = _state4.view;
        var itemsComponent = _state4.itemsComponent;

        var index;
        if (typeof next == 'number') {
            index = getIndex(next, length);
        } else {
            next = next === false ? false : true;
        }
        if (next !== undefined) {
            this.start(); //外部控制滚动后 重新开始计时
        }
        var wrap = $(itemsComponent.refs.wrap);

        var direction = this.props.direction;

        //if( this.wrap.is(":animated") ) { return;}

        wrap.stop();

        var isExist = nj.utils.elementInDOM(ReactDOM.findDOMNode(this)); //组件是否被移除
        if (!isExist) {
            this.stop();
            wrap.stop();
            return;
        }

        var T = this,
            m,
            speed = 0,

        //每次滚动距离，连续-每次增加1px，间隔-每次增加n个元素的宽高
        //计算最大滚动差
        max = size.total - size.box,
            scrollAttr = direction == 'x' ? 'scrollLeft' : 'scrollTop',
            attr = {},
            now = wrap[scrollAttr](),
            nowScroll,
            ratio = next ? 1 : -1;

        if (step == 0) {
            m = 1;
        } else {
            m = step * size.item;
            speed = 800;
        }

        if (step) {
            m = ratio * m;

            //不足prev时 向后跳转this.len的个数
            if (!next && scrollLength < step && typeof index == 'undefined') {
                var prevLast = totalLength - (scrollLength + length);

                if (prevLast < view) {
                    this.append(totalLength % length, view - prevLast);
                    totalLength = this.state.totalLength;
                    // scrollLength = this.state.scrollLength
                }
                wrap[scrollAttr](wrap[scrollAttr]() + size.item * length);
                scrollLength += length;
            }

            scrollLength += ratio * step;
        } else {
            //连续滚动
            scrollLength = Math.floor(now / size.item);
        }
        this.state.index = scrollLength % length; //当前开始index

        if (typeof index == 'undefined') {
            attr[scrollAttr] = '+=' + m;
            this.state[scrollAttr] = nowScroll = now + ratio * m;
        } else {
            scrollLength = index;
            this.state.index = index;
            attr[scrollAttr] = this.state[scrollAttr] = nowScroll = now = size.item * index;
        }
        this.state.scrollLength = scrollLength;
        this.state.endIndex = getIndex(this.state.index + view - 1, length); //当前结束index

        wrap.animate(attr, speed, 'easeOutExpo', function () {
            if (nowScroll >= length * size.item) {
                //滚动过得距离超过总长度  则向前跳转一次
                var newPos = step ? size.item * _this3.state.index : 0;
                wrap[scrollAttr](newPos);
                scrollLength = _this3.state.scrollLength = _this3.state.index = step ? _this3.state.index : newPos;
                //T.step==0 && T.scroll();
            }
            var last = totalLength - scrollLength - view;
            if (last < view) {
                //需再次追加 此处step=0不会存在
                _this3.append(getIndex(_this3.state.endIndex + last + 1, length), view - last);
            }
            _this3.scrollEndEvent.complete();
        });
        // this.setState({index:this.state.index})
        this.state.childComponents.forEach(function (c) {
            c.forceUpdate();
        });
        this.scrollEvent.complete(this.state.index);
    },
    render: function render() {
        var _props3 = this.props;
        var className = _props3.className;
        var children = _props3.children;

        className = nj.utils.joinClass('nj-scroll', className);
        return React.createElement(
            'div',
            { className: className },
            children
        );
    }
});
Scroll.PropTypes = {
    step: React.PropTypes.number,
    time: React.PropTypes.number,
    pageTemplate: React.PropTypes.func
};

var createdEvents = nj.utils.addEventQueue.call(Scroll, 'onCreated');

var ScrollItems = React.createClass({
    displayName: 'ScrollItems',

    mixins: [mixins.childComponents.setParents([Scroll])],
    getInitialState: function getInitialState() {
        return {};
    },
    componentDidMount: function componentDidMount() {
        directive.getChildComponents(this);

        var parentComponent = this.state.parentComponent;

        parentComponent.state.totalLength = parentComponent.state.length = this.props.children.length;
        //父组件中通过itemsComponent来调用
        parentComponent.state.itemsComponent = this;

        //适应多分辨率时 设置computed=true可以自动为this.item设置尺寸 因为css中无法设置
        var _parentComponent$prop = parentComponent.props;
        var direction = _parentComponent$prop.direction;
        var computed = _parentComponent$prop.computed;
        var _parentComponent$prop2 = _parentComponent$prop.view;
        var view = _parentComponent$prop2 === undefined ? 1 : _parentComponent$prop2;

        var horizontal = direction == 'x';
        var itemStyle = { display: horizontal ? 'inline-block' : 'block' };

        if (computed) {
            var value;
            var wrap = $(this.refs.wrap);
            if (horizontal) {
                value = wrap.width() / view;
                //view为初始设置的可视区域个数 此处计算适用于百分比设置的宽度
                itemStyle.width = value;
                itemStyle.height = value / computed;
            } else {
                value = wrap.height() / view;
                itemStyle.width = value * computed;
                itemStyle.height = value;
            }
        }
        this.setState({ itemStyle: itemStyle });
    },
    render: function render() {
        var _state5 = this.state;
        var parentComponent = _state5.parentComponent;
        var itemStyle = _state5.itemStyle;
        // if( !parentComponent ){
        //     console.log(1)
        //     return null
        // }

        var direction = parentComponent.props.direction;

        var horizontal = direction == 'x';

        var _props4 = this.props;
        var children = _props4.children;
        var className = _props4.className;

        className = nj.utils.joinClass('nj-scroll-item clearfix', className);
        var size = parentComponent.state.size;

        return React.createElement(
            'div',
            { ref: 'wrap', className: 'nj-scroll-wrap' },
            React.createElement(
                'div',
                { ref: 'items', className: 'nj-scroll-items clearfix', style: horizontal ? { width: size.total } : {} },
                children.map(function (item, i) {
                    return React.createElement(
                        'span',
                        { className: className, ref: 'item' + i, key: i, style: itemStyle },
                        item
                    );
                })
            )
        );
    }
});

var ScrollPage = React.createClass({
    displayName: 'ScrollPage',

    mixins: [mixins.childComponents.setParents([Scroll])],
    getDefaultProps: function getDefaultProps() {
        return { pages: 0 };
    },
    handleClick: function handleClick(index) {
        var parentComponent = this.state.parentComponent;

        parentComponent.stop();
        parentComponent.scroll(index);
    },
    componentDidMount: function componentDidMount() {
        directive.getChildComponents(this);

        var parentComponent = this.state.parentComponent;

        parentComponent.state.page = this;
    },
    render: function render() {
        var _this4 = this;

        // console.log(this.props)
        var parentComponent = this.state.parentComponent;
        var _parentComponent$stat = parentComponent.state;
        var length = _parentComponent$stat.length;
        var index = _parentComponent$stat.index;

        var items = [];
        for (var i = 0; i < length; i++) {
            items.push(i + 1);
        }
        var _props5 = this.props;
        var trigger = _props5.trigger;
        var className = _props5.className;

        var template = this.props.template || parentComponent.props.pageTemplate;

        return React.createElement(
            'div',
            { className: 'nj-scroll-page ' + className },
            React.createElement(
                'div',
                { className: '-page-inner' },
                items.map(function (n, i) {
                    var tmpl = typeof template == 'function' && template.call(_this4, i);
                    var child = tmpl || n;
                    var options = {
                        ref: 'item' + i,
                        className: nj.utils.joinClass('-page-item', n - 1 == index && '-page-active'),
                        key: n
                    };
                    if (typeof tmpl == 'string') {
                        options.dangerouslySetInnerHTML = { __html: tmpl };
                        child = null;
                    }
                    options[trigger == 'hover' ? 'onMouseEnter' : 'onClick'] = _this4.handleClick.bind(_this4, n - 1);
                    return React.createElement(
                        'span',
                        options,
                        child
                    );
                })
            )
        );
    }
});
ScrollPage.PropTypes = {
    pages: React.PropTypes.number
};

function getIndex(index, total) {
    index = index < 0 ? 0 : index;
    index = index > total ? index % total : index;
    return index;
}

var directive = new Directive({
    elementGroups: {
        'scroll': {
            children: ['scroll-items', 'scroll-page'],
            component: Scroll
        },
        'scroll-items': {
            component: ScrollItems,
            wrapItem: function wrapItem(component, element, i) {
                return component.refs['item' + i];
            }
        },
        'scroll-page': {
            component: ScrollPage
        }
    },
    // wrap : component=>ReactDOM.findDOMNode(component),
    exports: exports
});

//当脚本在页面底部运行时 直接运行一次可以后续代码中立即获取实例
directive.start();