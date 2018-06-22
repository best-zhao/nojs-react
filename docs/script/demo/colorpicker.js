import $ from 'jquery'
import nj, {React, render} from 'nj'
import ColorPicker from 'nj/ColorPicker'
import {Form, Input} from 'nj/form'
import Page from 'nj/page'


export const init = ()=>{

    // class Color extends React.Component {
    //     constructor (props) {
    //         super(props)
    //         this.state = {}
    //     }
    //     render () {
    //         return <ColorPicker>
    //             <Input/>
    //         </ColorPicker>
    //     }
    // }

    render(
        <ColorPicker color="369" _onChange={data=>console.log(data)}></ColorPicker>, 
        document.getElementById('mounted')
    )
    render(
        <Page count={3} perpage={12}/>, 
        document.getElementById('page_mounted')
    )

    // console.log(Datepicker.Datetime)
}