/**
 * 文档中的demo实例
 */

var components = ['popup', 'form', 'comments', 'photos']
;[
    require('./popup'),
    require('./form'),
    require('../ReduxDemos/Comments'),
    require('../ReduxDemos/PhotoSearch')

].forEach((fn, i)=>{
    exports[components[i]] = fn
})