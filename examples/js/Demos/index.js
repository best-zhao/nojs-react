/**
 * 文档中的demo实例
 */

var components = ['popup', 'tree', 'form', 'switch', 'scroll', 'comments', 'photos']
;[
    require('./popup'),
    require('./tree'),
    require('./form'),
    require('./switch'),
    require('./scroll'),
    require('../ReduxDemos/Comments'),
    require('../ReduxDemos/PhotoSearch')

].forEach((fn, i)=>{
    exports[components[i]] = fn
})