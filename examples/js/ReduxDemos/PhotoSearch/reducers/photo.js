/**
 * reducers comments
 */
var {REQUEST_POSTS, RECEIVE_POSTS} = require('../actions')

function posts(state={
  isFetching : false,
  items : []
},action) {
  switch (action.type) {    
    case REQUEST_POSTS:
      return Object.assign({}, state, {isFetching:true, items:[]})
    case RECEIVE_POSTS:
      return Object.assign({}, state, {isFetching:false, items:action.photos})
    default:
      return state
  }
}

module.exports = (state={isFetching:false,items:[]}, action) => {
    switch (action.type) {
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, posts(state, action))
    default:
      return state
  }
}