import nj from 'nj'
const {React, render} = nj
import Verify from 'nj/form'
const {Form, Input, InputGroup} = Verify

const DemoNav = ()=>{
    var nav = ['normal','component','input-group']
    nav = nav.map((n,i)=>{
        return (
            <a href={'doc/form/'+n+'.html'} key={n} className={location.hash.indexOf(n)>0?'current':''}>{n}</a> 
        )
    })
    return (
        <div className="demo-nav">
            {nav}
        </div>
    )
}

const FormComponent = React.createClass({
    mixins : [React.addons.LinkedStateMixin],
    getInitialState () {
        // setTimeout(()=>{
        //     this.setState({truename:'2'})
        // }, 2000)
        return {}
    },
    valueLink (key) {
        var self = this
        return {
          value: this.state[key],
          requestChange (newValue) {
            var state = {}
            state[key] = newValue
            self.setState(state)
          }
        }
    },
    componentDidMount () {
        this.refs.$verfy.onSubmit((e)=>{
            alert('验证通过')
            e.preventDefault()
        })
    },
    render () {
        return (
        <Form className="nj-form" ref="$verfy" parentComponent={this}>
            <div><Input className="text" required valueLink={this.valueLink('truename')} />
            <input valueLink={this.linkState('truename')}/>{this.state.truename}</div>
            <div><Input className="text" placeholder="email" type="email" required /></div>
            <div><Input className="text" type="number" required /></div>
            <div>以下至少输入一项：<br/><InputGroup required>
                <Input className="text" placeholder="email" type="email" />
                <Input className="text" placeholder="mobile" type="mobile" />
            </InputGroup></div>
            <button className="nj-button" disabled={!this.state.valid}>提交</button>
        </Form>
        )
    }
})

module.exports = (container)=>{
    var nav = document.getElementById('demo-form-nav')
    nav && render(<DemoNav />, nav)

    Verify.start(container)

    //用于渲染Form组件实例
    var formWrap = document.getElementById('demo-form-wrap')
    formWrap && render(<FormComponent />, formWrap)

    var myverify = Verify.getByHandle('verify-input-group')
    myverify && myverify.onSubmit((e)=>{
        console.log(e)
        e.preventDefault()
    })
}
