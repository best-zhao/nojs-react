import $ from 'jquery'
import nj, {React, render} from 'nj'
import Datepicker, {Datetime} from 'nj/datepicker'
import {Form} from 'nj/form'


export const init = ()=>{
    let start = (max)=>render(
        <Datepicker min={new Date()} placeholder="开始时间" max={max} onChange={value=>end(value)} />, 
        document.getElementById('rootDatepicker')
    )
    let end = (min)=>render(
        <Datepicker min={min} onChange={value=>start(value)} />, 
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