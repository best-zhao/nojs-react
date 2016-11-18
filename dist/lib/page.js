'use strict';

/**
 * 分页组件
 */
var nj = require('./nojs-react');
var React = nj.React;
var ReactDOM = nj.ReactDOM;
var mixins = nj.mixins;

var $ = require('jquery');

var Page = React.createClass({
    displayName: 'Page',
    getInitialState: function getInitialState() {
        return {
            start: 0,
            end: this.props.perpage,
            page: this.props.page || 1,
            pages: this.getPages()
        };
    },
    getDefaultProps: function getDefaultProps() {
        return {
            data: [],
            perpage: 10 //每页个数
            //page : 1//当前页码
            //pages : 
            //count : //数据数量
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState({ pages: this.getPages(nextProps) });
    },
    componentDidMount: function componentDidMount() {
        // var {onChange} = this.props
        // setTimeout(()=>{
        //     onChange && onChange(this.setData(this.state.page))
        // }, 10)
    },
    getPages: function getPages(props) {
        props = props || this.props;
        return Math.ceil(props.count / props.perpage);
    },
    handleChange: function handleChange(action, e) {
        var _props = this.props;
        var onChange = _props.onChange;
        var perpage = _props.perpage;
        var data = _props.data;
        var page = this.state.page;

        var _page = page;
        if (typeof action == 'number') {
            page = action;
        } else {
            switch (action) {
                case 'next':
                    page++;
                    break;
                case 'prev':
                    page--;
                    break;
            }
        }
        onChange && onChange(_page, page, this.setData(page));
        e.preventDefault();
    },
    setData: function setData(page) {
        page = page || this.state.page;
        var _props2 = this.props;
        var perpage = _props2.perpage;
        var data = _props2.data;

        var start = (page - 1) * perpage;
        var end = start + perpage;
        end = end >= data.length ? data.length : end;
        this.setState({ page: page, start: start, end: end });
        var _data = data.slice(start, start + perpage);
        return _data;
    },
    render: function render() {
        var page = this.state.page;

        var pages = this.getPages(); //总页数
        // console.log(page,pages,this.props.data.length,this.props.perpage)
        return React.createElement(
            'div',
            { className: 'nj-page ' + this.props.className },
            page > 1 && React.createElement(
                'a',
                { href: '', onClick: this.handleChange.bind(this, 1) },
                '\u9996\u9875'
            ),
            page > 1 && React.createElement(
                'a',
                { href: '', onClick: this.handleChange.bind(this, 'prev') },
                '\u4E0A\u4E00\u9875'
            ),
            this.state.page,
            '/',
            pages,
            page < pages && pages > 1 && React.createElement(
                'a',
                { href: '', onClick: this.handleChange.bind(this, 'next') },
                '\u4E0B\u4E00\u9875'
            ),
            page < pages && pages > 1 && React.createElement(
                'a',
                { href: '', onClick: this.handleChange.bind(this, pages) },
                '\u5C3E\u9875'
            )
        );
    }
});
Page.propTypes = {
    data: React.PropTypes.array,
    onChange: React.PropTypes.func
};

module.exports = Page;