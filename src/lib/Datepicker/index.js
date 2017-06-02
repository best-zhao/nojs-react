import {React, render} from '../nojs-react'
import Popover from '../popover'
import Datetime from './Datetime'
import {today} from './utils'

class Datepicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value:this.props.value}
    }
    componentDidMount () {
        let options = this.state.options = Object.assign({}, this.props)
        let {input} = this.refs

        input = options.input || input

        let pop = this.state.pop = Popover.create({
            nearby : input,
            trigger : 'click',
            name : 'nj-datepicker-pop',            
            effect : options.disableAnimation && 'normal'            

        }).onShow(()=>{

            let self = this

            //获取初始value
            options.value = input.value
            
            //重写onChange
            let {onChange} = this.props
            let {auto=true} = options//options.mode=='date'

            options.onChange = function(value, data, timestamp){
                if( !auto && !self.state._action ){//不立即生效
                    return
                }
                if( options.input ){
                    //兼容Input组件
                    let {$handle} = input
                    $handle ? $handle.setState({value}) : (input.value = value);
                }else{
                    self.setState({value})
                }

                let {hasTime} = this.state
                !hasTime && pop.setDisplay(false)

                onChange && onChange.call(self, value, data, timestamp)
            }

            let datetime

            options.onReady = function(){
                datetime = this
            }

            let onSubmit = e=>{
                pop.setDisplay(false)
                this.state._action="submit"

                datetime.submit.call(datetime)

                setTimeout(e=>{
                    self.state._action = null
                }, 1)
            }

            let template = <div className="pop-wrap clearfix">
                <Datetime {...options}/>

                {options.mode=='date' && auto ? null :
                    <div className="pop-foot">
                        <button onClick={onSubmit} className="nj-button nj-button-small">确定</button>
                    </div>
                }
            </div>

            pop.setState({template}, ()=>pop.align.set())
            
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