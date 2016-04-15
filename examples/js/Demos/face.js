import nj from 'nj'
const {React, render} = nj
import Face from 'nj/face'

module.exports = (container)=>{

    Face.create({
        nearby : 'show-face',
        insert : 'face-insert'
    })
    var demoWrap = document.getElementById('demo-face-wrap')

    // demoWrap && render(
    //     <Face />
    // , demoWrap)
}