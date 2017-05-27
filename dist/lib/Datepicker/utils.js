'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTimestamp = exports.parseNumber = exports.getNearMonth = exports.getDays = exports.today = exports.getMonthData = undefined;

var _nojsReact = require('../nojs-react');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateParse = _nojsReact.utils.dateParse;


var dateCache = {};

//获取某月的数据
var getMonthData = exports.getMonthData = function getMonthData(options) {
    var year = void 0;
    var month = void 0;
    var date = void 0;
    var _date = void 0;
    var hours = 0;
    var minutes = 0;
    var type = _jquery2.default.type(options);
    var key = void 0;

    if (type == 'object') {
        year = options.year;
        month = options.month;
        // key = year + month
    } else if (type == 'date') {
        _date = options;
    } else if (!options) {
        _date = new Date();
    } else if (type == 'string' || type == 'number') {
        options = type == 'string' ? options.replace(/[\u4E00-\u9FA5]/g, '/') : options;
        //字符串或时间戳
        _date = new Date(options);
    }

    if (_date) {
        // key = _date.getTime()
        year = _date.getFullYear();
        month = _date.getMonth() + 1;
        date = _date.getDate();
        if (options) {
            hours = _date.getHours();
            minutes = _date.getMinutes();
        }
    }
    key = year + '-' + month;
    // console.log(options, year, month)

    var cache = dateCache[key];
    if (cache) {
        if (options && _date) {
            //传入的具体日期时 更新date/hours等值
            return Object.assign({}, cache, { date: date, hours: hours, minutes: minutes });
        }
        // return cache
        //当options传入的是对象时 也只返回年月日数据(除去date, hours, minutes)
        return {
            year: cache.year,
            month: cache.month,
            dates: cache.dates
        };
    }
    var days = getDays({ year: year, month: month });
    var allDays = [];

    for (var i = 1; i <= days; i++) {
        allDays.push({
            year: year, month: month,
            date: i,
            //星期
            day: new Date(year, month - 1, i).getDay(),
            current: true,
            timestamp: new Date(year, month - 1, i).getTime(),
            isToday: today.date == i && today.month == month && today.year == year
        });
    }

    var startDay = allDays[0].day; //月初天星期数
    var endDay = allDays[days - 1].day; //月末天星期数

    //月初天不是周日
    if (startDay > 0) {
        var prevMonth = getNearMonth({ year: year, month: month, step: -1 });
        var prevDays = getDays(prevMonth);
        var i = 0;
        // console.log(12,prevMonth, prevDays)
        while (i < startDay) {
            allDays.unshift({
                year: prevMonth.year,
                month: prevMonth.month,
                date: prevDays - i,
                prevMonth: true,
                timestamp: new Date(prevMonth.year, prevMonth.month - 1, prevDays - i).getTime(),
                day: new Date(prevMonth.year, prevMonth.month - 1, prevDays - i).getDay()
            });
            i++;
        }
    }

    //月末不是周6
    if (allDays.length < 42) {
        var nextMonth = getNearMonth({ year: year, month: month, step: 1 });
        var i = 0;
        endDay = endDay == 6 ? -1 : endDay; //月末是周6
        while (++endDay <= 6) {
            i++;
            allDays.push({
                year: nextMonth.year,
                month: nextMonth.month,
                date: i,
                nextMonth: true,
                timestamp: new Date(nextMonth.year, nextMonth.month - 1, i).getTime(),
                day: endDay
            });
            //补齐到满5行时 再补一行凑齐6行
            if (allDays.length == 35 && endDay == 6) {
                endDay = -1;
            }
        }
    }

    var data = dateCache[key] = {
        year: year, month: month, date: date, hours: hours, minutes: minutes,
        dates: allDays
    };
    return data;
};

var d = new Date();

var today = exports.today = {
    date: d.getDate(),
    month: d.getMonth() + 1,
    year: d.getFullYear()
};

//获取某月的天数
var getDays = exports.getDays = function getDays(_ref) {
    var year = _ref.year;
    var month = _ref.month;

    return new Date(year, month, 0).getDate();
};

//获取相邻月份 前n月或后n月
var getNearMonth = exports.getNearMonth = function getNearMonth(_ref2) {
    var year = _ref2.year;
    var month = _ref2.month;
    var step = _ref2.step;

    //年跨度
    var yearStep = step < 0 ? Math.ceil(step / 12) : Math.floor(step / 12);
    //月跨度 除去整年数
    var monthStep = step % 12;

    year = parseInt(year);
    month = parseInt(month);

    year += yearStep;
    month += monthStep;

    if (month < 1) {
        month = 12 + month;
        year--;
    } else if (month > 12) {
        month %= 12;
        year++;
    }
    return { year: year, month: month };
};

var parseNumber = exports.parseNumber = function parseNumber(num) {
    num = parseInt(num);
    return num < 10 ? '0' + num : '' + num;
};

/**
 * 获取一个自定义对象的时间戳 {year, month, date, hours, minutes, seconds}
 * length限制长度 如length=3则只取到天 后面都为0
 */
var getTimestamp = exports.getTimestamp = function getTimestamp(n, length) {
    length = !length || length < 3 ? 3 : length;
    return new Date(parseInt(n.year), parseInt(n.month) - 1, parseInt(n.date), length > 3 && parseInt(n.hours) || 0, length > 4 && parseInt(n.minutes) || 0, length > 5 && parseInt(n.seconds) || 0).getTime();
};

// console.log(getMonthData({year:2018,month:4}))
// console.log(getNearMonth({year:2017,month:5, step:-4}))