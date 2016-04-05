/**
 * reducers
 */
var {combineReducers} = require('redux')
var comments = require('./comments')

module.exports = combineReducers({
    comments
})