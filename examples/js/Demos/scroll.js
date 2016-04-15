import nj from 'nj'
const {React, render} = nj
import {Scroll, ScrollItems} from 'nj/scroll'


module.exports = (container)=>{
    var demoWrap = document.getElementById('demo-scroll-wrap')
    demoWrap && render(
        <Scroll time={4000} direction='x'>
            <ScrollItems>
                <div className="_item">1</div>
                <div className="_item">2</div>
                <div className="_item">3</div>
            </ScrollItems>
        </Scroll>
    , demoWrap)

    Scroll.start(container)
}