/**
 * 分页组件
 */
import $ from 'jquery'
import nj, {React, ReactDOM, mixins} from './nojs-react'
import PropTypes from 'prop-types'

class Page extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            start : 0,
            end : this.props.perpage,
            page : this.props.page || 1,
            pages : this.getPages()
        }
    }   
    componentWillReceiveProps (nextProps) {
        this.setState({pages:this.getPages(nextProps)})
    }
    componentDidMount () {
        var {onChange} = this.props
        var {page} = this.state
        setTimeout(()=>{
            onChange && onChange(page, page, this.setData(this.state.page))
        }, 10)
    }
    getPages (props) {
        props = props || this.props
        return Math.ceil(props.count/props.perpage)
    }
    handleChange (action, e) {
        var {onChange, perpage, data} = this.props
        var {page} = this.state
        var _page = page
        if( typeof action=='number' ){
            page = action
        }else{
            switch (action) {            
            case 'next':
                page++
                break
            case 'prev':
                page--
                break
            }
        }        
        onChange ? onChange(_page, page, this.setData(page)) : this.setData(page)
        e.preventDefault()        
    }
    setData (page) {
        page = page || this.state.page
        var {perpage, data} = this.props
        var start = (page-1)*perpage
        var end = start+perpage
        end = end >=data.length ? data.length : end
        this.setState({page:page, start:start, end:end})
        var _data = data.slice(start, start+perpage)
        return _data
    }
    renderBar () {
        var {page} = this.state
        var pages = this.getPages()
        var start
        var end
        var step = 3
        if( page<=step+1 ){
            start = 1
            end = step*2+1
        }else{
            var last = pages - page//当前页后面剩余的页数
            start = page - (last < step ? (step*2 - last) : step)
            end = page + step
        }
        start = start<1 ? 1 : start
        end = end>pages ? pages : end

        var getItem = (i)=><button type="button" className={(page==i?'active ':'')+'page-item'} onClick={this.handleChange.bind(this,i)}>{i}</button>

        var items = []
        for( var i=start; i<=end; i++ ){
            items.push(getItem(i))
        }

        //添加最前面2页
        var front_pages = []
        for( var i=1;i<4;i++ ){
            if(i==start) break;
            if( i==3 && start-i>1 ){
                front_pages.push(<button type="button" className="page-item page-none">...</button>)
            }else{
                front_pages.push(getItem(i))
            }            
        }
        items = front_pages.concat(items)

        //添加最后2页
        var end_pages = []
        for( var i=pages-2;i<=pages;i++ ){
            if( i<=end ) continue;
            if( i==pages-2 && i-end>1 ){
                end_pages.push(<button type="button" className="page-item page-none">...</button>)
            }else{
                end_pages.push(getItem(i))
            }            
        }
        items = items.concat(end_pages)

        return items
    }
    render () {
        var {count} = this.props
        var {page} = this.state
        var pages = this.getPages()//总页数

        return count && pages>1 ? (
            <div className={'nj-page '+this.props.className}>
                <button type="button" className="page-item" onClick={this.handleChange.bind(this,'prev')}>上一页</button> 
                {this.renderBar()}
                {page<pages ? <button type="button" className="page-item" onClick={this.handleChange.bind(this,'next')}>下一页</button> : null}
                <span className="page-item">共{count}条记录</span>
            </div>
        ) : null
    }
}

Page.defaultProps = {
    data : [],
    //每页个数
    perpage : 10
    //page : 1//当前页码
    //pages : 
    //count : //数据数量
}
Page.propTypes = {
    data : PropTypes.array,
    onChange : PropTypes.func
}

module.exports = Page