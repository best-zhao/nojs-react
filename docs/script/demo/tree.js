import Tree, {LinkTree} from 'nj/tree'
import $ from 'jquery'
import nj, {React, render} from 'nj'
import 'nj/touch'

export const init = ()=>{
    let options = {
        rootID : 1,
        type : 'list',
        selected:[5, 52, 101],
        maxlevel : 3,
        onFetch : (promise, parentid) => {
            // console.log(parentid)
            return promise.then(json=>json.data)
        },
        data : 'http://nolure.github.io/nojs-react/docs/menu.json?parent_id='
        // data : [
        //     {"id":2, "name":"Mask", "parentid":1},
        //         {"id":21, "name":"Mask1", "parentid":2},
        //     {"id":3, "name":"Popup", "parentid":1},
        //     {"id":5, "name":"Trees", "parentid":1},
        //         {"id":51, "name":"Tree", "parentid":5, "link":"tree/tree"},
        //         {"id":52, "name":"SelectTree", "parentid":5, "link":"tree/selectTree"},
        //         {"id":53, "name":"LinkTree", "parentid":5, "link":"tree/linkTree"},
        //         {"id":54, "name":"JsonTree", "parentid":5},
        //     {"id":6, "name":"Form Verify", "parentid":1, "link":"form/form", "demo":"form"},
        //     {"id":7, "name":"Switch", "parentid":1, "link":"switch"},
        //     {"id":8, "name":"Scroll", "parentid":1, "link":"scroll"},
        //     {"id":9, "name":"Face", "parentid":1, "link":"face"},
        //     {"id":10, "name":"Auto-complete", "parentid":1, "link":"autocomplete"},
        //     {"id":11,"name":"Datepicker", "parentid":1, "link":"datepicker"},
        //     {"id":12,"name":"Editor", "parentid":1, "link":"editor"}
        // ]
    }

    class MenuPicker extends React.Component{
        constructor(props) {
            super(props)
            this.state = {
                selected : []
            }
        }
        changeHandle (node, level) {
            let {tree} = this.refs
            this.setState({selected:tree.state.selected})
            console.log(node, level)
        }
        render () {
            let {selected} = this.state
            return <div>{selected.map(item=><span key={item.id} style={{marginRight:20}}>{item.name}</span>)}
                <LinkTree ref="tree" {...options} onChange={this.changeHandle.bind(this)}/>
            </div>
        }
    } 
    render(
        <MenuPicker />, 
        document.getElementById('treeLink')
    )
}
