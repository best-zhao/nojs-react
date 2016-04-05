
require('../css/react.css')

//引入React和ReactDOM
var React = exports.React = require('react/lib/ReactWithAddons');
var ReactDOM = exports.ReactDOM = require('react-dom');

//工具集
exports.utils = require('../utils/utils');

exports.mixins = {
    setDisplay : require('../mixins/effect'),
    childComponents : require('../mixins/childComponents')
};

var components = []

// components.forEach(function(name){
//     var selector = '[nj-'+name+']'
//     var elements = document.body.querySelectorAll(selector)
//     elements = Array.prototype.slice.call(elements)

//     if( !elements.length ){
//         return
//     }

//     function init(require){
//         var Component = require('./'+name)
//         elements.forEach(function(el){
//             // var component = ReactDOM.render(
//             //   <Component />, el
//             // )
//             //console.log(component)
//             Component.init(el)
//         })    
//     }

//     switch (name) {
//         case 'switch':
//             require.ensure(['./switch'], init);
//             break;
//         default:
//             //
//             break;
//     }
    
    
// })



