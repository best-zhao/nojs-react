import {React, render} from 'nj'
import Datepicker from 'nj/datepicker'

export const init = ()=>{
    let start = (max)=>render(
        <Datepicker months="1" name="start" placeholder="开始时间" className="text" 
            max={max} onChange={function(value, data, timestamp){
                end(value); //console.log(value, data, timestamp)
            }} 
        />, 
        document.getElementById('rootDatepicker')
    )
    let end = (min)=>render(
        <Datepicker min={min} onChange={value=>start(value)} />, 
        document.getElementById('rootDatepicker1')
    )
    start()
    end()
    

    render(
        <Datepicker mode="time" input={document.getElementById('rootDatepicker2')}/>, 
        document.getElementById('rootDatepicker2')
    )
}