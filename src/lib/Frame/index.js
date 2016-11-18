import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory, hashHistory, IndexRedirect} from 'react-router'
import Container from './Components/Container'
import Content from './Components/Content'
// import * as Conf from './conf'

// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

const Root = (props) => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Container} props={props} >
        {props.defaultNode ? <IndexRedirect to={'/'+props.defaultNode} /> : null}
        <Route path="/:id(/:url)" component={Content} onLeave={Content.onLeave} />
      </Route>
    </Router>
  )
}
module.exports = Root
