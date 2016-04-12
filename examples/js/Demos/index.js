/**
 * 文档中的demo实例
 */

var components = ['popup', 'tree', 'form', 'comments', 'photos']
;[
    require('./popup'),
    require('./tree'),
    require('./form'),
    require('../ReduxDemos/Comments'),
    require('../ReduxDemos/PhotoSearch')

].forEach((fn, i)=>{
    exports[components[i]] = fn
})