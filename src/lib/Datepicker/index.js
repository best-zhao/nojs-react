import {React, render} from '../nojs-react'
import Popover from '../popover'
import Datetime from './Datetime'

class Datepicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value:this.props.value}
    }
    componentDidMount () {
        let options = this.state.options = Object.assign({}, this.props)
        let {input} = this.refs

        input = options.input || input

        let pop = Popover.create({
            name : 'nj-datepicker-pop',
            nearby : input,
            // effect : 'normal',
            // template : <Datetime {...options}/>,
            trigger : 'click'

        }).onShow(()=>{

            //获取初始value
            options.value = input.value
            
            //重写onChange
            let {onChange} = this.props

            options.onChange = (value, data, timestamp)=>{
                if( options.input ){
                    //兼容Input组件
                    let {$handle} = input
                    $handle ? $handle.setState({value}) : (input.value = value);
                }else{
                    this.setState({value})
                }
                onChange && onChange.call(this, value, data, timestamp)
            }
            pop.setState({template:<Datetime {...options}/>}, ()=>{
                pop.align.set()
            })
            
        }).onHide(()=>{
            pop.setState({template:null})
        })
    }
    componentWillReceiveProps(nextProps){
        Object.assign(this.state.options, nextProps)
    }
    render () {
        let {value} = this.state
        let {placeholder, name, className, input} = this.props
        let attrs = {placeholder, name, className, readOnly:true, value, ref:'input'}
        return input ? null : <input {...attrs}/>        
    }
}

export default Datepicker