/**
 * 评论应用 
 */
var nj = require('nj')
var {React, ReactDOM} = nj

var thunkMiddleware = require('redux-thunk').default
var createLogger = require('redux-logger')
var {Provider} = require('react-redux')
var {createStore, applyMiddleware} = require('redux')
var App = require('./components/App')
var rootReducer = require('./reducers')

// const createStoreWithMiddleware = applyMiddleware(
//   thunkMiddleware, // 允许我们 dispatch() 函数
//   createLogger //一个很便捷的 middleware，用来打印 action 日志
// )(createStore)
// console.log(thunkMiddleware.default)

// const store = createStoreWithMiddleware(rootReducer)


module.exports = (container)=>{
    const store = createStore(rootReducer, {}, applyMiddleware(thunkMiddleware, createLogger()))

    // store.subscribe(()=>{
    //     console.log(store.getState())
    // })

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('appDemo')
    )
}
