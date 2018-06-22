import $ from 'jquery'
import nj, {React, render} from 'nj'
import Datepicker from 'nj/datepicker'
import DateCascade from 'nj/datepicker/DateCascade'
import {Form} from 'nj/form'
import Datetime from 'nj/datepicker/Datetime'

export const init = ()=>{
    let startVal = "2018-11-05"
    let start = (max)=>render(
        <Datepicker months="1" 
            multiple={true}
            value={startVal}
            min={new Date()} 
            placeholder="开始时间" 
            max={max} 
            months="2"
            onChange={value=>end(value)} 
        />, 
        document.getElementById('rootDatepicker')
    )
    let end = (min)=>render(
        <Datepicker  onChange={value=>start(value)} />, 
        document.getElementById('rootDatepicker1')
    )
    start()
    end(startVal)
    
    Form.start()

    let input = $('input[name="starttime"]')[0]
    render(
        <Datepicker mode="time" input={input}/>, 
        input
    )

    let date = render(
        <DateCascade 
            infos={
                [
                    {className:'text', name:'year', fix:'时', defaultValue:'22'},
                    {className:'text', name:'month', fix:'分', defaultValue:'9'}
                ]
            } 
            format="hh mm" 
            onChange={function(data){
                // console.log(this, data)
            }
        }/>, 
        document.getElementById('rootDatepicker2')
    )
    // console.log(date.state)


    render(
        <Datetime 
            mode="date" 
            showSide={false} 
            style="flat" 
            change_disabled={true}
            switch_year={true}
            onChangeGroup={nextMonth=>{
                console.log(nextMonth)
            }}
            template={item=>{
                // console.log(item)
                return  <div>
                    <h6>{item.date}</h6>
                    {item.current && <p>15:30—17:30 瑜伽塑形课</p>}
                </div>
            }}
        />, 
        document.getElementById('datepicker1')
    )

    // console.log(Datepicker.Datetime)
}