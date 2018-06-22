'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nojsReact = require('../nojs-react');

var _utils = require('./utils');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 日期级联菜单
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// import {Form, Input} from '../form'
// import Tree, {LinkTree} from '../tree'
// console.log(today)
var Link = function (_React$Component) {
    _inherits(Link, _React$Component);

    function Link(props) {
        _classCallCheck(this, Link);

        var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));

        var now = new Date();
        var year = void 0; //= now.getFullYear()
        var month = void 0; //= now.getMonth()+1
        var date = void 0; //= now.getDate()
        var hours = void 0; //= now.getHours()
        var minutes = void 0; //= now.getMinutes()
        var seconds = void 0; //= now.getSeconds()

        _this.state = {
            _today: {
                year: now.getFullYear(),
                month: now.getMonth() + 1,
                date: now.getDate(),
                hours: now.getHours(),
                minutes: now.getMinutes(),
                seconds: now.getSeconds()
            },
            formdata: {},
            year: year,
            yearItems: _this.getArray(_utils.today.year, 100),
            month: month,
            monthItems: _this.getArray(12),
            date: date,
            dateItems: _this.getArray(new Date(_utils.today.year, _utils.today.month, 0).getDate()),
            hours: hours,
            hoursItems: _this.getArray(23, 24),
            minutes: minutes,
            minutesItems: _this.getArray(59, 60),
            seconds: seconds,
            secondsItems: _this.getArray(59, 60)
            // console.log(this.state)
        };return _this;
    }

    _createClass(Link, [{
        key: 'getArray',
        value: function getArray(end, total) {
            var data = [];
            for (var i = 0; i < (total || end); i++) {
                data.unshift(end - i);
            }
            return data;
        }
    }, {
        key: 'changeHandle',
        value: function changeHandle(key, length, e) {
            var _this2 = this;

            var onChange = this.props.onChange;
            var _state = this.state,
                year = _state.year,
                month = _state.month,
                _today = _state._today;

            var value = e.target.value;
            var newState = _defineProperty({}, key, value);
            if (key == 'month') {
                var days = new Date(year, value, 0).getDate();
                newState.dates = this.getArray(days);
            }

            var full = {};
            Object.keys(_today).map(function (k) {
                full[k] = newState[k] || _this2.state[k] || _today[k];
            });
            var timestamp = newState.timestamp = (0, _utils.getTimestamp)(full, 6);

            this.setState(newState, function () {
                onChange && onChange.call(_this2, _this2.state);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                ids = _props.ids,
                _props$infos = _props.infos,
                infos = _props$infos === undefined ? [] : _props$infos,
                format = _props.format,
                min = _props.min,
                max = _props.max;
            var _state2 = this.state,
                yearItems = _state2.yearItems,
                monthItems = _state2.monthItems,
                dateItems = _state2.dateItems,
                hoursItems = _state2.hoursItems,
                minutesItems = _state2.minutesItems,
                secondsItems = _state2.secondsItems,
                year = _state2.year,
                month = _state2.month,
                date = _state2.date,
                hours = _state2.hours,
                minutes = _state2.minutes,
                seconds = _state2.seconds,
                _today = _state2._today;


            var _infos = [].concat(infos);
            var keys = Object.keys(_today);

            var arr = function arr(index) {
                var info = _infos.shift() || {};
                var defaultValue = info.defaultValue;
                var key = keys[index];
                var stateValue = _this3.state[key];
                if (defaultValue && !stateValue) {
                    _this3.state[keys[index]] = stateValue = defaultValue;
                    info.defaultValue = null;
                }

                var checkDisabled = function checkDisabled(item, length) {
                    var disabled = void 0;

                    var full = {};
                    keys.map(function (k, i) {
                        full[k] = _this3.state[k] || _today[k];
                    });
                    full[keys[length - 1]] = item;

                    var timestamp = (0, _utils.getTimestamp)(full, 6);

                    if (min && timestamp < min) {
                        disabled = true;
                    }
                    if (!disabled && max && timestamp > max) {
                        disabled = true;
                    }
                    return { disabled: disabled };
                };
                return [_nojsReact.React.createElement(
                    'select',
                    _extends({}, info, { value: stateValue, onChange: _this3.changeHandle.bind(_this3, 'year', 1) }),
                    _nojsReact.React.createElement(
                        'option',
                        { value: '' },
                        '\u8BF7\u9009\u62E9'
                    ),
                    yearItems.map(function (item) {
                        return _nojsReact.React.createElement(
                            'option',
                            _extends({}, checkDisabled(item, 1), { value: item }),
                            item,
                            info.fix
                        );
                    })
                ), _nojsReact.React.createElement(
                    'select',
                    _extends({}, info, { value: stateValue, onChange: _this3.changeHandle.bind(_this3, 'month', 2) }),
                    _nojsReact.React.createElement(
                        'option',
                        { value: '' },
                        '\u8BF7\u9009\u62E9'
                    ),
                    monthItems.map(function (item) {
                        return _nojsReact.React.createElement(
                            'option',
                            _extends({}, checkDisabled(item, 2), { value: item }),
                            item < 10 ? '0' + item : item,
                            info.fix
                        );
                    })
                ), _nojsReact.React.createElement(
                    'select',
                    _extends({}, info, { value: stateValue, onChange: _this3.changeHandle.bind(_this3, 'date', 3) }),
                    _nojsReact.React.createElement(
                        'option',
                        { value: '' },
                        '\u8BF7\u9009\u62E9'
                    ),
                    dateItems.map(function (item) {
                        return _nojsReact.React.createElement(
                            'option',
                            _extends({}, checkDisabled(item, 3), { value: item }),
                            item < 10 ? '0' + item : item,
                            info.fix
                        );
                    })
                ), _nojsReact.React.createElement(
                    'select',
                    _extends({}, info, { value: stateValue, onChange: _this3.changeHandle.bind(_this3, 'hours', 4) }),
                    hoursItems.map(function (item) {
                        return _nojsReact.React.createElement(
                            'option',
                            _extends({}, checkDisabled(item, 4), { value: item }),
                            item < 10 ? '0' + item : item,
                            info.fix
                        );
                    })
                ), _nojsReact.React.createElement(
                    'select',
                    _extends({}, info, { value: stateValue, onChange: _this3.changeHandle.bind(_this3, 'minutes', 5) }),
                    minutesItems.map(function (item) {
                        return _nojsReact.React.createElement(
                            'option',
                            _extends({}, checkDisabled(item, 5), { value: item }),
                            item < 10 ? '0' + item : item,
                            info.fix
                        );
                    })
                ), _nojsReact.React.createElement(
                    'select',
                    _extends({}, info, { value: stateValue, onChange: _this3.changeHandle.bind(_this3, 'seconds', 6) }),
                    secondsItems.map(function (item) {
                        return _nojsReact.React.createElement(
                            'option',
                            _extends({}, checkDisabled(item, 6), { value: item }),
                            item < 10 ? '0' + item : item,
                            info.fix
                        );
                    })
                )][index];
            };
            var strMaps = {
                'YY': '0',
                'MM': '1',
                'DD': '2',
                'hh': '3',
                'mm': '4',
                'ss': '5'
            };
            var newarr = [];
            format.replace(/\b(\w+)\b([\s\S]?)/g, function (a, b, c) {
                newarr.push(arr(strMaps[b]));
                newarr.push(c.trim());
            });
            return _nojsReact.React.createElement(
                'span',
                null,
                newarr
            );
        }
    }]);

    return Link;
}(_nojsReact.React.Component);

exports.default = Link;


Link.defaultProps = {
    format: 'YY MM DD'
};