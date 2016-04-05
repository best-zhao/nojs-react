/**
 * Components
 * add comment
 */
var nj = require('nj')
var {React, ReactDOM} = nj
var {PropTypes} = React

var SearchPhoto = module.exports = React.createClass({
    handleSubmit (e) {
        let input = this.refs.input
        let text = input.value.trim()
        
        e.preventDefault()
        if (!text) {
          return
        }
        this.props.onSearch(text)
        input.value = ''
    },
    render () {        
        return (
        <form onSubmit={this.handleSubmit}>
            <input ref='input'/>
            <button type="submit">搜索</button>
        </form>
        )
    }
})
SearchPhoto.propTypes = {
  onSearch: PropTypes.func.isRequired
}