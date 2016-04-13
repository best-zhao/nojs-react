import nj from 'nj'
const {React, render} = nj

import Switchs from 'nj/switch'
const {Switch, SwitchMenu, SwitchItem, start} = Switchs


module.exports = (container)=>{

    var demoWrap = document.getElementById('demo-switch-wrap')
    demoWrap && render(
        <Switch trigger="hover"> 
            <ul className="nj-switch-menus clearfix">
                <li><SwitchMenu>1</SwitchMenu></li>
                <li><SwitchMenu>2</SwitchMenu></li>
            </ul>
            <SwitchItem>11a</SwitchItem>
            <SwitchItem>22a</SwitchItem>
        </Switch>
    , demoWrap)
    start(container)

    // Switchs.getByHandle('myswitch').onChange((index,e)=>{
    //     console.log(index,e)
    // })
}