/*
 * 无间断滚动
 */
var nj = require('./nojs-react')
var {React, ReactDOM, mixins} = nj
var $ = require('jquery')
var Directive = require('../mixins/directiveComponent').default

var Scroll = React.createClass({
    mixins : [mixins.childComponents.config],
    getDefaultProps () {
        return {
            //滚动方向，默认纵向
            direction : 'y',
            children : []
        }
    },
    getInitialState () {
        var {step=1, time, repeat=true, auto=true} = this.props
        step = parseInt(step)
        return {            
            step,//滚动步长，0为连续滚动
            time : time || (step?6000:30),//滚动速度，连续推荐设置40ms ;间断滚动时，该值为滚动的间隔时间
            repeat,//是否重复循环无间断
            auto,

            index : 0,
            size : {},
            // totalLength : length,//总个数 包含追加
            scrollLength : 0//已滚动个数
        }
    },
    componentDidMount () {
        this.scrollEvent = nj.utils.addEventQueue.call(this, 'onScroll')
        this.scrollEndEvent = nj.utils.addEventQueue.call(this, 'onScrollEnd')

        directive.getChildComponents(this)

        this.props.computed && $(window).on('resize', ()=>{
            this.reset();
        })
        this.reset()
        var {length, view, step, size} = this.state
        // console.log(length,view)
        if( length <= view ) {
            return
        }
        var nextLast = length%view;
            
        //初始化的追加个数 保证next即可 
        //next所需:view-nextLast
        //step==0连续滚动时 拷贝view个即可
        nextLast && this.append(0, step ? view-nextLast : view);                
        
        if( this.props.direction == 'y' ) {
            size.total = $(this.refs.items).height();
        }
        this.start();
        
        $(this.refs.wrap).hover(()=>{
            this.stop();
        }, ()=>{
            this.start();
        });        
    },
    append (start, appendLength) {
        /*
         * 使用向后追加元素的方式来实现不间断滚动
         * 初始化追加一次 ；每次滚动完毕后追加
         */
        var {repeat, length, size, itemsComponent} = this.state
        if( !repeat ){
            return;
        }
        var {children, _children} = itemsComponent.props
        var copy,
            //剩余一次可截取个数
            last = length - start,
            c;
      
        //以html指令方式创建的组件 这里要手动append dom
        var doms = _children, domSlice = []

        if( appendLength > last ){
            copy = children.slice(start);//从当前copy到结尾
            if( doms ){
                children.forEach((n,i)=>{
                    i>=start && domSlice.push(i)
                })
            }
            start = 0;
            appendLength = appendLength - copy.length;
            
        }
        c = children.slice(start, start+appendLength);
        if( doms ){
            children.forEach((n,i)=>{
                i>=start && i<start+appendLength && domSlice.push(i)
            })
        }
        if( copy ){
            Array.prototype.push.apply(copy,c)
        }else{
            copy = c
        }

        var _totalLength = this.state.totalLength //添加之前的个数

        Array.prototype.push.apply(children, copy)
        
        this.state.totalLength = children.length;//追加后的总个数
        
        if( this.props.direction == 'x' ) {
            size.total = this.state.totalLength * size.item;
        }
        this.setState({size})
        itemsComponent.setState({children}, (a)=>{
            if( doms ){
                domSlice.forEach(n=>{
                    itemsComponent.refs['item'+_totalLength].appendChild(doms[n].cloneNode(true))
                    _totalLength++                    
                })
            }
        })
    },
    start () {
        var {auto, length, view, time} = this.state
        // console.log(length,auto,view)
        if (auto && length>view ) {
            clearInterval(this.delay);
            this.delay = setInterval(()=>{
                this.scroll();
            }, time);
        }
    },
    stop () {
        this.delay = clearInterval(this.delay);
    },
    reset () {
        // var {childComponents} = this.state
        var {computed, direction, step} = this.props
        var itemsComponent = this.state.itemsComponent
        var horizontal = direction == 'x'
        var wrap = $(this.refs.wrap)
        var content = $(this.refs.items)
        var item = $(itemsComponent.refs.item0)
        
        var size = this.state.size = {
            box : horizontal ? wrap.width() : wrap.height(),//容器尺寸
            total : horizontal ? null : content.height(),//内容总尺寸
            item : horizontal ? item.outerWidth(true) : item.outerHeight(true)//单项尺寸
        }
        if( horizontal ) {
            size.total = this.state.totalLength * size.item;
            // this.con.width(this.state.size.total);
        }
        this.state.view = Math.ceil(size.box/size.item);
        if( step=='view' ){
            this.state.step = this.state.view;
        }
        this.setState({size})
        // console.log(this.state,size)
    },
    scroll (next) {
        /*
         * next 
         * boolean: 向前/后滚动 控制方向
         * number: 索引值 直接滚动到某一张 （弱repeat=true 改索引是相对追加之前的）
         */
        var index;
        if( typeof next=='number' ){
            index = getIndex(next, this.len);
        }else{
            next = next===false ? false : true;
        }
        var wrap = $(this.refs.wrap)
        var {size, step, scrollLength, totalLength, length, view} = this.state
        var {direction} = this.props
        
        //if( this.wrap.is(":animated") ) { return;}
        wrap.stop();

        var isExist = nj.utils.elementInDOM(ReactDOM.findDOMNode(this)) //组件是否被移除
        if( !isExist ){
            this.stop()
            wrap.stop();
            return
        }
        
        var T = this,
            m, speed = 0,
            //每次滚动距离，连续-每次增加1px，间隔-每次增加n个元素的宽高
            //计算最大滚动差
            max = size.total - size.box,
            scrollAttr = direction == 'x' ? 'scrollLeft' : 'scrollTop',
            attr = {},
            now = wrap[scrollAttr](),
            nowScroll,
            ratio = next ? 1 : -1;
        
        if ( step == 0 ) {
            m = 1;
        } else {
            m = step * size.item;
            speed = 800;
        }
        
        if( step ){
            m = ratio * m;
            
            //不足prev时 向后跳转this.len的个数
            if( !next && scrollLength<step && typeof index=='undefined' ){
                var prevLast = totalLength - (scrollLength+length);
                // console.log(prevLast, view)
                if( prevLast < view ){
                    this.append(totalLength%length, view-prevLast);
                    // scrollLength = this.state.scrollLength
                }
                wrap[scrollAttr](wrap[scrollAttr]()+size.item*length);
                scrollLength += length;
            }
            
            scrollLength += ratio * step;
            
        }else{
            //连续滚动
            scrollLength = Math.floor(now/size.item);
        }
        this.state.index = scrollLength % length;//当前开始index

        if( typeof index=='undefined' ){
            attr[scrollAttr] = '+='+m;
            this.state[scrollAttr] = nowScroll = now + ratio * m;
        }else{
            scrollLength = index;
            this.state.index = index;
            attr[scrollAttr] = this.state[scrollAttr] = nowScroll = now = size.item * index;
        }
        this.state.scrollLength = scrollLength
        this.state.endIndex = getIndex(this.state.index+view-1, length);//当前结束index
        
        wrap.animate(attr, speed, ()=>{
            if( nowScroll >= length * size.item ){
                //滚动过得距离超过总长度  则向前跳转一次
                var newPos = step ? size.item*this.state.index : 0;
                wrap[scrollAttr](newPos);
                scrollLength = this.state.scrollLength = this.state.index = step ? this.state.index : newPos;
                //T.step==0 && T.scroll();
            }
            var last = totalLength - scrollLength - view;
            if( last < view ){//需再次追加 此处step=0不会存在
                this.append(getIndex(this.state.endIndex+last+1, length), view-last);
            }
            this.scrollEndEvent.complete()
        });
        // this.setState({index:this.state.index})
        this.state.childComponents.forEach((c)=>{
            c.forceUpdate()
        })
        this.scrollEvent.complete(this.state.index)
    },   
    render () {
        var {direction,  className, children} = this.props        
        var {size} = this.state
        className = nj.utils.joinClass('nj-scroll', className)
        return (
        <div className={className}>
            <div ref="wrap" className="nj-scroll-wrap">
                <div ref="items" className="nj-scroll-items clearfix" style={direction=='x'?{width:size.total}:{}}>
                    {children}
                </div>
            </div>
        </div>
        )
    }
})
Scroll.PropTypes = {
    step : React.PropTypes.number,
    time : React.PropTypes.number
}

var ScrollItems = React.createClass({
    mixins : [mixins.childComponents.setParents([Scroll])],
    statics : {test:111},
    getInitialState () {
        return {aa:1}
    },
    componentDidMount () {
        directive.getChildComponents(this)

        var {parentComponent} = this.state
        parentComponent.state.totalLength = parentComponent.state.length = this.props.children.length
        //父组件中通过itemsComponent来调用
        parentComponent.state.itemsComponent = this
    },
    render () {
        var {parentComponent} = this.state
        // if( !parentComponent ){
        //     console.log(1)
        //     return null
        // }
        var {direction, computed} = parentComponent.props
        var horizontal = direction == 'x'
        var itemStyle = {display:horizontal?'inline-block':'block'}
        //适应多分辨率时 设置computed=true可以自动为this.item设置尺寸 因为css中无法设置
        if( computed ){
            var value;
            if( horizontal ){
                value = parentComponent.wrap.width();
                itemStyle.width = value
                itemStyle.height = value / computed
            }else{
                value = parentComponent.wrap.height();
                itemStyle.width = value * computed
                itemStyle.height = value
            }
        }
        var {children, _children} = this.props
        return (
        <div>
            {children.map((item,i)=>
                <span className="nj-scroll-item clearfix" ref={'item'+i} key={i} style={itemStyle}>{item}</span>
            )}
        </div>
        )
    }
})

var ScrollPage = React.createClass({
    mixins : [mixins.childComponents.setParents([Scroll])],
    getDefaultProps () {
        return {pages:0}
    },
    handleClick (index) {
        var {parentComponent} = this.state
        parentComponent.stop()
        parentComponent.scroll(index)
    },
    componentDidMount () {
        var {parentComponent} = this.state
        parentComponent.onScrollEnd(()=>{
            parentComponent.start()
        })
    },
    render () {
        var {parentComponent} = this.state
        var {length, index} = parentComponent.state
        var items = []
        for( var i=0; i<length; i++ ){
            items.push(i+1)
        }
        return (
        <div className="nj-scroll-page">
            {items.map(n=>{
                var className = nj.utils.joinClass('-page-item', n-1==index&&'-page-active')
                return <span onClick={this.handleClick.bind(this,n-1)} className={className} key={n}>{n}</span>
            })}
        </div>
        )
    }
})
ScrollPage.PropTypes = {
    pages : React.PropTypes.number
}

function getIndex(index, total){
    index = index<0 ? 0 : index;
    index  = index>total ? index % total : index;
    return index;
}

var directive = new Directive({
    elementGroups : {
        'scroll' : {
            children : ['scroll-items', 'scroll-page'], 
            component : Scroll,
            wrapItem : component=>component.refs.items
        },
        'scroll-items' : {
            component:ScrollItems, 
            wrapItem : (component,element,i)=>component.refs['item'+i]
        },
        'scroll-page' : {component:ScrollPage}
    },   
    // wrap : component=>ReactDOM.findDOMNode(component),
    exports : exports
})

