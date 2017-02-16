import {React, render} from 'nj'
import {Form} from 'nj/form'

export const init = ({id, url})=>{
    render(<Nav url={url} />, document.getElementById('demo-nav'))
    Form.start()
}

export const onLeave = e=>{
    console.log(e)
}

const Nav = React.createClass({
    getDefaultProps () {
        return {items : [
            {text:'nj-form', url:'form/normal.html'},
            {text:'React Component', url:'form/component.html'},
            {text:'InputGroup', url:'form/input-group.html'}
        ]}
    },
    render () {
        let {items, url} = this.props
        return <div>
            <a href="form/form" className="back">&lt;&lt;返回</a>
            {items.map(item => <a href={item.url} className={item.url==url?'current':''} key={item.url}>{item.text}</a>)}
        </div>
    }
})