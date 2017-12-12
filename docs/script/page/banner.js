import $ from 'jquery'
import {React, render, ReactDOM, utils} from 'nj'

export default class Banner extends React.Component {
    constructor (props) {
        super(props)
        let {layers=[]} = this.props
        this.state = {
            layers
        }
    }
    componentDidMount () {
        
    }    
    push (layer) {
        let {layers} = this.state
        layers.push(layer)
        this.setState({layers})
    }
    render () {
        let {layers} = this.state
        return <div>
            {layers.map(ly=><div className="layer" style={{top:ly.y, left:ly.x}}> <div className="inner"></div></div>)}
        </div>
    }
}