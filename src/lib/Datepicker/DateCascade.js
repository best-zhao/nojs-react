/**
 * 日期级联菜单
 */
import {React, render} from '../nojs-react'
import {parseNumber, today} from './utils'
// import {Form, Input} from '../form'
// import Tree, {LinkTree} from '../tree'

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
    changeHandle (key, e) {
        let {onChange} = this.props
    	let {year, month} = this.state
    	let value = e.target.value
    	let newState = {[key]:value}
    	if( key=='month' ){
    		let days = new Date(year, value, 0).getDate()
    		newState.dates = this.getArray(days)    
    	}
    	this.setState(newState, ()=>{
            onChange && onChange.call(this, this.state)
        })
    }
    render () {
        let {ids, infos=[], format} = this.props
        let {
            yearItems, monthItems, dateItems, hoursItems, minutesItems, secondsItems,
            year, month, date ,hours, minutes, seconds
        } = this.state
        let _infos = [].concat(infos)
        let arr = index=>{
            let info = _infos.shift() || {}
            let defaultValue  = info.defaultValue
            if( info.defaultValue ){
                info.defaultValue = null
            }
            return [
                <select {...info} value={defaultValue||year} onChange={this.changeHandle.bind(this, 'year')}>
                    <option value="">请选择</option>
                    {yearItems.map(item=><option value={item}>{item}{info.fix}</option>)}
                </select>,
                <select {...info} value={defaultValue||month} onChange={this.changeHandle.bind(this, 'month')}>
                    <option value="">请选择</option>
                    {monthItems.map(item=><option value={item}>{item<10?('0'+item):item}{info.fix}</option>)}
                </select>,
                <select {...info} value={defaultValue||date} onChange={this.changeHandle.bind(this, 'date')}>
                    <option value="">请选择</option>
                    {dateItems.map(item=><option value={item}>{item<10?('0'+item):item}{info.fix}</option>)}
                </select>,
                <select {...info} value={defaultValue||hours} onChange={this.changeHandle.bind(this, 'hours')}>
                    {hoursItems.map(item=><option value={item}>{item<10?('0'+item):item}{info.fix}</option>)}
                </select>,
                <select {...info} value={defaultValue||minutes} onChange={this.changeHandle.bind(this, 'minutes')}>
                    {minutesItems.map(item=><option value={item}>{item<10?('0'+item):item}{info.fix}</option>)}
                </select>,
                <select {...info} value={defaultValue||seconds} onChange={this.changeHandle.bind(this, 'seconds')}>
                    {secondsItems.map(item=><option value={item}>{item<10?('0'+item):item}{info.fix}</option>)}
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