/**
 * Components
 * add comment
 */
var nj = require('nj')
var {React, ReactDOM} = nj
var {PropTypes} = React

var AddComment = module.exports = React.createClass({
    handleSubmit (e) {
        let input = this.refs.input
        let text = input.value.trim()
        
        e.preventDefault()
        if (!text) {
          return
        }
        this.props.onAddClick(text)
        input.value = ''
    },
    render () {        
        return (
        <form onSubmit={this.handleSubmit}>
            <textarea ref='input'/>
            <button type="submit">发布</button>
        </form>
        )
    }
})

AddComment.propTypes = {
  onAddClick: PropTypes.func.isRequired
}