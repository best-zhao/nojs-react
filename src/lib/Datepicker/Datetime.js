import {React, render, utils, Mui} from '../nojs-react'
import {getMonthData, getNearMonth, parseNumber, getTimestamp, today} from './utils'
import '../../../css/datepicker.css'

const {dateParse, joinClass} = utils

class Datetime extends React.Component {
    constructor(props) {
        super(props)
        let {value, min, max, months, mode, format} = this.props
        min = min && getMonthData(min)
        max = max && getMonthData(max)

        let hasDate = /^date/.test(mode)//允许选择日期
        let hasTime = /time$/.test(mode)//允许选择时间
        
        let currentMonth
        if( mode=='time' ){
            let _times = value.match(/\b\d+\b/g) || [0, 0]
            currentMonth = [Object.assign({hours:parseInt(_times[0]), minutes:parseInt(_times[1])}, today)]
        }else{
            let startMonth = min && !value ? {year:min.year, month:min.month} : value
            currentMonth = this.getMonthGroups(startMonth)
        }

        if( min ){
            min = {
                date : getTimestamp(min),
                hours : getTimestamp(min, 4),
                minutes : getTimestamp(min, 5)
            }
        }
        if( max ){
            max = {
                date : getTimestamp(max),
                hours : getTimestamp(max, 4),
                minutes : getTimestamp(max, 5)
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
        
        let {year, month, date, hours, minutes} = currentMonth[0]
        this.state = {
            currentMonth,
            value, min, max,
            hours, minutes,
            format : _format,            
            hasDate,  hasTime,
            //当前所选 默认今天 {year, month, date}
            currentDate : mode=='time' ? today : (value && {year, month, date}),            
            hoursItems : Array.prototype.concat.apply([], new Array(24)),
            minutesItems : Array.prototype.concat.apply([], new Array(60))
        }
    }   
    componentDidMount () {
        let {months} = this.props
        let {group, groups} = this.refs
        if( !groups ){
            return
        }
        let groupsWidth = months*group.offsetWidth
        let groupHeight = group.offsetHeight
        groups.style.width = groupsWidth+'px'
        groups.style.height = groupHeight+'px'
    }    
    getMonthGroups (startMonth) {
        let currentMonth = [getMonthData(startMonth)]
        for( let i=1;i<this.props.months;i++ ){
            let nowMonth = currentMonth[i-1];
            let nextMonth = getNearMonth({
                year : nowMonth.year, 
                month : nowMonth.month, 
                step : 1
            })
            currentMonth.push(getMonthData(nextMonth))
        }
        return currentMonth
    }
    //跳转月份
    jumpTo (step) {
        let {currentMonth:_currentMonth, animated, nextMonths} = this.state

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

        this.state.animated = setTimeout(e=>{
            this.setState({
                currentMonth : this.state.nextMonths,
                nextMonths : null,
                direction : null,
                animate : null,
                animated : null
            })
        }, 400)
    }
    changeDate ({year, month, date, day, current, prevMonth}) {
        let {hours, minutes, hasDate, hasTime, format, hoursItems, minutesItems, min} = this.state
        if( hasDate && !date ){//没有选择天
            return
        }
        let {onChange, mode} = this.props
        if( !current ){//选择的日期是相邻的月份
            this.jumpTo(prevMonth?-1:1)
        }
        
        let currentDate = {year, month, date, day}

        if( min && hasTime ){
            hoursItems.map((h,i)=>{
                let d = Object.assign({}, currentDate, {hours:i})
                let timestamp = getTimestamp(d, 4)
                let disabled = this.checkDisabled(timestamp, 'hours')

                if( disabled && hours==i ){//当前选中的被禁用
                    hours=undefined
                }
                if( hours==undefined && !disabled ){
                    hours = i
                    this.setState({hours})
                }
            })
            minutesItems.map((h,i)=>{
                let d = Object.assign({}, currentDate, {hours, minutes:i})
                let timestamp = getTimestamp(d, 5)
                let disabled = this.checkDisabled(timestamp, 'minutes')

                if( disabled && minutes==i ){//当前选中的被禁用
                    minutes=undefined
                }
                if( minutes==undefined && !disabled ){
                    minutes = i
                    this.setState({minutes})
                }
            })
        }  

        let value = dateParse({
            date : [year, month, date].join('-')+' '+[hours, minutes].join(':'),
            format
        })

        this.setState({currentDate, value}, ()=>{
            let data = Object.assign({hours, minutes}, currentDate)
            let timestamp = getTimestamp(data, 6)
            onChange && onChange.call(this, value, data, timestamp)
        })     
    }
    changeTime(key, e){
        this.state[key] = parseInt(e.target.value)
        this.changeDate(Object.assign({current:true}, this.state.currentDate))
        // this.setState(
        //     {[key] : parseInt(e.target.value)}, 
        //     ()=>this.changeDate(Object.assign({current:true}, this.state.currentDate))
        // )
    }    
    checkDisabled (data, key) {
        let {min, max} = this.state
        let disabled
        if( min ){
            disabled = data<min[key]
        }
        if( max ){
            disabled = data>max[key]
        }
        return disabled
    }
    render () {
        let {weeks, months} = this.props
        let {
            direction, animate,
            min, max,
            hours, minutes, 
            hasDate, hasTime,
            hoursItems, minutesItems, 
            currentMonth, currentDate={}           
        } = this.state
        
        let _years = currentMonth.map(item=>item.year)
        let _months = currentMonth.map(item=>item.month)

        //检查是否为当前选中日期
        const checkCurrentDate = (item,i)=>{
            return currentDate.date==item.date 
                && currentDate.month==item.month
                && _months[i]==item.month
                && currentDate.year==item.year
                && _years[i]==item.year
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
        }

        const dateItem = (item,i)=>{
            let disabled = this.checkDisabled(item.timestamp, 'date')
            let className = joinClass(
                'date-item',
                !disabled && checkCurrentDate(item, i) && 'active',
                !item.current && 'gray',
                disabled && 'disabled',
                item.isToday && 'today'
            )
            return <button data-mode="circle" type="button" disabled={disabled}
                key={[item.year, item.month, item.date].join('')}
                onClick={this.changeDate.bind(this, item)}
                className={className}
            >
                <span className="date">{item.date}</span>
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
            animate && 'animate-groups', 
            direction && 'animate-'+direction, 
            animate && 'animate-'+direction+'-active'
        )

        return <div className="nj-datepicker">
            {hasDate ? 
            <div className="_page">
                <span className="_item">
                    <Mui mode="circle" onClick={this.jumpTo.bind(this, -12)} className="nj-icon nj-icon-left2"></Mui>
                    <Mui mode="circle" onClick={this.jumpTo.bind(this, -months)} className="nj-icon nj-icon-left"></Mui>
                </span>
                <span className="_item">
                    <Mui mode="circle" onClick={this.jumpTo.bind(this, months)} className="nj-icon nj-icon-right"></Mui>
                    <Mui mode="circle" onClick={this.jumpTo.bind(this, 12)} className="nj-icon nj-icon-right2"></Mui>
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
                    disabled={hasDate&&!currentDate.date}
                    onChange={this.changeTime.bind(this, 'hours')}
                >
                    {hoursItems}
                </select> : 

                <select 
                    value={minutes} 
                    disabled={hasDate&&!currentDate.date}
                    onChange={this.changeTime.bind(this, 'minutes')}
                >
                    {minutesItems}
                </select>
            </div>
            : null}
        </div>
    }
}

Datetime.defaultProps = {
    mode : 'datetime',
    //显示的月份数
    months : 1,
    // format : 'yy-mm-dd hh:mm:ss',
    weeks : ['日', '一', '二', '三', '四', '五', '六']
}

export default Datetime