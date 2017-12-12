import $ from 'jquery'
import {React, render, ReactDOM, utils} from 'nj'
import color from 'nj/color'

export default class Color extends React.Component {
    componentDidMount () {
        let {onChange} = this.props
        color(ReactDOM.findDOMNode(this), pos=>{
            onChange && onChange('#'+pos.color)
        })
    }    
    render () {
        let {value} = this.props
        return <span data-value={value} className="color-picker" style={{backgroundColor:value}}>
            <span className={value?'':'transparent'}></span>
        </span>
    }
}