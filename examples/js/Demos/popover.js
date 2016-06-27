var nj = require('../../../lib/nojs-react')
var {React, render} = nj

var Popover = require('nj/popover')
var $ = require('jquery')

// var Autocomplete = require('nj/autocomplete')
// setTimeout(()=>{
//     var onFetch = (promise, value)=>promise.then(
//         json=>json.data.filter(item=>item.name.toLowerCase().indexOf(value.toLowerCase())>=0)
//     )
//     var getItem = item=>item.name
//     var auto = render(
//         <Autocomplete 
//             placeholder="keyup" 
//             name="keyword"
//             data1={[1,11,12,2,22,3,13,23]} 
//             source="menu.json?k="
//             getItem={getItem}
//             onFetch={onFetch} />, 
//         document.getElementById('demo-autocomplete-wrap')
//     )
// }, 500)

module.exports = (container)=>{
    var pop = Popover.create({
        nearby : 'demo-popover-button',
        template : <ul className="pop-menu">
            <li>
                <a href="">111111111111</a>
            </li>
            <li>
                <a href="">222222222222</a>
            </li>
            <li>
                <a href="">333333333333</a>
            </li>
            <li>
                <a href="">4444444444</a>
            </li>
            <li>
                <a href="">5555555555</a>
            </li>
        </ul>,
        sharp : true,
        // trigger : 'click'
    })

    console.log(pop)

    // var pop = render(<Popover nearby="demo-popover-button" template="123" />, document.getElementById('demo-popover-wrap'))
}