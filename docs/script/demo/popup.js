import Popup from 'nj/popup'
import $ from 'jquery'
import Popover from 'nj/popover'
import nj, {React, render, Mui} from 'nj'
import Autocomplete from 'nj/autocomplete'

export const init = ()=>{
    var popup = Popup.create({
        title : 'Popup Title',
        template : '<div>12</div>',
        buttons : [
            {text:'确定'}, {text:'取消'}
        ]
    })

    $('#showPopup').click(()=>(
        popup.setDisplay(true)
    ))

    $('#alertPopup').click(()=>(
        Popup.alert({
            template : '操作成功！'
        })
    ))

    $('#confirmPopup').click(()=>(
        Popup.confirm({
            template : '确认操作?'
        }).then((res)=>{
            Popup.tip.show('ok', res?'选择了是':'选择了否')
        })
    ))


    Popover.create({
        template : '<div style="width:200px;height:140px">12313</div>',
        effect : 'normal',
        nearby : 'demo-popover-button'
    })




    render(
        <Autocomplete
            data={[1,2,3]}
            template={list=>{
                return <div>
                    {list}
                    <ul className="list-operat">
                        <li><Mui>add</Mui></li>
                    </ul>
                </div>
            }}
        />, 
        document.getElementById('suggest')
    )
}