import {React, render, utils} from '../nojs-react'
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
        let {months} = this.props
        let {currentMonth} = this.state
        let {year, month} = currentMonth[0]
        let startMonth = getNearMonth({year, month, step})
        this.setState({currentMonth:this.getMonthGroups(startMonth)})
    }
    changeDate ({year, month, date, day, current, prevMonth}) {
        let {hours, minutes, hasDate, format} = this.state
        if( hasDate && !date ){//没有选择天
            return
        }
        let {onChange, mode} = this.props
        if( !current ){//选择的日期是相邻的月份
            this.jumpTo(prevMonth?-1:1)
        }
        let value = dateParse({
            date : [year, month, date].join('-')+' '+[hours, minutes].join(':'),
            format
        })
        this.setState({currentDate:{year, month, date, day}, value}, ()=>{
            let data = Object.assign({hours, minutes}, this.state.currentDate)
            let timestamp = getTimestamp(data, 6)
            onChange && onChange.call(this, value, data, timestamp)
        })        
    }
    changeTime(key, e){
        this.setState(
            {[key] : parseInt(e.target.value)}, 
            ()=>this.changeDate(Object.assign({current:true}, this.state.currentDate))
        )
    }    
    render () {
        let {weeks} = this.props
        let {
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

        const checkDisabled = (data, key)=>{
            let disabled
            // let allowSame = key=='hours' || key=='minutes'
            if( min ){
                disabled = data<min[key]
            }
            if( max ){
                disabled = data>max[key]
            }
            return disabled
        }

        let weekEl = <ul className="clearfix _weeks">{
            weeks.map((item,i)=>
                <li key={i}>{item}</li>
            )
        }</ul>

        return <div className="nj-datepicker">
            {hasDate ? 
            <div className="_groups clearfix">{currentMonth.map((item,i)=>{
                let {year, month, dates} = item
                return <div className="_group" key={year+'-'+month}>
                    <div className="_head clearfix">
                        {i==0 ?
                        <span className="fl">
                            <i onClick={this.jumpTo.bind(this, -12)} className="nj-icon nj-icon-left2"></i>
                            <i onClick={this.jumpTo.bind(this, -1)} className="nj-icon nj-icon-left"></i>
                        </span> : null
                        }
                        {i==currentMonth.length-1 ?
                        <span className="fr">
                            <i onClick={this.jumpTo.bind(this, 1)} className="nj-icon nj-icon-right"></i>
                            <i onClick={this.jumpTo.bind(this, 12)} className="nj-icon nj-icon-right2"></i>
                        </span> : null
                        }
                        {year}年 {parseNumber(month)}月
                    </div>
                    {weekEl}                  
                    <ul className="_dates clearfix">{
                        dates.map(item=>{
                            let disabled = checkDisabled(item.timestamp, 'date')
                            let className = joinClass(
                                !disabled && checkCurrentDate(item,i) && 'active',
                                !item.current && 'gray',
                                disabled && 'disabled',
                                item.isToday && 'today'
                            )
                            return <li 
                                key={[item.year, item.month, item.date].join('')}
                                onClick={!disabled && this.changeDate.bind(this, item)}
                                className={className}
                            >
                                <span>{item.date}</span>
                            </li>
                        })
                    }</ul>
                </div>
            })}</div>
            : null}

            {hasTime ? 
            <div className="_times">时间：
                <select 
                    value={hours} 
                    disabled={hasDate&&!currentDate.date}
                    onChange={this.changeTime.bind(this, 'hours')}
                >{
                    hoursItems.map((h,i)=>{
                        let disabled 
                        if( currentDate.date ){
                            let d = Object.assign({}, currentDate, {hours:i})
                            let timestamp = getTimestamp(d, 4)
                            disabled = checkDisabled(timestamp, 'hours')
                        }
                        return <option disabled={disabled} key={i} value={i}>{parseNumber(i)}</option>
                    })
                }</select> : 

                <select 
                    value={minutes} 
                    disabled={hasDate&&!currentDate.date}
                    onChange={this.changeTime.bind(this, 'minutes')}
                >{
                    minutesItems.map((h,i)=>{
                        let disabled 
                        if( currentDate.date ){
                            let d = Object.assign({}, currentDate, {hours, minutes:i})
                            let timestamp = getTimestamp(d, 5)
                            disabled = checkDisabled(timestamp, 'minutes')
                        } 
                        return <option disabled={disabled} key={i} value={i}>{parseNumber(i)}</option>
                    })
                }</select>
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