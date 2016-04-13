import nj from 'nj'
const {React, render} = nj
import Scroll from 'nj/scroll'


module.exports = (container)=>{
    var demoWrap = document.getElementById('demo-scroll-wrap')
    demoWrap && render(
        <Scroll time={1000} direction='x'>
            <div className="_item">1</div>
            <div className="_item">2</div>
            <div className="_item">3</div>
        </Scroll>
    , demoWrap)
}