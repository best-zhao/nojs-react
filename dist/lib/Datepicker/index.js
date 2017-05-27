'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _nojsReact = require('../nojs-react');

var _popover = require('../popover');

var _popover2 = _interopRequireDefault(_popover);

var _Datetime = require('./Datetime');

var _Datetime2 = _interopRequireDefault(_Datetime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Datepicker = function (_React$Component) {
    _inherits(Datepicker, _React$Component);

    function Datepicker(props) {
        _classCallCheck(this, Datepicker);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Datepicker).call(this, props));

        _this.state = { value: _this.props.value };
        return _this;
    }

    _createClass(Datepicker, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var options = this.state.options = Object.assign({}, this.props);
            var input = this.refs.input;


            input = options.input || input;

            var pop = _popover2.default.create({
                name: 'nj-datepicker-pop',
                nearby: input,
                // effect : 'normal',
                // template : <Datetime {...options}/>,
                trigger: 'click'

            }).onShow(function () {

                //获取初始value
                options.value = input.value;

                //重写onChange
                var onChange = _this2.props.onChange;


                options.onChange = function (value, data, timestamp) {
                    if (options.input) {
                        //兼容Input组件
                        var _input = input;
                        var $handle = _input.$handle;

                        $handle ? $handle.setState({ value: value }) : input.value = value;
                    } else {
                        _this2.setState({ value: value });
                    }
                    onChange && onChange.call(_this2, value, data, timestamp);
                };
                pop.setState({ template: _nojsReact.React.createElement(_Datetime2.default, options) }, function () {
                    pop.align.set();
                });
            }).onHide(function () {
                pop.setState({ template: null });
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            Object.assign(this.state.options, nextProps);
        }
    }, {
        key: 'render',
        value: function render() {
            var value = this.state.value;
            var _props = this.props;
            var placeholder = _props.placeholder;
            var name = _props.name;
            var className = _props.className;
            var input = _props.input;

            var attrs = { placeholder: placeholder, name: name, className: className, readOnly: true, value: value, ref: 'input' };
            return input ? null : _nojsReact.React.createElement('input', attrs);
        }
    }]);

    return Datepicker;
}(_nojsReact.React.Component);

exports.default = Datepicker;