/**
 * actions
 */
var fetch = require('isomorphic-fetch')

export const ADD_COMMENT = 'ADD_COMMENT'
// const ADD_COMMENT = exports.ADD_COMMENT = 'ADD_COMMENT'

export const REQUEST_POSTS = 'REQUEST_POSTS'
const RECEIVE_POSTS = exports.RECEIVE_POSTS = 'RECEIVE_POSTS'
const SELECT_REDDIT = exports.SELECT_REDDIT = 'SELECT_REDDIT'

function receivePosts(reddit, json) {
  return {
    type: RECEIVE_POSTS,
    reddit: reddit,
    posts: json,
    receivedAt: Date.now()
  }
}
function requestPosts(reddit) {
  return {
    type: REQUEST_POSTS,
    reddit
  }
}
function fetchPosts(reddit) {
  return dispatch => {
    dispatch(requestPosts(reddit))
    return fetch('https://www.reddit.com/r/${reddit}.json')
      .then(response => response.json())
      .then(json => dispatch(receivePosts(reddit, json)))
  }
}
function shouldFetchPosts(state, reddit) {
  const posts = state.postsByReddit[reddit]
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}
exports.addComment = (reddit) => {
    return (dispatch, getState) => {
        // if (shouldFetchPosts(getState(), reddit)) {
            
        // }
        return dispatch(fetchPosts(reddit))
    }
    return {
        type : ADD_COMMENT,
        comment : text
    }
}

