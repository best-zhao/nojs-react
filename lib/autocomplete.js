/**
 * auto-complete
 */
var nj = require('./nojs-react')
var {React, ReactDOM, mixins, utils, Mui} = nj
var $ = require('jquery')
var Popover = require('./popover')
var fetch = require('isomorphic-fetch')

var Autocomplete = module.exports = React.createClass({
    getDefaultProps () {
        return {getItem : item=>String(item), disableEnter:false, max:20}
    },
    getInitialState () {        
        return {
            results : this.props.results || [],
            //缓存远程数据
            cache : {},
            value : this.props.value || ''
        }
    },
    keyup (e) {
        var key = e.keyCode, value = e.target.value, delay;
        // 有效输入键
        // [8 : backspace] [32 : space] [46: delete]
        if( key==8 || key==32 || key==46         
            || key==229                // 中文键或全角 部分可输入字符
            || (key>47 && key<58)     // [48-57 : 0-9]
            || (key>64 && key<91)     // [65-90 : a-z]
            || (key>95 && key<112)    // [96-111 : 小键盘]
            || (key>185 && key<193)   // [186-192 : ;=<->/`]
            || (key>218 && key<223)   // [219-222 : [\]' ]
        ){
            clearTimeout(delay);
            // T.showBox('hide');
            delay = setTimeout(()=>{
                this.filter(value);
                // T.onKeyup && T.onKeyup.call(T,T.state);
            }, 100)
        }
    },
    keydown (e) {
        var key = e.keyCode
        switch(key){
            case 13://enter
                this.move('enter');
                if( this.props.disableEnter ){//阻止触发表单事件 
                    e.preventDefault()                    
                }
                break;                
            case 38://up
                this.move("up");
                break;
            case 40://down
                this.move("down");
                break;
        }
    },
    //移动鼠标选中结果项
    move (direction) {
        var {index, results} = this.state
        var length = results.length
        index = typeof index=='number' ? index : -1

        if( direction=='enter' ){            
            index>=0 && this.select(index, 'enter')
            return
        }
        
        if( direction=='up' ){
            index = index<=0 ? length-1 : --index
        }else if( direction=='down' ){
            index = index>=length-1 ? 0 : ++index
        }
        var item = this.state.results[index], value
        value = item ? this.props.getItem(item) : this.state.value
        this.setState({index, value})
    },
    select (index, type, e) {
        var item = this.state.results[index]
        if( !item ){
            return
        }
        var value = this.props.getItem(item)
        
        this.state.value = value
        this.state.index = index

        this.setState({value, index})  
        this.chooseEvent.complete(item, type==='enter')
        type=='click' && this.refs.input.focus() 
        window.setTimeout(e=>this.setDisplay(false), 240)
    },
    componentDidMount () {
        var {results} = this.state//默认传入的results
        if(results){
            this.forceUpdate(()=>{
                //var {container} = this.refs                
            })            
        }
        this.fetchEvent = utils.addEventQueue.call(this, 'onFetch')
        this.fetchCompleteEvent = utils.addEventQueue.call(this, 'onFetchComplete')
        this.chooseEvent = utils.addEventQueue.call(this, 'onChoose')
        this.completeEvent = utils.addEventQueue.call(this, 'onComplete')

    },
    componentDidUpdate () {
        var {input, container} = this.refs
        
        if( container && !container._init_ ){
            container._init_ = true
            container.onShow(e=>{
                $(container.wrap).width($(input).outerWidth())                
            }).onDisplayChange(visible=>{
                var {results} = this.state
                if( visible && !results.length ){//没有结果 阻止显示
                    return false
                }
            })
        }
    },
    setDisplay (display) {
        var container = this.refs.container
        container && container.setDisplay(display)
    },
    filter (value) {
        var container = this.refs.container
        if( !value ){
            var results = this.props.results || []
            this.setState({results})
            this.setDisplay(results.length?true:false)
            return
        }
        var {data, source, getItem, max} = this.props

        var done = results => {
            results = results.slice(0,max)
            this.setState({results, index:null})
            this.setDisplay(true)
            this.completeEvent.complete(results)
        }

        if( data ){
            var results = data.filter(item=>{
                return getItem(item).indexOf(value)>=0
            })
            done(results)

        }else if( source ){//remote fetch
            var {cache} = this.state
            var _data = cache[source+value]

            if( _data ){
                done(_data)
                return
            }
            var promise = fetch(source+value, {
                credentials: 'include',
                headers : {'X-Requested-With':'XMLHttpRequest'}
            }).then(res=>res.json())

            promise = this.fetchEvent.complete(promise, value) || promise

            promise.then(json=>{
                json = this.fetchCompleteEvent.complete(json) || json || []
                cache[source+value] = json
                done(json)
            })
        }
    },
    change (e) {
        this.setState({value:e.target.value})
        e.stopPropagation()//onChange事件会影响到父组件 阻止冒泡
    },
    render () {

        var {container, getItem, name} = this.props
        var {index, value, results} = this.state
        var {input} = this.refs
        
        if( !container ){
            var list = <ul>{
                results.map((item,i)=>{
                    item = getItem(item)
                    return <li key={item} onClick={this.select.bind(this,i,'click')} className={i===index?'active nj-mui-active':''}><Mui>{item}</Mui></li>
                })
            }</ul>
        }
        return (
        <span>
            <input {...this.props} 
                ref="input" 
                value={value} 
                onChange={this.change} 
                onKeyDown={this.keydown} 
                onKeyUp={this.keyup} />

            {!container && input && 
                <Popover 
                    nearby={input} 
                    trigger="click"
                    ref="container" 
                    name={'auto-complete-pop auto-complete-'+name}
                    template={list} />
            }
        </span>
        )
    }
})