import $ from 'jquery'
import nj, {React, render} from 'nj'
import Datepicker, {Datetime} from 'nj/datepicker'
import {Form} from 'nj/form'


export const init = ()=>{
    let start = (max)=>render(
        <Datepicker months="2" name="start" placeholder="开始时间" className="text" 
            max={max} onChange={function(value, data, timestamp){
                end(value); //console.log(value, data, timestamp)
            }} 
        />, 
        document.getElementById('rootDatepicker')
    )
    let end = (min)=>render(
        <Datepicker min={min} disableAnimation={true} onChange={value=>start(value)} />, 
        document.getElementById('rootDatepicker1')
    )
    start()
    end()
    

    Form.start()

    let input = $('input[name="starttime"]')[0]
    render(
        <Datepicker min={new Date()} mode="datetime" input={input}/>, 
        input
    )

    // console.log(Datepicker.Datetime)
}