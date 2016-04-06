/**
 * Components
 * App
 */
var nj = require('nj')
var {React, ReactDOM} = nj
var {connect} = require('react-redux')
var AddComment = require('./AddComment')
var CommentList = require('./CommentList')
var {addComment} = require('../actions')

var fetch = require('isomorphic-fetch')

var App = React.createClass({    
    render () {
        var {comments, dispatch} = this.props        
        return (
        <div>
            <AddComment onAddClick={text=>dispatch(addComment(text))} />
            <CommentList data={comments} />            
        </div>
        )
    }
})
function select(state, ownProps){
    return {
        comments : state.comments
    }
}
module.exports = connect(select)(App)

