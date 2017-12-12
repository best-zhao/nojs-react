
import $ from 'jquery'
import {React, render, utils} from 'nj'
import Side from './side'
import '../../css/page.css'

export const init = ()=>{
    render(<Page/>, document.getElementById('mounted'))
}

class Page extends React.Component {
    constructor (props) {
        super(props)
        let pageid = 'page-index'
        let data = {
            body : {
                pageid,
                selector : `#${pageid}`
            },
            banner : {
                selector : `#${pageid} .banner`
            },
            content : {
                selector : `#${pageid} .page-main`
            }
        }
        for( let i in data ){
            data[i].css = {}
        }
        this.state = {
            data,
            template : `
                <style>
                    .banner{height:300px;background:#f2f2f2;margin-bottom:20px} 
                    .page-main{height:500px;background:#f2f2f2;width:1200px;margin:0 auto}
                    .drag-active{border:1px solid #f90}
                    .layer{position:absolute;width:90px;height:90px;background:#ccc}
                </style>
                <div>1<br />12</div>
                <div class="banner" data-dragarea="banner"></div>
                <div class="page-all page-main" data-dragarea="content"></div>
            `
        }        
    }
    componentDidMount () {
        let $body = $(this.refs.body)
        let $inner = $body.children()
        $inner.width($inner.children().outerWidth(true))
        $body.scrollLeft(($inner.innerWidth()-$body.width())/2).scrollTop(90)

        let {canvas} = this.refs
        let el = $(canvas)

        this.canvas = {
            el,
            areas : el.find('[data-dragarea]')
        }        
    }
    componentDidUpdate (prevProps, prevState) {
        // this.canvas.areas = this.canvas.el.find('[data-dragarea]')
    }
    getStyle () {
        let {data} = this.state
        let styles = []
        for( let i in data ){
            let css = data[i].css
            for( let j in css ){
                styles.push(`${data[i].selector} {${j} : ${css[j]} }`)
            }
        }
        styles = `<style>${styles.join('\n')}</style>`
        return styles
    }
    render () {
        let {template, styles, data} = this.state
        let {pageid} = data.body
        
        return <div className="page-container">
            <div className="page-body" ref="body">
                <div className="_inner">
                    <div className="page-canvas">
                        <div dangerouslySetInnerHTML={{__html:this.getStyle()}}></div>
                        <div ref="canvas" className="canvas-content" id={pageid} dangerouslySetInnerHTML={{__html:template}}></div>
                    </div>
                </div>
            </div>
            <Side root={this}/>
        </div>
    }
}