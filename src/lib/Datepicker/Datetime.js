import {React, render, utils, Mui} from '../nojs-react'
import {getMonthData, getNearMonth, parseNumber, getTimestamp, today} from './utils'
import '../../../css/datepicker.css'

const {dateParse, joinClass, tmpl, addEventQueue} = utils

class Datetime extends React.Component {
    constructor(props) {
        super(props)
        let {value='', min, max, months, mode, format, weeks, startWeekIndex, multiple} = this.props
        min = min && getMonthData(min, {startWeekIndex})
        max = max && getMonthData(max, {startWeekIndex})

        let hasDate = /^date/.test(mode)//允许选择日期
        let hasTime = /time$/.test(mode)//允许选择时间
        
        let currentMonth
        let multiDates = [];
        if( mode=='time' ){
            let _times = value.match(/\b\d+\b/g) || [0, 0, 0]
            currentMonth = [Object.assign({
                hours:parseInt(_times[0]), 
                minutes:parseInt(_times[1]),
                seconds:parseInt(_times[2])
            }, today)]
        }else{
            let startMonth = min && !value ? {year:min.year, month:min.month} : value.split(',')[0]
            currentMonth = this.getMonthGroups(startMonth)
            if( value ){
                multiDates = value.split(',').map(item=>{
                    let {year, month, date} = getMonthData(item)
                    return {year, month, date}
                })
            }
        }

        if( min ){
            min = {
                date : getTimestamp(min),
                hours : getTimestamp(min, 4),
                minutes : getTimestamp(min, 5),
                seconds : getTimestamp(min, 6)
            }
        }
        if( max ){
            max = {
                date : getTimestamp(max),
                hours : getTimestamp(max, 4),
                minutes : getTimestamp(max, 5),
                seconds : getTimestamp(max, 6)
            }
        }

        //设置默认format
        let _format = format
        if( !format ){
            switch(mode){
            case 'date':
                _format = 'yy-mm-dd'
                break
            case 'time':
                _format = 'hh:mm:ss'
                break
            default:
                _format = 'yy-mm-dd hh:mm:ss'
            }
        }

        //根据startWeekIndex来重新排序星期显示
        let _weeks = [].concat(weeks)
        if( startWeekIndex>0 ){
            for( let i=0; i<startWeekIndex; i++ ){
                _weeks.push(_weeks.shift())
            }
        }

        
        let {year, month, date, hours, minutes, seconds} = currentMonth[0]
        let day = date && new Date(year, month-1, date).getDay()
        let currentDate = mode=='time' ? today : (value && {year, month, date, day})

        this.state = {
            currentMonth,
            value, min, max,
            hours, minutes, seconds,
            format : _format, 
            weeks : _weeks,           
            hasDate,  hasTime,
            //当前所选 默认今天 {year, month, date}
            currentDate, 
            //存放多选的日期 
            multiDates,
            hoursItems : Array.prototype.concat.apply([], new Array(24)),
            minutesItems : Array.prototype.concat.apply([], new Array(60)),
            secondsItems : Array.prototype.concat.apply([], new Array(60))
        }

    }   
    componentDidMount () {
        let {months, onReady, style} = this.props
        let {group, groups} = this.refs

        onReady && onReady.call(this)

        this.changeGroupEvents = addEventQueue.call(this, 'onChangeGroup')

        if( !groups || style=='flat' ){
            return
        }
        let groupsWidth = months*group.offsetWidth
        let groupHeight = group.offsetHeight
        groups.style.width = groupsWidth+'px'
        groups.style.height = groupHeight+'px'


    }    
    getMonthGroups (startMonth) {
        let {startWeekIndex} = this.props
        let currentMonth = [getMonthData(startMonth, {startWeekIndex})]
        for( let i=1;i<this.props.months;i++ ){
            let nowMonth = currentMonth[i-1];
            let nextMonth = getNearMonth({
                year : nowMonth.year, 
                month : nowMonth.month, 
                step : 1
            })
            currentMonth.push(getMonthData(nextMonth, {startWeekIndex}))
        }
        return currentMonth
    }
    //跳转月份
    jumpTo (step) {
        let {currentMonth:_currentMonth, animated, nextMonths} = this.state

        //未完成的动画
        if( animated ){
            this.state.animated = clearTimeout(animated)
            _currentMonth = nextMonths || _currentMonth
        }
        
        let {year, month} = _currentMonth[0]
        let startMonth = getNearMonth({year, month, step})
        nextMonths = this.getMonthGroups(startMonth)

        if( this.props.disableAnimation ){
            this.setState({currentMonth: nextMonths})
            return
        }

        let currentMonth = step>0 ? _currentMonth.concat(nextMonths) : nextMonths.concat(_currentMonth)
        
        this.setState({
            //保留了之前的数据
            currentMonth,
            //真实的月份
            nextMonths,
            // animate:true,
            //step>0月份增加 动画方向向左
            direction : step>0 ? 'left' : 'right'
        })

        setTimeout(e=>{
            this.setState({animate:true})
        }, 10)


        //动画完毕后还原数据
        this.state.animated = setTimeout(e=>{
            this.setState({
                currentMonth : this.state.nextMonths,
                nextMonths : null,
                direction : null,
                animate : null,
                animated : null
            })
        }, 400)

        this.changeGroupEvents.complete(nextMonths)
    }
    componentWillUnmount () {
        // console.log(21, this)
        this.state.animated = clearTimeout(this.state.animated)
    }
    changeDate ({year, month, date, day, current, prevMonth}, type) {
        let {hours, minutes, seconds, hasDate, hasTime, format, hoursItems, minutesItems, secondsItems, min, max, multiDates} = this.state
        if( hasDate && !date ){//没有选择天
            return
        }
        if( !current ){//选择的日期是相邻的月份
            this.jumpTo(prevMonth?-1:1)
        }

        let {multiple} = this.props
        
        let currentDate = {year, month, date, day}

        if( multiple ){
            //选中日期的时间戳
            let currentTimestamp = getTimestamp(currentDate, 3)
            let isadd = true
            for( let i in multiDates ){
                let timestamp = getTimestamp(multiDates[i], 3)
                if( timestamp==currentTimestamp ){//存在相同的 则取消选中
                    isadd = false
                    multiDates.splice(i, 1)
                    break;
                }
            }
            isadd && multiDates.push(currentDate)
        }

        /**
         * 重置时间选择 当设置了min选项时
         * 如 min='2017-05-31 09:00:00' 当选择了下月某天的8点后 再切换到5月31时 时间会自动切到9点
         * 因为这一天9点之前不能被选中
         */
        if( (min||max) && hasTime ){
            hoursItems.map((h,i)=>{
                let d = Object.assign({}, currentDate, {hours:i})
                let timestamp = getTimestamp(d, 4)
                let disabled = this.checkDisabled(timestamp, 'hours')

                if( disabled && hours==i ){//当前选中的被禁用
                    hours=undefined
                }
                hoursItems[i] = disabled ? -1 : i
            })
            let resetHour
            if( hours==undefined ){
                resetHour = true
                hours = hoursItems.filter(h=>h>=0)[0]
                this.setState({hours})
            }

            let resetMinute
            minutesItems.map((h,i)=>{
                let d = Object.assign({}, currentDate, {hours, minutes:i})
                let timestamp = getTimestamp(d, 5)
                let disabled = this.checkDisabled(timestamp, 'minutes')

                if( disabled && minutes==i ){//当前选中的被禁用
                    minutes=undefined
                }
                minutesItems[i] = disabled ? -1 : i
            })
            // console.log(hours, minutes, resetHour)
            if( minutes==undefined || resetHour ){//当hours重置后 minutes也需重置
                resetMinute = true
                minutes = minutesItems.filter(h=>h>=0)[0]
                this.setState({minutes})
            }

            secondsItems.map((h,i)=>{
                let d = Object.assign({}, currentDate, {hours, minutes, seconds:i})
                let timestamp = getTimestamp(d, 6)
                let disabled = this.checkDisabled(timestamp, 'seconds')

                if( disabled && seconds==i ){//当前选中的被禁用
                    seconds=undefined
                }
                secondsItems[i] = disabled ? -1 : i
            })
            if( seconds==undefined || resetMinute ){//当minutes重置后 seconds也需重置
                seconds = secondsItems.filter(h=>h>=0)[0]
                this.setState({seconds})
            }
        }  


        let value = dateParse({
            date : [year, month, date].join('/')+' '+[hours||0, minutes||0, seconds||0].join(':'),
            format
        })
        // console.log(value, format, year, month, date, hours, minutes, seconds)

        if( multiple ){
            value = multiDates.map(date=>dateParse({
                date : [date.year, date.month, date.date].join('/'),
                format
            })).join(',')
        }

        this.setState({currentDate, value}, ()=>this.submit(type))
    }
    submit (type) {
        let {onChange} = this.props
        let {hours, minutes, currentDate, value, hasTime} = this.state
        
        //没有选中日期时 点击确定默认为今天
        if( !currentDate || !value ){
            this.setNow()
            return
        }
        let data = Object.assign({hours, minutes, type}, currentDate)
        let dataStr = {}
        for( let i in data ){
            dataStr[i+'_str'] = parseNumber(data[i])
        }
        let timestamp = getTimestamp(data, 6)  
        Object.assign(data, dataStr)

        // this.changeDateEvents.complete(value, data, timestamp)     

        onChange && onChange.call(this, value, data, timestamp)
    }
    setNow () {
        let {min, max} = this.state
        let todayDisabled//检测今天是否可选
        let _date = new Date()
        let now = _date.getTime()

        if( min ){
            todayDisabled = now<min.seconds
        }
        if( !todayDisabled && max ){
            todayDisabled = now>max.seconds
        }
        if( todayDisabled ){
            return
        }
        let hours = _date.getHours()
        let minutes = _date.getMinutes()
        let seconds = _date.getSeconds()
        
        this.setState({hours, minutes, seconds}, ()=>{
            this.changeDate(Object.assign({}, today, {
                current : true
            }), 'now')
        })
        
    }
    changeTime(key, e){
        this.state[key] = parseInt(e.target.value)
        this.changeDate(Object.assign({current:true}, this.state.currentDate), key)
    }    
    checkDisabled (data, key) {
        let {min, max} = this.state
        let disabled

        if( min ){
            disabled = data<min[key]
        }
        if( !disabled && max ){//若min没禁用 再判断max
            disabled = data>max[key]
        }
        return disabled
    }
    getWeekStr (day) {
        let {weeks} = this.props
        return weeks[day] ? '星期'+weeks[day] : ''
    }
    render () {
        let {months, mode, disableAnimation, multiple, showSide, style, change_disabled, switch_year, switch_month} = this.props
        let {
            weeks, direction, animate,
            hours, minutes, seconds,
            hasDate, hasTime,
            hoursItems, minutesItems, secondsItems,
            currentMonth, currentDate={}, multiDates         
        } = this.state

        let currentTimestamp = getTimestamp(currentDate, 3)
        //检查是否为当前选中日期
        const checkCurrentDate = (item,i)=>{
            if( !item.current ) return false;
            let _current = item.timestamp==currentTimestamp
            if( multiple ){
                _current = multiDates.filter(date=>getTimestamp(date, 3)==item.timestamp).length
            }
            return _current
        }
        
        let weekEl = <ul className="clearfix _weeks">{
            weeks.map((item,i)=><li key={i}>{item}</li>)
        }</ul>

        if( hasTime ){
            hoursItems = hoursItems.map((h,i)=>{
                let disabled 
                if( currentDate.date ){
                    let d = Object.assign({}, currentDate, {hours:i})
                    let timestamp = getTimestamp(d, 4)
                    disabled = this.checkDisabled(timestamp, 'hours')                    
                }
                return <option disabled={disabled} key={i} value={i}>{parseNumber(i)}</option>
            })

            minutesItems = minutesItems.map((h,i)=>{
                let disabled 
                if( currentDate.date ){
                    let d = Object.assign({}, currentDate, {hours, minutes:i})
                    let timestamp = getTimestamp(d, 5)
                    disabled = this.checkDisabled(timestamp, 'minutes')                    
                } 
                return <option disabled={disabled} key={i} value={i}>{parseNumber(i)}</option>
            })

            secondsItems = secondsItems.map((h,i)=>{
                let disabled 
                if( currentDate.date ){
                    let d = Object.assign({}, currentDate, {hours, minutes, seconds:i})
                    let timestamp = getTimestamp(d, 6)
                    disabled = this.checkDisabled(timestamp, 'seconds')                    
                } 
                return <option disabled={disabled} key={i} value={i}>{parseNumber(i)}</option>
            })
        }

        const dateItem = (item,i)=>{
            let disabled = this.checkDisabled(item.timestamp, 'date')
            let className = joinClass(
                'date-item',
                checkCurrentDate(item, i) && 'active',
                !item.current && 'gray',
                disabled && 'disabled',
                item.isToday && 'today'
            )
            let {template} = this.props
            template = typeof template=='function' ? template(item) : template

            if( typeof template=='string' ){
                template = tmpl(/^[\w-]+$/.test(template) ? document.getElementById(template).innerHTML : template , {item:item})
                template = <span className="date" dangerouslySetInnerHTML={{__html:template}}></span>

            }else{
                template = template || item.date
                template = <span className="date">{template}</span>
            }
            // console.log(item)
            return <button data-mode={style=='pop'?'circle':'rect'} type="button" disabled={change_disabled||disabled}
                key={[item.year, item.month, item.date].join('')}
                onClick={this.changeDate.bind(this, item, 'date')}
                className={className}
            >   
                {template}
            </button>
        }

        const groupItem = (item,i)=>{
            let {year, month, dates} = item
            return <div className="_group" key={[year,month,i].join('-')} ref="group">
                <div className="_head clearfix" key="_head">
                    {year}年 {parseNumber(month)}月
                </div>
                {weekEl}
                <div className="_dates clearfix">{dates.map(item=>dateItem(item, i))}</div>
            </div>
        }

        const groupClass = joinClass(
            !disableAnimation && 'animate-groups', 
            direction && 'animate-'+direction, 
            animate && 'animate-'+direction+'-active'
        )

        let {year, month, date, day} = multiple ? today : (currentDate || today);

        return <div className={joinClass('nj-datepicker nj-datepicker-'+mode, showSide&&'show-side', 'nj-datepicker-'+style)}>
            {hasDate && showSide ? 
            <div className="pop-side">
                <div className="year gray">{year}-{parseNumber(month)}</div>
                <span className="date">{parseNumber(date)}</span>
                <div className="mb30">{this.getWeekStr(day)}</div>
                {hasTime?
                <div className="gray">{parseNumber(hours)}:{parseNumber(minutes)}:00</div>
                :null}
                <button onClick={this.setNow.bind(this)} className="nj-button nj-button-flat set-now">现在</button>
            </div>
            :null}

            <div className="pop-main">
            
                {hasDate ? 
                <div className="_page">
                    <span className="_item">
                        {switch_year&&<Mui mode="circle" onClick={this.jumpTo.bind(this, -12)} className="nj-icon nj-icon-left2"></Mui>}
                        {switch_month&&<Mui mode="circle" onClick={this.jumpTo.bind(this, -months)} className="nj-icon nj-icon-left"></Mui>}
                    </span>
                    <span className="_item">
                        {switch_month&&<Mui mode="circle" onClick={this.jumpTo.bind(this, months)} className="nj-icon nj-icon-right"></Mui>}
                        {switch_year&&<Mui mode="circle" onClick={this.jumpTo.bind(this, 12)} className="nj-icon nj-icon-right2"></Mui>}
                    </span>
                </div> 
                : null}

                {hasDate ? 
                <div className="_groups clearfix" ref="groups">
                    <div className={groupClass}>
                        {currentMonth.map(groupItem)}
                    </div>
                </div>
                : null}
                
                {hasTime ? 
                <div className="_times">时间：
                    <select 
                        value={hours} 
                        // disabled={hasDate&&!currentDate.date}
                        onChange={this.changeTime.bind(this, 'hours')}
                    >
                        {hoursItems}
                    </select> : 

                    <select 
                        value={minutes} 
                        // disabled={hasDate&&!currentDate.date}
                        onChange={this.changeTime.bind(this, 'minutes')}
                    >
                        {minutesItems}
                    </select>

                    <select 
                        value={seconds} 
                        // disabled={hasDate&&!currentDate.date}
                        onChange={this.changeTime.bind(this, 'seconds')}
                    >
                        {secondsItems}
                    </select>
                </div>
                : null}
            </div>
        </div>
    }
}

Datetime.defaultProps = {
    mode : 'datetime',
    //显示的月份数
    months : 1,
    // format : 'yy-mm-dd hh:mm:ss',
    weeks : ['日', '一', '二', '三', '四', '五', '六'],
    //周一排在第一列 索引以weeks的排序为准
    startWeekIndex : 1,
    showSide : true,
    //展示方式 pop flat
    style : 'pop',
    switch_year : true,
    switch_month : true,
}

module.exports =  Datetime