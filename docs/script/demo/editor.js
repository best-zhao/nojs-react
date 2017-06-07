import $ from 'jquery'
import nj, {React, render} from 'nj'
// import Editor from 'nj/Editor'
import {Form, Input} from 'nj/form'

export const init = ()=>{
    
    let defaultValue = `
        13123 <p style="color:red">123</p>
        <p style="color:red">123</p>
        <p style="color:red">123</p>
        <p style="color:red">123</p>
        <p style="color:red">123</p>
        <p style="color:red">123</p>
        <p style="color:red">123</p>
        <p style="color:red">123</p>
        <p style="color:red">123</p>
        <p style="color:red">123</p>
        <p style="color:red">123</p>
        <p style="color:red">123</p>
    `
    //<Editor placeholder="Placeholder……"/>
    render(
        <Form onSubmit={e=>{e.preventDefault();alert(1)}}>
            
            <Input type="editor" className="text" required nj-minlength="5" defaultValue={defaultValue}></Input>
            <button>submit</button>
        </Form>, 
        document.getElementById('rootEditor')
    )



    // console.log(Datepicker.Datetime)
}