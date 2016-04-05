/**
 * 文档中的demo实例
 */

var components = ['popup', 'comments', 'photos']
;[
    require('./popup'),
    require('../ReduxDemos/Comments'),
    require('../ReduxDemos/PhotoSearch')

].forEach((fn, i)=>{
    exports[components[i]] = fn
})