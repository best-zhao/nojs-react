import nj from 'nj'
const {React, render} = nj
import {Scroll, ScrollItems, ScrollPage} from 'nj/scroll'
import $ from 'jquery'

module.exports = (container)=>{
    var demo
    var demoWrap = document.getElementById('demo-scroll-wrap')
    demoWrap && (demo=render(
            <Scroll time={4100} auto={false} direction='x'>
                <ScrollItems>
                    <div className="_item">1</div>
                    <div className="_item">2</div>
                    <div className="_item">3</div>
                </ScrollItems>
            </Scroll>
        , demoWrap))

    Scroll.start(container)

    $('a.prev,a.next').click(function(){
        var index = demo.state.index;
        demo.scroll($(this).hasClass('prev')?false:true);
        return false;
    })

    Scroll.startOne('myscroll', {
        pageTemplate : i=><div>p{i+1}-</div>
    })

}