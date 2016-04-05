/**
 * Components
 * comment list
 */
var nj = require('nj')
var {React, ReactDOM} = nj

module.exports = React.createClass({
    render () {
        var {data} = this.props
        var _data = [].concat(data).reverse()
        return (
        <ul>
            {_data.map((item,i)=>
                <li key={item.comment||i}>{item.comment}</li>
            )}
        </ul>
        )
    }
})