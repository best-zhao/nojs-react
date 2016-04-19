import nj from 'nj'
const {React, render} = nj
import Face from 'nj/face'

module.exports = (container)=>{
    var rs = 'http://css.mdbimg.com'
    Face.config({
        themeItems : {
            'default' : {url:rs+"/js/lib/Kindeditor/plugins/emoticons/images/"},
            'mdb' : {
                name : '长颈鹿',
                url : rs+'/img/face/mdb/',
                item : {'0':'哎呀','1':'傲慢','2':'暴怒','3':'鄙视','4':'奋斗','5':'愤怒','6':'干什么','7':'可爱','8':'酷酷','9':'流泪','10':'秒杀',
                        '11':'哦错了','12':'伤心','13':'生气','14':'思索','15':'微笑','16':'委屈','17':'无语'
                },
                fix : ".png"
            },
            'dog' : {
                name : '小狗',
                url : rs+'/img/face/dog/',
                item : {
                    '1' : '微笑','2':'喜欢','3':'发呆','4':'大哭','5':'亲亲','6':'发火','7':'大笑','8':'惊讶','9':'伤心','10':'冷汗',
                    '11':'可爱','12':'加油','13':'疑问','14':'嘘','15':'无语','16':'晕','17':'悲哀',
                    '18':'拜拜','19':'汗','20':'挖鼻孔','21':'牛','22':'尴尬','23':'可怜','24':'阴险','25':'离开'
                },
                fix : ".gif"
            }
        },
        themes : ['dog','mdb','default']
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