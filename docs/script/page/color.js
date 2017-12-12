import $ from 'jquery'
import {React, render, ReactDOM, utils} from 'nj'
import color from 'nj/color'

export default class Color extends React.Component {
    componentDidMount () {
        let {onChange} = this.props
        color(ReactDOM.findDOMNode(this), pos=>{
            console.log(pos)
            onChange && onChange('#'+pos.color)
        })
    }
    render () {
        return <span>12</span>
    }
}