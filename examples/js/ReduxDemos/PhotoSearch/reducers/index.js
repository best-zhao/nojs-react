/**
 * reducers
 */
var {combineReducers} = require('redux')
var photos = require('./photo')

module.exports = combineReducers({
    photos
})