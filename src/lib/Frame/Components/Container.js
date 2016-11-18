import React from 'react'
import Menu from './Menu'

const Container = React.createClass({
    getInitialState () {
        return {}
    },
    readyHandle (menuData) {
        //获取menu tree的数据 用来传递到_children组件中
        this.setState({menuData})
    },
    render () {
        let {routes:[{props:rootProps}]} = this.props
        let {menu} = rootProps

        const {menuData} = this.state
        const {children, params} = this.props
        const _children = children && React.cloneElement(children, {menuData})
        return <div className="app-container">
            <Menu defaultNode={params.id} menu={menu} onReady={this.readyHandle} />
            {_children}
        </div>
    }
})

export default Container