/*
 * form 表单验证
 */
require('../css/form.css')
var nj = require('./nojs-react')
var {React, ReactDOM, mixins} = nj
var $ = require('jquery')

var Directive = require('../mixins/directiveComponent').default

var formDirectives = {}

var getRules = function(){
    var attrs = this.props
    var type = attrs.type
    var rules = []
    
    for( var i in attrs ){
        var name = i.replace(/^nj-/, '')
        var rule = formRules[i] || formRules[name]

        if( rule ){//有效规则
            if( formRules[i] ){
                name = i
            }
            rules[i=='required'?'unshift':'push']({
                key : i,
                name : name,
                target : attrs[i],
                fn : rule
            })            
        }
    }
    if( formRules[type] ){//type="email"
        rules.push({
            key : 'type',
            name : type,
            target : attrs.type,
            fn : formRules[type]
        })
    }
    if( (type=='input-group' && attrs['nj-minlength']) || attrs['required'] ){
        rules.required = true
    }

    return rules
}

var formMixin = {
    //在组件外部手动更新验证状态 如异步场景
    setValid (valid) {
        this.setState({valid:valid, status:valid?'ok':'error'})
    }
}

//验证当前组件的所有子组件的状态
var verifyChildComponents = function(real){
    var valid = true
    this.state.childComponents.forEach((item)=>{
        if( item.verify ){
            var _valid = item.verify(real, true)
            if( !_valid ){
                valid = _valid
                // console.log(valid,item.props.node)
            }
        }
    })
    this.setState({valid:valid})
    return valid
}

//验证单个组件
var verifyField = function(real, fromParent) {
    var textField
    
    if( this.state.validing || this.state.status=='ok' ){
        return this.state.valid
    }
    var value = this.state.value

    real = real===false ? false : (real||true)
    this.state.validing = true

    //status有值用来保存状态 不重复验证 输入后清除状态 重新验证
    // this.state.status = null
    this.state.status = 'ok'

    var valid = true
    var rules = this.state.rules

    for( var i=0,n=rules.length; i<n; i++ ){
        var rule = rules[i]
        valid = rule.fn.call(this, value, rule.target)
        // console.log(valid,rule,value)
        if( !valid || valid=='pending' ){
            this.state.novalidName = rule.name            
            break
        }
    }    

    if( !rules.required && !value ){//非必填项
        valid = true
    }

    //'input-group' 验证子项是否全部通过
    if( valid && this.props.type=='input-group' ){
        valid = this.state.valid_all
    }
    // console.log(valid,this.refs.input, this.state.value, this.state.status)
    this.state.status = valid=='pending' ? 'pending' : valid ? 'ok' : 'error'
    this.state.valid = valid
    

    //input-group类 子组件输入时 需要更新父组件状态
    var parentComponent = this.state.parentComponent
    if( parentComponent && !fromParent ){
        //父组件是form时 有个特殊情况：更新form或导致所有子组件全部更新 为了减少干扰 引入real参数
        //real为false时 只验证其状态 不更新ui
        parentComponent.verify(parentComponent.props.type=='form'?false:true)
    }
    this.state.validing = null
    // fromParent && console.log(real,valid)
    // console.log(real,valid,this.state.status,this.refs.input,parentComponent)
    real && this.setState({valid:valid})
    return valid
} 

var Form = formDirectives['form'] = React.createClass({
    mixins : [mixins.childComponents.config],    
    getDefaultProps () {
        return {type:'form', method:'post',showicon:'all',noValidate:true}
    },    
    handleSubmit (e) {
        e = e || window.event
        this.state.action = 'submit'
        window.setTimeout(()=>{
            this.state.action = null
        }, 1)
        this.submitBeforeEvent.complete(e)
        if( e.isDefaultPrevented() ){
            return
        }

        var valid = this.verify()
        if( !valid ){//未通过 阻止提交
            e.preventDefault()
            return
        }
        // if( this.props.ajaxsubmit ){
        //     var method = this.props.method.toLowerCase()
        //     var formEl = this.refs.wrap
        //     $.ajax({
        //         url : formEl.action,
        //         type : method,
        //         data : $(formEl).serialize(),
        //         dataType : 'json',
        //         success (json) {

        //         }
        //     })
        //     e.preventDefault()
        // }
        this.submitEvent.complete(e)
        // console.log('submit', valid)
        // if( e.isDefaultPrevented() ){//调用preventDefault阻止默认事件
        //     return
        // }
    },
    submit (options) {//从外部触发submit动作
        var el = this.refs.wrap
        var result = false;  
        if (el.fireEvent) {  //IE fire event 
          // el.onsubmit = (e)=>{
          //   this.handleSubmit(e)
          // }
          result = el.fireEvent('onsubmit');  
        } else if (document.createEvent) {  
          var ev = document.createEvent('HTMLEvents');  
          ev.initEvent('submit', false, true);  
          result = el.dispatchEvent(ev);
        }
        result && el.submit()//表单提交是异步的 所以下面return不是正确的valid
        return this.state.valid
    },
    reset () {
        this.state.childComponents.forEach((item)=>{
            item.setState({value:'',status:null})
        })
    },     
    componentDidMount () {
        directive.getChildComponents(this)   
        // console.log(this.state.childComponents) 

        this.submitBeforeEvent = nj.utils.addEventQueue.call(this, 'onSubmitBefore')
        this.submitEvent = nj.utils.addEventQueue.call(this, 'onSubmit')
        this.verifyEvent = nj.utils.addEventQueue.call(this, 'onVerify')

        this.state.verfiyCode = Form.verifyCode()

        var {parentComponent} = this.props//form表单所处的父组件
        if( parentComponent ){                
            //将表单状态同步到外部
            this.onVerify((valid)=>{
                parentComponent.setState({valid:valid})
            })
        }
    },
    verify (real) {
        var valid = verifyChildComponents.call(this, real)
        this.verifyEvent.complete(valid)
        return valid
    },
    render () {
        return (
            <form {...this.props} ref="wrap" 
                onSubmit={this.handleSubmit}>
                {this.props.children}
            </form>
        )
    }
})
formDirectives['input-group'] = React.createClass({
    mixins : [mixins.childComponents.setParents([formDirectives['form']])],
    getInitialState () {
        return {
            valid : true,
            dirty : false,
            rules : getRules.call(this)
        }
    },
    getDefaultProps (a) {
        return {type:'input-group', showicon:'all'}
    },
    componentDidMount () {
        directive.getChildComponents(this)
    },
    verify (real, fromParent) {
        if( this.state.validing ){
            return this.state.valid
        }
        var valid//= verifyChildComponents.call(this)
        //取出选中的checkbox
        var checked = []
        var hasnovalid
        this.state.childComponents.forEach((item)=>{
            // console.log(item.state.value,item.state.valid, item.refs.input)
            if( !item.state.valid ){
                hasnovalid = true
            }else if( item.state.value ){
                checked.push(item)
            }
        })
        //this.state.status = null
        //子项是否全部验证通过[隐形规则]
        //当chekced满足了个数验证时 其中有非必填项输入了错误的值时 通过该属性检测group整体状态
        this.state.valid_all = !hasnovalid

        this.state.value = checked.length ? checked : null//没选中时 兼顾required
        var valid = verifyField.call(this, real, fromParent)

        return valid
    },
    render () {        
        return (
            <span>
                <span className="nj-input-group" ref="wrap">
                    {this.props.children}
                </span>
                <VerifyStatus field={this} />
            </span>
        )
    }
})
formDirectives['input'] = React.createClass({ 
    //React.addons.LinkedStateMixin
    mixins: [
        formMixin, 
        mixins.childComponents.setParents([formDirectives['input-group'], formDirectives['form']])
    ],
    getInitialState () {        
        return {
            dirty : false,
            valid : true,
            rules : getRules.call(this),
            value : this.props.defaultValue
        }
    },  
    getDefaultProps () {
        var props = {type:'text'}
        // console.log(this.props)
        return props
    },
    verify (real, fromParent) {

        //更新input-group
        var parentComponent = this.state.parentComponent
        if( parentComponent ){
            parentComponent.setState({dirty:true})
        }

        var valid = verifyField.call(this, real, fromParent)
        //if( !valid && parentComponent && parentComponent.state.action=='submit' ){
            //this.refs.input.focus()
        //}
        return valid
    },   
    componentDidMount () {
        this.changeEvent = nj.utils.addEventQueue.call(this, 'onChange')
        //对外引用组件
        this.refs.input.$handle = this
    },
    componentWillUpdate (nextProps, nextState) {
        var _valueLink = this.props.valueLink
        var _value = _valueLink && _valueLink.value
        var newValue = nextState.value

        /**
         * 组件内部state更新 需同步到组件外部
         */
        var valueLink = this.state.valueLink
        //if( newValue!==undefined && _valueLink && newValue!==_value ){
            //_valueLink.value = this.state.value = newValue
            //valueLink && valueLink.requestChange(newValue, true)
        //}
        // console.log(0,this.props.valueLink,this.state.value,newValue,this.state.valueLink)
    },     
    valueLink () {
        var _valueLink = this.props.valueLink
        var _value = _valueLink && _valueLink.value

        var type = this.props.type

        // console.log(11,_value,this.state.value)
        //外部valueLink改变状态后 组件内部需同步
        if( _valueLink && _value !== this.state.value && _value!=undefined ){
            this.state.value = _value

            window.setTimeout(()=>{
                valueLink.requestChange(_value, true)
            }, 10)
        }

        
        var valueLink = this.state.valueLink = {
            value : this.state.value,
            requestChange : (newValue, update)=> {
                var textField = textReg.test(type);
                _valueLink && _valueLink.requestChange(newValue);//合并外部双向绑定
                // console.log(22,newValue,this.state.value)
                this.state.value = newValue
                this.state.status = null

                this.setState({
                    value : newValue,
                    dirty : true
                })

                update = update===false ? false : (update||!textField)

                var parentComponent = this.state.parentComponent
                if( parentComponent ){
                    parentComponent.state.status = null
                    parentComponent.state.dirty = true
                }

                update && this.verify.call(this,false); 

                this.changeEvent.complete()
            }
        }
        

        return valueLink
    },
    render () {            
        var attrs = this.props            
        var type = attrs.type  
        var {rules,dirty,status,value,parentComponent} = this.state    

        var className = []
        if( rules.length && status ){
            var mark = true
            if( !rules.required && !value ){
                mark = false
            }
            if( !dirty && (!parentComponent || parentComponent.state.action!='submit') ){
                mark = false
            }
            // console.log(mark,dirty, parentComponent.state.action, this.refs.input)
            mark && className.push('input-'+status)
        }
        this.props.className && className.push(this.props.className)

        var input = <input ref="input" {...attrs} onKeyUp={()=>{this.verify(true)}} className={className.join(' ')} valueLink={this.valueLink()} />

        switch(type){
            case 'checkbox':
                input = <input {...attrs} ref="input" checkedLink={this.valueLink()} />;
                break;
            case 'radio':
                input = <input {...attrs} ref="input" checkedLink={this.valueLink()} />;
                break;
            case 'textarea':
                input = <textarea {...attrs} ref="input" onKeyUp={()=>{this.verify(true)}} className={className.join(' ')} valueLink={this.valueLink()} />
        }            
        return (
            <label>
                {input}
                <span>{this.props.text}</span>
                <VerifyStatus field={this} />
            </label>
        )
    }
})


var textReg = /^(text|textarea|number|email|password)$/

//验证状态显示
var VerifyStatus = React.createClass({
    render () {
        var field = this.props.field
        var rules = field.state.rules
        var showmsg = rules.length
        var parentComponent = field.state.parentComponent
        
        if( showmsg ){
            if( field.state.dirty ){
                //checkbox组合 子项不显示
                var textField
                
                //if( textReg.test(field.props.type) && parentComponent && parentComponent.props.type=='input-group' ){
                    //showmsg = false
                //}
            }else if(parentComponent){
                showmsg = parentComponent.state.action=='submit'
            }
            
            if( !field.state.value && !rules.required ){//非必填项
                showmsg = false
            }
        }
        var novalidName = field.state.novalidName
        var novalidText = ''
        var ispending = field.state.valid=='pending'

        // console.log(showmsg, field.state.valid,field.state.status,field.refs.input)
        
        if( showmsg ){
            if( ispending ){
                novalidText = 'loading……'
            }else if( !field.state.valid ){
                novalidText = field.props.errortext || statusText[novalidName] || ''
            }

            var showicon = parentComponent && parentComponent.props.showicon  
            if( showicon!='all' && field.state.status != showicon ){
                return null
            }
            //适合'input-group'子项为text类
            if( field.props.type=='input-group' ){  
                if( !field.state.valid_all ){
                    //valid_all=false: 有未通过的验证项时 状态体现在子项上 不显示group状态
                    return null
                }else if( field.state.valid ){
                    var child = field.state.childComponents[0]
                    if( child && textReg.test(child.props.type) ){
                        //已输入的全部通过 状态体现在子项上 group无需显示状态 
                        return null
                    }
                }                
            }
        }

        // console.log(showmsg,field.state.status,field.refs.input)
        // console.log('verifyStatus:',showmsg,field.state.status)
        return showmsg && field.state.status ? (
            <span className={'nj-form-msg'}>
                <span className={'nj-form-msg-'+field.state.status}>{novalidText}</span>
            </span>
        ) : null
    }
})

var form = {}

var formRules = {
    required (value) {
        return !!value
    },
    minlength (value, target) {
        return value && value.length >= parseInt(target)
    },
    maxlength (value, target) {
        return value && value.length <= parseInt(target)
    },
    email (value) {
        return /^\w+(?:[-+.']\w+)*@\w+(?:[-.]\w+)*\.\w+(?:[-.]\w+)*$/.test(value)
    },
    number (value) {
        return !isNaN(value)
    },
    url (value) {//验证输入是否是合法url地址 可以包含中文\u2E80-\u9FFF
        return /^(?:http(?:s)?:\/\/)?([\w-]+\.)+[\w-]+(?:\/[\w\W]*)?$/.test(value.split(/[\?#]/)[0]);
    },
    mobile (value) {        
        return /^(13[0-9]|14[0-9]|15[0-9]|18[0-9])[0-9]{8}$/.test(value)
    },
    qq (value) {
        return /^\s*[.0-9]{5,10}\s*$/.test(value)
    },
    telephone (value) {
        return /^\d{2,5}?[-]?\d{5,8}([-]\d{0,1})?$/.test(value)
    },
    tel400 (value) {
        return /^(400)[-]?\d{3}[-]?\d{4}$/.test(value)
    },
    idcard (value) {//验证身份证号是否合法18位或17位带字母
        return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}(?:\d|[a-zA-Z])$/.test(value)
    },
    //二次确认输入项 target为比较的name值
    confirm (value, target) {
        var instances = formDirectives['input'].instances
        var self = this
        var field
        for( var i=0,n=instances.length; i<n; i++ ){
            field = instances[i].handle
            if( field.props.name==target ){
                if( !field.state.addConfirmEvent ){
                    //当target组件被重新修改时 清空当前组件的验证状态
                    field.onChange(function(){
                        self.state.status = null
                        self.verify()
                        //self.setState({status:null, valid:false})
                    })
                    field.state.addConfirmEvent = true
                }
                return value===field.state.value
            }
        }
    }
}
//自定义规则
form.addRule = function(name, fn){
    formRules[name] = fn
}

var statusText = {
    required : '不能为空',
    email : '邮箱格式错误',
    mobile : '手机号码格式错误'
}

var directive = new Directive({
    elementGroups : {
        'form' : {children:['input-group','input'], component:formDirectives['form']},
        'input-group' : {children:['input'], component:formDirectives['input-group']},
        'input' : {component:formDirectives['input']}
    },
    exports : exports
})

//验证码
Form.verifyCode = function(verify, refresh){
    verify = verify || 'verify_img';
    refresh = refresh || 'verify_refresh';
    verify = document.getElementById(verify);
    refresh = document.getElementById(refresh);
    if( !verify || !refresh ){
        return {}
    }
    verify.onclick = function(){
        var _src = this.src.split('?'),
            ver = _src[1] || '',
            r = /((\?|&)t=)[\d]+/;
        if( r.test(ver) ){
            ver = _src[0] + '?' + ver.replace(r,'$1'+(+new Date));
        }else{
            ver = 't='+(+new Date);
        }
        this.src = _src[0] + '?' + ver;
        //this.src= domain.login+'/Index-loginverify.html?t='+(+new Date);
    }
    refresh.onclick = function(){
        verify.click();
        return false;
    }
    return {
        refresh : function(){
            verify.click();
        }
    }
}



/*填充表单数据*/
Form.fill = function(options){
    options = options || {};
        
    var Form = $(options.form||document.forms[0]),
        data = options.data,
        i, item, type, value;
        
    if( !Form.length || $.type(data)!='object' ){
        return;
    }
    
    for( i in data ){
        item = Form.find('[name="'+i+'"]');
        if( !item.length ){
            if( options.always ){//当options.always为true时 已隐藏域的形式填充到表单中
                Form.append('<input name="'+i+'" type="hidden" value="'+data[i]+'" />');
            }
            continue;
        }
        type = item[0].type;
        value = data[i];
        if( type=='text' || type=='hidden' || type=='textarea' || type=='select-one' && typeof value=='string' ){
            item.val(value);
            
        }else if( type=='radio' ){
            item.filter('[value="'+value+'"]').attr('checked', 'checked');
            
        }else if( type=='checkbox' && $.type(value)=='array' ){
            $.each(value, function(i,v){
                item.filter('[value="'+v+'"]').click();
            })
        }
    }
}

/*
 * 格式化表单数据
 * 主要针对非form对象 
 * 本身就是form对象则直接返回form.serialize()
 */
Form.parse = function(form, dataType){
    if( !form || !form.length ){
        return;
    }
    var _form = form.find('form'),
        $form = form[0].tagName.toLowerCase()=='form' ? form : _form.length ? _form : null,
        data;
    
    dataType = dataType || 'string';
        
    if( $form ){
        data = $form.serialize();
    }else{
        //Form = $('<form style="display:none"></form>').appendTo(document.body);
        //clone无法拷贝select值
        //Form.append(form.clone(true));
        //data = Form.serialize();
        //Form.remove();
        var item = form.find('input,textarea,select,button'),
            i=0, n=item.length, data = {};
        for( ; i<n; i++ ){
            if( item[i].name ){
                data[item[i].name] = item[i].value;
            }
        }
    }
    return data;
}

/*
 * post跨域 使用iframe实现
 */
Form.post = function(options){
    options = options || {};
    var _form = options.form
    if( !_form ){
        _form = $('<form action="" method="post"></form>').appendTo(document.body)[0];
    }
        
    var name = 'iframe_' + (+new Date),
        iframe = $('<iframe src="" name="'+name+'" style="display:none"></iframe>').appendTo(document.body),
        callback = 'jsoncallback_' + (+new Date);

    var data =  $.extend(true, options.data, {jsoncallback:callback});
    Form.fill({
        form : $(_form),
        data : data,
        always : true
    })

    if( options.url ){
        _form.action = options.url
    }
    _form.method = 'post';
    _form.target = name;
    
    window[callback] = function(json){
        // options.complete && options.complete.call(options, json);
        options.success && options.success.call(options, json);
        
        try{
            delete window[callback];
        }catch(e){//ie bug
            window[callback] = null;
        }
        
        iframe.remove();
        iframe = null;
    }
    options.beforeSend && options.beforeSend.call(options);
    
    //document.domain = domain.host;//此句可以在beforeSend中配置
    _form.submit();
}

