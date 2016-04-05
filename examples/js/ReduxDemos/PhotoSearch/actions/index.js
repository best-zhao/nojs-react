/**
 * actions
 */
const fetch = require('isomorphic-fetch')

const SEARCH_PHOTO = exports.SEARCH_PHOTO = 'SEARCH_PHOTO'

const REQUEST_POSTS = exports.REQUEST_POSTS = 'REQUEST_POSTS'
const RECEIVE_POSTS = exports.RECEIVE_POSTS = 'RECEIVE_POSTS'

function receivePosts(reddit, photos) {
  return {
    type: RECEIVE_POSTS,
    reddit: reddit,
    photos: photos,
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
    var params = ['tags='+reddit, 'per_page=40', 'method=flickr.photos.search', 'api_key=00697263c9f5a9bd01e33119cdeb52ca', 'format=json', 'nojsoncallback=1']
    return fetch('https://api.flickr.com/services/rest/?'+params.join('&'))
      .then(response=>response.json())
      .then((json)=>{
          var photos = json.photos.photo
          dispatch(receivePosts(reddit,photos))
          // this.setState({photos:photos})
      })
    // return fetch('https://www.reddit.com/r/${reddit}.json')
    //   .then(response => response.json())
    //   .then(json => dispatch(receivePosts(reddit, json)))
  }
}

exports.searchPhoto = (reddit) => {
    return (dispatch, getState) => {
        return dispatch(fetchPosts(reddit))
    }    
}

