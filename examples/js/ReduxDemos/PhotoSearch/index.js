/**
 * 照片搜索应用 
 */
var nj = require('nj')
var {React, ReactDOM} = nj

var thunkMiddleware = require('redux-thunk').default
var createLogger = require('redux-logger')
var {Provider} = require('react-redux')
var {createStore, applyMiddleware} = require('redux')
var App = require('./components/App')
var rootReducer = require('./reducers')

module.exports = (container)=>{
    const store = createStore(rootReducer, {}, applyMiddleware(thunkMiddleware, createLogger()))

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('appDemo')
    )
}