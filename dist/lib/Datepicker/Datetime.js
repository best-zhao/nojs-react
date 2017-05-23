'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _nojsReact = require('../nojs-react');

var _utils = require('./utils');

require('../../../css/datepicker.css');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dateParse = _nojsReact.utils.dateParse;
var joinClass = _nojsReact.utils.joinClass;

var Datetime = function (_React$Component) {
    _inherits(Datetime, _React$Component);

    function Datetime(props) {
        _classCallCheck(this, Datetime);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Datetime).call(this, props));

        var _this$props = _this.props;
        var value = _this$props.value;
        var min = _this$props.min;
        var max = _this$props.max;
        var months = _this$props.months;

        min = min && (0, _utils.getMonthData)(min);
        max = max && (0, _utils.getMonthData)(max);

        var startMonth = min && !value ? { year: min.year, month: min.month } : value;
        var currentMonth = _this.getMonthGroups(startMonth);

        if (min) {
            min = {
                date: (0, _utils.getTimestamp)(min),
                hours: (0, _utils.getTimestamp)(min, 4),
                minutes: (0, _utils.getTimestamp)(min, 5)
            };
        }
        if (max) {
            max = {
                date: (0, _utils.getTimestamp)(max),
                hours: (0, _utils.getTimestamp)(max, 4),
                minutes: (0, _utils.getTimestamp)(max, 5)
            };
        }

        var _currentMonth$ = currentMonth[0];
        var year = _currentMonth$.year;
        var month = _currentMonth$.month;
        var date = _currentMonth$.date;
        var hours = _currentMonth$.hours;
        var minutes = _currentMonth$.minutes;

        _this.state = {
            currentMonth: currentMonth,
            value: value, min: min, max: max,
            hours: hours, minutes: minutes,
            //当前所选 默认今天 {year, month, date}
            currentDate: value && { year: year, month: month, date: date },
            hoursItems: Array.prototype.concat.apply([], new Array(24)),
            minutesItems: Array.prototype.concat.apply([], new Array(60))
        };
        return _this;
    }

    _createClass(Datetime, [{
        key: 'getMonthGroups',
        value: function getMonthGroups(startMonth) {
            var currentMonth = [(0, _utils.getMonthData)(startMonth)];
            for (var i = 1; i < this.props.months; i++) {
                var nowMonth = currentMonth[i - 1];
                var nextMonth = (0, _utils.getNearMonth)({
                    year: nowMonth.year,
                    month: nowMonth.month,
                    step: 1
                });
                currentMonth.push((0, _utils.getMonthData)(nextMonth));
            }
            return currentMonth;
        }
        //跳转月份

    }, {
        key: 'jumpTo',
        value: function jumpTo(step) {
            var months = this.props.months;
            var currentMonth = this.state.currentMonth;
            var _currentMonth$2 = currentMonth[0];
            var year = _currentMonth$2.year;
            var month = _currentMonth$2.month;

            var startMonth = (0, _utils.getNearMonth)({ year: year, month: month, step: step });
            this.setState({ currentMonth: this.getMonthGroups(startMonth) });
        }
    }, {
        key: 'changeDate',
        value: function changeDate(_ref) {
            var _this2 = this;

            var year = _ref.year;
            var month = _ref.month;
            var date = _ref.date;
            var day = _ref.day;
            var current = _ref.current;
            var prevMonth = _ref.prevMonth;

            if (!date) {
                //没有选择天
                return;
            }
            var _props = this.props;
            var onChange = _props.onChange;
            var format = _props.format;
            var _state = this.state;
            var hours = _state.hours;
            var minutes = _state.minutes;

            if (!current) {
                //选择的日期是相邻的月份
                this.jumpTo(prevMonth ? -1 : 1);
            }
            var value = dateParse({
                date: [year, month, date].join('-') + ' ' + [hours, minutes].join(':'),
                format: format
            });
            this.setState({ currentDate: { year: year, month: month, date: date, day: day }, value: value }, function () {
                var data = Object.assign({ hours: hours, minutes: minutes }, _this2.state.currentDate);
                var timestamp = (0, _utils.getTimestamp)(data, 6);
                console.log(day);
                onChange && onChange.call(_this2, value, data, timestamp);
            });
        }
    }, {
        key: 'changeTime',
        value: function changeTime(key, e) {
            var _this3 = this;

            this.setState(_defineProperty({}, key, parseInt(e.target.value)), function () {
                return _this3.changeDate(Object.assign({ current: true }, _this3.state.currentDate));
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var weeks = this.props.weeks;
            var _state2 = this.state;
            var min = _state2.min;
            var max = _state2.max;
            var hours = _state2.hours;
            var minutes = _state2.minutes;
            var hoursItems = _state2.hoursItems;
            var minutesItems = _state2.minutesItems;
            var currentMonth = _state2.currentMonth;
            var _state2$currentDate = _state2.currentDate;
            var currentDate = _state2$currentDate === undefined ? {} : _state2$currentDate;


            var _years = currentMonth.map(function (item) {
                return item.year;
            });
            var _months = currentMonth.map(function (item) {
                return item.month;
            });

            //检查是否为当前选中日期
            var checkCurrentDate = function checkCurrentDate(item, i) {
                return currentDate.date == item.date && currentDate.month == item.month && _months[i] == item.month && currentDate.year == item.year && _years[i] == item.year;
            };

            var checkDisabled = function checkDisabled(data, key) {
                var disabled = void 0;
                // let allowSame = key=='hours' || key=='minutes'
                if (min) {
                    disabled = data < min[key];
                }
                if (max) {
                    disabled = data > max[key];
                }
                return disabled;
            };

            var weekEl = _nojsReact.React.createElement(
                'ul',
                { className: 'clearfix _weeks' },
                weeks.map(function (item, i) {
                    return _nojsReact.React.createElement(
                        'li',
                        { key: i },
                        item
                    );
                })
            );

            return _nojsReact.React.createElement(
                'div',
                { className: 'nj-datepicker' },
                _nojsReact.React.createElement(
                    'div',
                    { className: '_groups clearfix' },
                    currentMonth.map(function (item, i) {
                        var year = item.year;
                        var month = item.month;
                        var dates = item.dates;

                        return _nojsReact.React.createElement(
                            'div',
                            { className: '_group', key: year + '-' + month },
                            _nojsReact.React.createElement(
                                'div',
                                { className: '_head clearfix' },
                                i == 0 ? _nojsReact.React.createElement(
                                    'span',
                                    { className: 'fl' },
                                    _nojsReact.React.createElement('i', { onClick: _this4.jumpTo.bind(_this4, -12), className: 'nj-icon nj-icon-left2' }),
                                    _nojsReact.React.createElement('i', { onClick: _this4.jumpTo.bind(_this4, -1), className: 'nj-icon nj-icon-left' })
                                ) : null,
                                i == currentMonth.length - 1 ? _nojsReact.React.createElement(
                                    'span',
                                    { className: 'fr' },
                                    _nojsReact.React.createElement('i', { onClick: _this4.jumpTo.bind(_this4, 1), className: 'nj-icon nj-icon-right' }),
                                    _nojsReact.React.createElement('i', { onClick: _this4.jumpTo.bind(_this4, 12), className: 'nj-icon nj-icon-right2' })
                                ) : null,
                                year,
                                '\u5E74 ',
                                (0, _utils.parseNumber)(month),
                                '\u6708'
                            ),
                            weekEl,
                            _nojsReact.React.createElement(
                                'ul',
                                { className: '_dates clearfix' },
                                dates.map(function (item) {
                                    var disabled = checkDisabled(item.timestamp, 'date');
                                    var className = joinClass(!disabled && checkCurrentDate(item, i) && 'active', !item.current && 'gray', disabled && 'disabled', item.isToday && 'today');
                                    return _nojsReact.React.createElement(
                                        'li',
                                        {
                                            key: [item.year, item.month, item.date].join(''),
                                            onClick: !disabled && _this4.changeDate.bind(_this4, item),
                                            className: className
                                        },
                                        _nojsReact.React.createElement(
                                            'span',
                                            null,
                                            item.date
                                        )
                                    );
                                })
                            )
                        );
                    })
                ),
                _nojsReact.React.createElement(
                    'div',
                    { className: '_times' },
                    '\u65F6\u95F4\uFF1A',
                    _nojsReact.React.createElement(
                        'select',
                        {
                            value: hours,
                            disabled: !currentDate.date,
                            onChange: this.changeTime.bind(this, 'hours')
                        },
                        hoursItems.map(function (h, i) {
                            var disabled = void 0;
                            if (currentDate.date) {
                                var d = Object.assign({}, currentDate, { hours: i });
                                var timestamp = (0, _utils.getTimestamp)(d, 4);
                                disabled = checkDisabled(timestamp, 'hours');
                            }
                            return _nojsReact.React.createElement(
                                'option',
                                { disabled: disabled, key: i, value: i },
                                (0, _utils.parseNumber)(i)
                            );
                        })
                    ),
                    ' :',
                    _nojsReact.React.createElement(
                        'select',
                        {
                            value: minutes,
                            disabled: !currentDate.date,
                            onChange: this.changeTime.bind(this, 'minutes')
                        },
                        minutesItems.map(function (h, i) {
                            var disabled = void 0;
                            if (currentDate.date) {
                                var d = Object.assign({}, currentDate, { hours: hours, minutes: i });
                                var timestamp = (0, _utils.getTimestamp)(d, 5);
                                disabled = checkDisabled(timestamp, 'minutes');
                            }
                            return _nojsReact.React.createElement(
                                'option',
                                { disabled: disabled, key: i, value: i },
                                (0, _utils.parseNumber)(i)
                            );
                        })
                    )
                )
            );
        }
    }]);

    return Datetime;
}(_nojsReact.React.Component);

Datetime.defaultProps = {
    //显示的月份数
    months: 1,
    format: 'yy-mm-dd hh:mm:ss',
    weeks: ['日', '一', '二', '三', '四', '五', '六']
};

exports.default = Datetime;