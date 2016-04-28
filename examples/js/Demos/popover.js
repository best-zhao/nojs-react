var nj = require('../../../lib/nojs-react')
var {React, render} = nj

var Popover = require('nj/popover')
var $ = require('jquery')

module.exports = (container)=>{
    var pop = render(<Popover nearby="demo-popover-button" template="123" />, document.getElementById('demo-popover-wrap'))
    // console.log(pop)
    // pop.refs.pop.setDisplay(true)
}