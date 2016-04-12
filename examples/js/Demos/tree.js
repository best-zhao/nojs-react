import nj from 'nj'
const {React, render, ReactDOM} = nj
import Tree from 'nj/tree'
const {SelectTree, LinkTree} = Tree
import $ from 'jquery'

module.exports = ()=>{
    var testData = [
        {"id":1, "name":"Components","open":1},
        {"id":2, "name":"Mask", "parentid":1, "link":"mask"}
    ]


    var treeNormal = document.getElementById('treeNormal')
    treeNormal && render(<Tree data={'./menu.json?parentid='}/>, treeNormal)
    .onFetch(function(promise,parentid){
        return promise.then(json=>json[parentid==this.state.rootID?'data':'data'+parentid])
    })


    var treeSelect = document.getElementById('treeSelect')
    treeSelect && $.getJSON('./menu.json?parentid=').then(json=>{
        var select = render(<SelectTree data={json.data} defaultValue={3}/>, treeSelect)
        .onChange(function(value){
            console.log(value)
        })
        // console.log(ReactDOM.findDOMNode(select))
    })



    var treeLink = document.getElementById('treeLink')
    treeLink && render(<LinkTree data={'./menu.json?parentid='} maxlevel='3' selected={[1,5,53]} />, treeLink)
        .onFetch(function(promise,parentid){
            return promise.then(json=>json[parentid==this.state.rootID?'data':'data'+parentid])
        })
        .onChange(function(node,e){
            // console.log(node,e)
        })
    
}