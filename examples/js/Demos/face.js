import nj from 'nj'
const {React, render} = nj
import Face from 'nj/face'

module.exports = (container)=>{
    var rs = 'http://css.mdbimg.com'
    Face.config({
        themeItems : {
            'default' : {url:rs+"/js/lib/Kindeditor/plugins/emoticons/images/"}
        },
        themes : ['default']
    })
    Face.create({
        nearby : 'show-face',
        insert : 'face-insert'
    })
    var demoWrap = document.getElementById('demo-face-wrap')

    // demoWrap && render(
    //     <Face />
    // , demoWrap)
}