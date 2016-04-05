/*
 * form 表单验证
 */
require('../css/form.css')
var nj = require('./nojs-react'), {React, ReactDOM, mixins} = nj
var $ = require('jquery');

var formDirectives = {
    //当前组件渲染完毕后 检测是否有子组件
    childComponents () {
        var childNodes = this.props._childNodes || []
        childNodes.forEach((n)=>{
            this.refs.wrap.appendChild(n)
        })
        var children = elementGroups[this.props._componentType]
        children = children && children.children
        var components = []
        children && children.forEach((type)=>{
            components = components.concat(directiveInit(type, this.refs.wrap, this))
        })
        this.state.components = components
    },
    //验证当前组件的所有子组件的状态
    verifyChildComponents (real) {
        var valid = true
        // var components = this.state.components && this.state.components.length ? this.state.components : this.state.components
        this.state.components.forEach((item)=>{
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
    },
    //验证单个组件
    verify (real, fromParent) {
        var textField
        
        if( this.state.validing || this.state.status=='ok' ){
            return this.state.valid
        }
        var value = this.state.value
        // console.log(type,fromParent,this.refs.input)

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
                this.state.status = valid=='pending' ? 'pending' : valid ? 'ok' : 'error'
                break
            }
        }
        // console.log(real,valid,this.refs.input)

        if( !rules.required && !value ){//非必填项
            valid = true
        }
        // console.log(valid,this.refs.input, this.state.value, this.state.status)
        
        this.state.valid = valid      
        

        //input-group类 子组件输入时 需要更新父组件状态
        var parentComponent = this.state.parentComponent
        if( parentComponent && !fromParent ){
            //父组件是form时 有个特殊情况：更新form或导致所有子组件全部更新 为了减少干扰 引入real参数
            //real为false时 只验证其状态 不更新ui
            parentComponent.verify(parentComponent.props.type=='form'?false:true)
        }
        this.state.validing = null
        // 
        real && this.setState({valid:valid})
        return valid
    },

    //将组件加入到父组件中
    pushComponentToParent (component, name) {
        var parentComponents = getParentComponents(name)
        for( var i=0,n=parentComponents.length; i<n; i++ ){
            var parent = parentComponents[i]
            var _point = formDirectives[parent].point
            if( _point != null ){
                //只添加里当前组件最近的父组件
                formDirectives[parent].instances[_point].components.push(component)
                return formDirectives[parent].instances[_point].handle
            }
        }
    }
}

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
            if( i=='required' ){
                rules.required = true
            }
        }
    }
    if( formRules[type] ){
        rules.push({
            key : 'type',
            name : type,
            target : attrs.type,
            fn : formRules[type]
        })
    }

    return rules
}

var formMixin = {
    setValid (valid) {
        this.setState({valid:valid, status:valid?'ok':'error'})
    }
}


formDirectives['form'] = {
    instances : [],
    // point : 0,
    component : React.createClass({
        getInitialState () {
            var point = formDirectives.form.point = formDirectives.form.instances.length
            formDirectives.form.instances.push({
                handle : this,
                components : []
            })
            return {components:[]}
        },
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
            console.log('submit', valid)
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
            this.state.components.forEach((item)=>{
                item.setState({value:'',status:null})
            })
        },
        componentDidMount () {
            formDirectives.childComponents.call(this, this.refs.wrap)
            this.state.components = formDirectives.form.instances[formDirectives.form.point].components
            // console.log(this.state.components)
            formDirectives.form.point = null

            this.submitBeforeEvent = nj.utils.addEventQueue.call(this, 'onSubmitBefore')
            this.submitEvent = nj.utils.addEventQueue.call(this, 'onSubmit')

            this.state.verfiyCode = form.verifyCode()
            // console.log(this.refs)
        },
        verify (real) {
            var valid = formDirectives.verifyChildComponents.call(this, real)
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
}
formDirectives['input'] = {
    instances : [],
    component : React.createClass({ 
        //React.addons.LinkedStateMixin
        mixins: [formMixin],
        getInitialState () {
            var point = formDirectives.input.point = formDirectives.input.instances.length
            formDirectives.input.instances.push({
                handle : this,
                components : []
            })
            return {
                dirty : false,
                valid : true,
                rules : getRules.call(this),
                value : this.props.defaultValue,
                parentComponent : formDirectives.pushComponentToParent(this, 'input')
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
            
            var valid = formDirectives.verify.call(this, real, fromParent)
            if( !valid && parentComponent && parentComponent.state.action=='submit' ){
                // console.log(12345,this.refs.input,this.state.status)
                //this.refs.input.focus()
            }
            // console.log(valid,this.state.value,this.refs.input)
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
            if( newValue!==undefined && _valueLink && newValue!==_value ){
                _valueLink.value = this.state.value = newValue
                valueLink && valueLink.requestChange(newValue, true)
            }
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
                // window.setTimeout(()=>{
                //     valueLink.requestChange(_value, true)
                // }, 10)
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

                    // update && this.verify.call(this,false); 

                    this.changeEvent.complete()
                }
            }
            

            return valueLink
        },
        render () {            
            var attrs = this.props            
            var type = attrs.type       

            var className = []
            if( this.state.rules.length && this.state.status ){
                var mark = true
                if( !this.state.rules.required && !this.state.value ){
                    mark = false
                }
                mark && className.push('input-'+this.state.status)
            }
            this.props.className && className.push(this.props.className)

            var input = <input ref="input" {...attrs} onBlur={()=>{this.verify(this)}} className={className.join(' ')} valueLink={this.valueLink()} />

            switch(type){
                case 'checkbox':
                    input = <input {...attrs} ref="input" checkedLink={this.valueLink()} />;
                    break;
                case 'radio':
                    input = <input {...attrs} ref="input" checkedLink={this.valueLink()} />;
                    break;
                case 'textarea':
                    input = <textarea {...attrs} ref="input" onBlur={()=>{this.verify(this)}} className={className.join(' ')} valueLink={this.valueLink()} />
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
}
formDirectives['input-group'] = {
    instances : [],
    component : React.createClass({
        getInitialState () {
            var directive = formDirectives['input-group']
            var point = directive.point = directive.instances.length
            directive.instances.push({
                handle : this,
                components : []
            })
            return {
                valid : true,
                dirty : false,
                rules : getRules.call(this),
                components : [],
                parentComponent : formDirectives.pushComponentToParent(this, 'input-group')
            }
        },
        getDefaultProps () {
            return {type:'input-group'}
        },
        componentDidMount () {
            formDirectives.childComponents.call(this, this.refs.wrap)
            var directive = formDirectives['input-group']
            this.state.components = directive.instances[directive.point].components
            directive.point = null
        },
        verify (real, fromParent) {
            if( this.state.validing ){
                return this.state.valid
            }
            var valid//= formDirectives.verifyChildComponents.call(this)
            //取出选中的checkbox
            var checked = []
            this.state.components.forEach((item)=>{
                if( item.state.value ){
                    checked.push(item)
                }
            })
            //this.state.status = null
            // console.log(checked,this.state)
            this.state.value = checked.length ? checked : null//没选中时 兼顾required
            var valid = formDirectives.verify.call(this, real, fromParent)
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
}

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
                if( textReg.test(field.props.type) && parentComponent.props.type=='input-group' ){
                    // console.log(field)
                    showmsg = false
                }
            }else{
                showmsg = parentComponent.state.action=='submit'
            }
            
            if( !field.state.value && !rules.required ){//非必填项
                showmsg = false
            }
        }
        var novalidName = field.state.novalidName
        var novalidText = ''
        var ispending = field.state.valid=='pending'
        
        if( showmsg ){
            if( ispending ){
                novalidText = 'loading……'
            }else if( !field.state.valid ){
                novalidText = field.props.errorText || statusText[novalidName] || ''
            }

            var showicon = parentComponent.props.showicon  
            if( showicon!='all' && field.state.status != showicon ){
                return null
            }
        }

        // console.log(novalidName,rules,field.refs.input)
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
    mobile (value) {        
        return /^(13[0-9]|14[0-9]|15[0-9]|18[0-9])[0-9]{8}$/.test(value)
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
                // console.log(value, target, field)
                return value===field.state.value
            }
        }
    }
}

form.addRule = function(name, fn){
    formRules[name] = fn
}

var statusText = {
    required : '不能为空',
    email : '邮箱格式错误'
}

//<input required>将默认属性值为空的转化为required="required"
function parseAttrs(attrs){
    for( var i in attrs ){
        if( attrs[i]==='' && i!='defaultValue' ){
            attrs[i] = i
        }
    }
    return attrs
}

function directiveInit(type, context, parentComponent){
    if( !context ){
        return
    }
    var components = []
    var formElements = nj.utils.toArray(context.querySelectorAll('nj-'+type))
    formElements.forEach((node)=>{
        var c = initial(node, type)
        c && components.push(c)
    })
    return components
}

var initial = (node, type) => {
    // console.log(2222,type)
    var el = document.createElement('span')
    node.parentNode.insertBefore(el, node);
    // nj.utils.toArray(node.childNodes).forEach((n)=>{
    //     console.log(n)
    //     el.appendChild(n)
    // })
    // 
    node.parentNode.removeChild(node);

    var Component = formDirectives[type].component
    if( Component ){
        var options = parseAttrs(nj.utils.getAttributes(node))
        options._childNodes = nj.utils.toArray(node.childNodes)
        options._componentType = type
        options.text = options.text || node.innerText
        // if( options.value!=undefined ){
        //     options.defaultValue = options.value
        //     delete options.value
        // }
        // options._node = el
        return ReactDOM.render(<Component {...options} />, el)
    }
}


var elementGroups = {
    'form' : {children:['input-group','input']}
    ,'input-group' : {children:['input']}
    ,'input' : {}
}

//nj-input => Input / nj-input-group => InputGroup
function getComponentName(name){
    return name.replace('nj-', '').replace(/^(\w)/,function(a,b,c){
      return b.toUpperCase()
    }).replace(/-(\w)/,function(a,b,c){
      return b.toUpperCase()
    })
}

//获取可能存在的父组件
function getParentComponents(name){
    var parents = []
    for( var i in elementGroups ){
        var children = elementGroups[i].children
        if( children && children.indexOf(name)>=0 ){
            parents.push(i)
        }
    }
    return parents.reverse()
}

function start(container){
    for( var i in elementGroups ){
        directiveInit(i, container||document.body)
    }
}
$(function(){
    start()
})

//验证码
form.verifyCode = function(verify, refresh){
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

form.start = start

for( var i in elementGroups ){
    form[getComponentName(i)] = formDirectives[i].component
}
form.getByHandle = (handle)=> {
    for( var i=0,n=formDirectives.form.instances.length; i<n; i++ ){
        var item = formDirectives.form.instances[i].handle
        if( item.props.handle == handle ){
            return item
        }
    }
    
}

function getMessage(tip, method){
    return tip || form.message[method] || '';
}

form.reg = {
	/*
	 * 常用规则
	 */
	isNull : function(val){
		if(val.replace(/\s/g,"")!=""){return true;}else{return false;}
	},
	isEmail : function(val){
		var p=/^\w+(?:[-+.']\w+)*@\w+(?:[-.]\w+)*\.\w+(?:[-.]\w+)*$/;
    	if(p.test(val)){return true;}else{return false;}
	},
	isQQ : function(val){//qq
		var p=/^\s*[.0-9]{5,10}\s*$/;
    	if(p.test(val)){return true;}else{return false;}
	},
	isUrl:function(val){//验证输入是否是合法url地址 可以包含中文\u2E80-\u9FFF
	    if( typeof val!='string' ){
	        return false;
	    }
	    val = val.split(/[\?#]/)[0];
        var p=/^(?:http(?:s)?:\/\/)?([\w-]+\.)+[\w-]+(?:\/[\w\W]*)?$/;
        if(p.test(val)){return true;}else{return false;}
    },
	isMobile:function(val){//验证是否是合法的手机号码
	 	var p = /^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])[0-9]{8}$/;
		if(p.test(val)){return true;}else{return false;}
	},
	isTel:function(val){//验证是否是合法的座机号码
	 	var p = /^\d{2,5}?[-]?\d{5,8}([-]\d{0,1})?$/;
		if(p.test(val)){return true;}else{return false;}
	},
	isTel400:function(val){//验证是否是合法的400电话
	 	var p = /^(400)[-]?\d{3}[-]?\d{4}$/;
		if(p.test(val)){return true;}else{return false;}
	},
	isIdcard:function(val){//验证身份证号是否合法18位或17位带字母
		var p = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}(?:\d|[a-zA-Z])$/;
		if(p.test(val)){return true;}else{return false;}
	},
	specialCode : function(val){//是否包含特殊字符
		if(!/^[\u4e00-\u9fa5\w]*$/.test(val)){
			return false;
		}else{
			return true;
		}
	},
	/*
	 * 判断字符长度是否合法 或者 判断类似checkbox的个数(val为数字)
	 * @options:必选参数，{min:最小长度,max:最大长度,其中的大于或小于都包含等于}
	 */
	isLength:function(val,options){
		if (!options) {return;}
		//计算字符个数，一个汉字计算为2个字符
		var strLength = function(a) {
			var L = 0;
			for(var i=0; i<a.length; i++) {
				if(/[\u4e00-\u9fa5]/.test(a.charAt(i))) {L+=2;}
				else {L+=1;}
			}
			return L;
		};
		var options=options,
			len = typeof val==='string' ? strLength(val) : typeof val==='number' ? val : 0,
			test = true;
		if(options.min){
			if(len<options.min){
				test = false;
			}
		}
		if(options.max){
			if(len>options.max){
				test = false;
			}
		}	
		return test;	
	},
	/*
       	 验证输入是否是数字
        @options:可选参数，{min:最小值,max:最大值,decimals:可以带几位小数,type:int整数}
    */
	isNum:function(val,opt){
        var opt = opt || {},
        	p,
			test = !isNaN(val);
		if(opt.decimals){
			p = eval("/^-?\\d+(?:\\.\\d{1,"+opt.decimals+"})?$/");
			test = p.test(val);
		}	
        if((opt.min||opt.min==0) && val<opt.min){
            test = false;
        }
        if((opt.max||opt.max==0) && val>opt.max){
            test = false;
        }		
		if(opt.type=='int' && val.indexOf(".")!=-1){
			test = false;
		}
		if(val.lastIndexOf('.')==val.length-1){
			test = false;
		}
    	return test;
    },
	//ajax验证
	remote : function(val,param,element){
		var T = this,
			data;
		param = param || {};
		if( param.beforeSend && param.beforeSend(element)==false ){
		    return 'pending';
		}
		data = param.data = param.data || {};
		
		if( typeof param.data=='function' ){				
			data = param.data.call(this) || {};
		}
		
		if(param['name']){
			data[ param['name'] ] = val;
		}else{
			data[ element.attr("name") ] = val;
		}
		var _success = param.success;
		$.ajax({
			url : param.url,
			type : param.type || "get",
			data : data,
			context : param.context,
			dataType : param.dataType || "json",				
			success : function(json){
				//if(!json){return;}
				//element.data( "remote", json );
				_success && _success(json, element);
				
				if( (json && json.state==1 || json.status==1) ||
				   param.check && param.check(json)//自定义返回数据是否符合
				){//ok
					element.data("state",true);
					form.state(element,'ok', json.info || '', T.options && T.options.icoPosition);
					
					param.callback && param.callback();//用于submit 返回成功后继续submit操作
					param.callback = null;
				}else{//error
					element.data("state",false);						
					form.state( element, 'error', json.info || element.data("tip"), T.options && T.options.icoPosition);
				}
			}
		})
		return 'pending';
	}
}
/*填充表单数据*/
form.fill = function(options){
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
form.parse = function(form, dataType){
    if( !form || !form.length ){
        return;
    }
    var _form = form.find('form'),
        Form = form[0].tagName.toLowerCase()=='form' ? form : _form.length ? _form : null,
        data;
    
    dataType = dataType || 'string';
        
    if( Form ){
        data = Form.serialize();
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
form.post = function(options){
    options = options || {};
    var _form = options.form
    if( !_form ){
        _form = $('<form action="" method="post"></form>').appendTo(document.body)[0];
    }
        
    var name = 'iframe_' + (+new Date),
        iframe = $('<iframe src="" name="'+name+'" style="display:none"></iframe>').appendTo(document.body),
        callback = 'jsoncallback_' + (+new Date);

    var data =  $.extend(true, options.data, {jsoncallback:callback});
    form.fill({
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

module.exports = form;
