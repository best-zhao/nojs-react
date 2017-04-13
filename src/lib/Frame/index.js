import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory, hashHistory, IndexRedirect} from 'react-router'
import Container from './Components/Container'
import Content from './Components/Content'

require('../../../css/frame.css')

const Root = React.createClass({
    //对外提供go方法
    go (url) {
        let {routers} = this.refs
        let {state:{params}, router} = routers
        router.push('/'+params.id+'/'+encodeURIComponent(url))
    },
    render () {
        let {props} = this
        return (
            <Router history={hashHistory} ref="routers">
              <Route path="/" component={Container} props={props}>
                {props.defaultNode ? <IndexRedirect to={'/'+props.defaultNode} /> : null}
                <Route path="/:id(/:url)" component={Content} onLeave={Content.onLeave} />
              </Route>
            </Router>
          )
    }
})
module.exports = Root
