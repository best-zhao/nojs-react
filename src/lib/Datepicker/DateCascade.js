/**
 * 日期级联菜单
 */
import {React, render} from '../nojs-react'
import {parseNumber, today, getTimestamp} from './utils'
// import {Form, Input} from '../form'
// import Tree, {LinkTree} from '../tree'
// console.log(today)
export default class Link extends React.Component {
    constructor (props) {
        super(props)
        let now = new Date()
        let year //= now.getFullYear()
        let month //= now.getMonth()+1
        let date //= now.getDate()
        let hours //= now.getHours()
        let minutes //= now.getMinutes()
        let seconds //= now.getSeconds()

        this.state = {
            _today : {
                year : now.getFullYear(),
                month : now.getMonth()+1,
                date : now.getDate(),
                hours : now.getHours(),
                minutes: now.getMinutes(),
                seconds: now.getSeconds()
            },
        	formdata:{},
        	year,
        	yearItems : this.getArray(today.year, 100),
        	month,
        	monthItems : this.getArray(12),
        	date,
        	dateItems : this.getArray(new Date(today.year, today.month, 0).getDate()) ,
            hours,  
            hoursItems : this.getArray(23, 24),
            minutes,
            minutesItems : this.getArray(59, 60),
            seconds,
            secondsItems : this.getArray(59, 60)
        }
        // console.log(this.state)
    }
    getArray (end, total) {
    	let data = [];
        for( let i=0;i<(total||end);i++ ){
        	data.unshift(end-i)
        }
        return data
    }
    changeHandle (key, length, e) {
        let {onChange} = this.props
    	let {year, month, _today} = this.state
    	let value = e.target.value
    	let newState = {[key]:value}
    	if( key=='month' ){
    		let days = new Date(year, value, 0).getDate()
    		newState.dates = this.getArray(days)    
    	}

        let full = {}
        Object.keys(_today).map(k=>{
            full[k] = newState[k] || this.state[k] || _today[k]
        })
        let timestamp = newState.timestamp = getTimestamp(full, 6)

    	this.setState(newState, ()=>{
            onChange && onChange.call(this, this.state)
        })
    }
    render () {
        let {ids, infos=[], format, min, max} = this.props
        let {
            yearItems, monthItems, dateItems, hoursItems, minutesItems, secondsItems,
            year, month, date ,hours, minutes, seconds, _today
        } = this.state

        let _infos = [].concat(infos)
        let keys = Object.keys(_today)

        let arr = index=>{
            let info = _infos.shift() || {}
            let defaultValue  = info.defaultValue
            let key = keys[index]
            let stateValue = this.state[key]
            if( defaultValue && !stateValue ){
                this.state[keys[index]] = stateValue = defaultValue
                info.defaultValue = null
            }

            const checkDisabled = (item, length)=>{
                let disabled
                
                let full = {}
                keys.map((k,i)=>{
                    full[k] = this.state[k] || _today[k]                    
                })
                full[keys[length-1]] = item

                let timestamp = getTimestamp(full, 6)
                
                if( min && timestamp<min ){
                    disabled = true
                }
                if( !disabled && max && timestamp>max ){
                    disabled = true
                }
                return {disabled}
            }
            return [
                <select {...info} value={stateValue} onChange={this.changeHandle.bind(this, 'year', 1)}>
                    <option value="">请选择</option>
                    {yearItems.map(item=>
                        <option {...checkDisabled(item,1)} value={item}>{item}{info.fix}</option>
                    )}
                </select>,
                <select {...info} value={stateValue} onChange={this.changeHandle.bind(this, 'month', 2)}>
                    <option value="">请选择</option>
                    {monthItems.map(item=>
                        <option {...checkDisabled(item,2)} value={item}>{item<10?('0'+item):item}{info.fix}</option>
                    )}
                </select>,
                <select {...info} value={stateValue} onChange={this.changeHandle.bind(this, 'date', 3)}>
                    <option value="">请选择</option>
                    {dateItems.map(item=>
                        <option {...checkDisabled(item, 3)} value={item}>{item<10?('0'+item):item}{info.fix}</option>
                    )}
                </select>,
                <select {...info} value={stateValue} onChange={this.changeHandle.bind(this, 'hours', 4)}>
                    {hoursItems.map(item=>
                        <option {...checkDisabled(item,4)} value={item}>{item<10?('0'+item):item}{info.fix}</option>
                    )}
                </select>,
                <select {...info} value={stateValue} onChange={this.changeHandle.bind(this, 'minutes', 5)}>
                    {minutesItems.map(item=>
                        <option {...checkDisabled(item,5)} value={item}>{item<10?('0'+item):item}{info.fix}</option>
                    )}
                </select>,
                <select {...info} value={stateValue} onChange={this.changeHandle.bind(this, 'seconds', 6)}>
                    {secondsItems.map(item=>
                        <option {...checkDisabled(item,6)} value={item}>{item<10?('0'+item):item}{info.fix}</option>
                    )}
                </select>
            ][index]
        }
        let strMaps = {
            'YY' : '0',
            'MM' : '1',
            'DD' : '2',
            'hh' : '3',
            'mm' : '4',
            'ss' : '5'
        }
        let newarr = [];
        format.replace(/\b(\w+)\b([\s\S]?)/g, function(a,b,c){
            newarr.push(arr(strMaps[b]))
            newarr.push(c.trim())
        })
        return <span>
            {newarr}
        </span>
    }
}

Link.defaultProps = {
    format : 'YY MM DD'
}