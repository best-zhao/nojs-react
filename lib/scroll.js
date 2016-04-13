/*
 * 无间断滚动
 */
var nj = require('./nojs-react')
var {React, ReactDOM, mixins} = nj
var $ = require('jquery')


var Scroll = React.createClass({
    getDefaultProps () {
        return {
            //滚动方向，默认纵向
            direction : 'y',
            children : []
        }
    },
    getInitialState () {
        var {children=[], step=1, time, repeat=true, auto=true} = this.props
        step = parseInt(step)
        var length = children.length
        return {
            children,
            length,
            step,//滚动步长，0为连续滚动
            time : time || (step?6000:30),//滚动速度，连续推荐设置40ms ;间断滚动时，该值为滚动的间隔时间
            repeat,//是否重复循环无间断
            auto,
            index : 0,
            size : {},
            totalLength : length,//总个数 包含追加
            scrollLength : 0//已滚动个数
        }
    },
    componentDidMount () {
        $(window).on('resize', ()=>{
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
        var {repeat, length, children, size} = this.state
        if( !repeat ){
            return;
        }
        var items = this.props.children
        var copy,
            //剩余一次可截取个数
            last = length - start,
            c;
          
        if( appendLength > last ){
            copy = items.slice(start);//从当前copy到结尾
            start = 0;
            appendLength = appendLength - copy.length;
        }
        c = items.slice(start, start+appendLength);
        if( copy ){
            Array.prototype.push.apply(copy,c)
        }else{
            copy = c
        }

        Array.prototype.push.apply(children, copy)
        
        this.state.totalLength = children.length;//追加后的总个数
        
        if( this.props.direction == 'x' ) {
            size.total = this.state.totalLength * size.item;
        }
        this.setState({size, children})
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
        var {computed, direction, step} = this.props
        var horizontal = direction == 'x'
        var wrap = $(this.refs.wrap)
        var content = $(this.refs.items)
        var item = $(this.refs.item0)
        
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
            // T.opt.onScrollEnd && T.opt.onScrollEnd.call(T);
        });
        
        // this.opt.onScroll && this.opt.onScroll.call(this, this.state.index);
    },
    render () {
        var {direction, computed} = this.props
        var horizontal = direction == 'x'
        var {size, children} = this.state
        var itemStyle = {display:'inline-block'}
        //适应多分辨率时 设置computed=true可以自动为this.item设置尺寸 因为css中无法设置
        if( computed ){
            var value;
            if( horizontal ){
                value = this.wrap.width();
                itemStyle.width = value
                itemStyle.height = value / computed
            }else{
                value = this.wrap.height();
                itemStyle.width = value * computed
                itemStyle.height = value
            }
        }
        return (
            <div ref="wrap" className="nj-scroll-wrap">
                <div ref="items" className="nj-scroll-items clearfix" style={direction=='x'?{width:size.total}:{}}>
                    {children.map((item,i)=>
                        <span className="nj-scroll-item clearfix" ref={'item'+i} key={i} style={itemStyle}>{item}</span>
                    )}
                </div>
            </div>
        )
    }
})
Scroll.PropTypes = {
    // children : React.Children.only
}

function getIndex(index, total){
    index = index<0 ? 0 : index;
    index  = index>total ? index % total : index;
    return index;
}

module.exports = Scroll;
