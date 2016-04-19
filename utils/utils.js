var $ = require('jquery');
var actions = require('./asyncActions')

module.exports = {

    /*
     * 所有依赖dom的ui组件都可以通过id,element,jQuery来获取dom元素
     */
    dom (selector) {
        if( !selector ){return;} 
        var type = typeof selector, elem;
        if( type=='string' ){//通过id
            elem = $('#'+selector);
        }else if( type=='object' ){
            elem = selector.nodeType||selector===window||selector===window.parent ? $(selector) : selector;
        }
        elem = elem.length ? elem : null;        
        return elem;
    },

    //部分组件需要动态插入dom 创建一个该类组件的容器
    createContainer (className) {
      var layerElement = document.createElement('div');
      layerElement.className = className;
      document.body.appendChild(layerElement);
      return layerElement
    },

    /**
     * 创建事件队列
     * var componentEvent = addEventQueue.call(component, 'onShow', when)
     * component就具备了'onShow'事件
     * 执行事件的时机 componentEvent.complete(args) 或者在when函数中定义
     */
    addEventQueue (eventName, when) {
        var self = this
        var queue = []//this['_'+eventName+'_queue'] =
        queue.name = eventName
        function add(handle){
            handle && queue.push(handle)
            return this
        }
        function complete(){
          var args = Array.prototype.slice.call(arguments)
          var res
          queue.forEach(function(fn){
              res = fn.apply(self, args)
          })
          return res
        }
        //某些场景 在事件列表执行完成之后需要清空队列
        function end(){
            queue.length = 0
        }
        this[eventName] = add.bind(this)
        typeof when=='function' && when.call(this, complete)
        return {
          add : add,
          complete : complete,
          end : end
        }
    },

    //检测元素是否存在真实dom中
    elementInDOM (element) {
        if( !element ){
            return
        }
        var body = document.body
        var parent = element
        while ( parent = parent.parentNode ){
            if( parent === body ){
                break;
            }
        }
        if( parent ){
            return true
        }
    },
    browser : function(){
        //检测浏览器
        var u = navigator.userAgent.toLowerCase(),
        v = u.match(/(?:firefox|opera|safari|chrome|msie)[\/: ]([\d.]+)/),
        //mozilla/5.0 (windows nt 6.1; wow64; trident/7.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; .net4.0e; rv:11.0) like gecko
        //ie11已去除msie标示 可通过trident检测
        fn = {
            version:v?v[0]:' ',//浏览器版本号
            safari:/version.+safari/.test(u),
            chrome:/chrome/.test(u),
            firefox:/firefox/.test(u),
            ie:/msie/.test(u) || /trident/.test(u),
            ie6:/msie 6.0/.test(u),
            ie7:/msie 7.0/.test(u),
            ie8:/msie 8.0/.test(u),
            ie9:/msie 9.0/.test(u),
            opera: /opera/.test(u) 
        }, state;
        function check( name ){
            //多个用逗号隔开 如'ie6 ie7'
            state = false;
            name = name.split(' ');
            $.each( name, function( i, val ){
                if( fn[ val ] ){
                    state = true;
                    return false;
                }
            })
            return state;
        }        
        //check.fn = fn;
        check.version = parseInt(fn.version.split(/[\/: ]/)[1].split('.')[0]);
        return check; 
    }(),

    /*
     * 读取cookie值: cookie("key"); 
     * 设置/新建cookie的值:    cookie("key", "value");
     * 新建一个cookie 包括有效期(天数) 路径 域名等:cookie("key", "value", {expires: 7, path: '/', domain: 'a.com', secure: true});
     * 删除一个cookie:cookie("key", null);    
     */  
    cookie ( name, value, options ) {
        if (typeof value != 'undefined') {
            options = options || {};
            if (value === null) {
                value = '';
                options.expires = -1;
            }
            var expires = '';
            if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
                var date;
                if (typeof options.expires == 'number') {
                    date = new Date();
                    date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
                } else {
                    date = options.expires;
                }
                expires = '; expires=' + date.toUTCString();
            }
            var path = options.path ? '; path=' + (options.path) : '';
            var domain = options.domain ? '; domain=' + (options.domain) : '';
            var secure = options.secure ? '; secure' : '';
            document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
        } else { 
            var cookieValue = '';
            if (document.cookie && document.cookie != '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = $.trim(cookies[i]);
                    if (cookie.substring(0, name.length + 1) == (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }
    },

    /**
     * 本地数据存储
     * localStorage.set(key,value,options)
     * localStorage.get(key)
     */
    localStorage : function(){
        var localStorage = window.localStorage || (function(){
            //userData
            var o = document.getElementsByTagName("head")[0],
                n = window.location.hostname || "localStorage",
                d = new Date(),
                doc, agent;
                
            if( !o.addBehavior ){
                return {};
            }
            try{ 
                agent = new ActiveXObject('htmlfile');
                agent.open();
                agent.write('<s' + 'cript>document.w=window;</s' + 'cript><iframe src="/favicon.ico"></frame>');
                agent.close();
                doc = agent.w.frames[0].document;
            }catch(e){
                doc = document;
            }
            o = doc.createElement('head');
            doc.appendChild(o);
            d.setDate(d.getDate() + 365);
            o.addBehavior("#default#userData");
            o.expires = d.toUTCString();
            o.load(n);
            
            var root = o.XMLDocument.documentElement,
            attrs = root.attributes,
            prefix = "prefix_____hack__",
            reg1 = /^[-\d]/,
            reg2 = new RegExp("^"+prefix),
            encode = function(key){
                return reg1.test(key) ? prefix + key : key;
            },
            decode = function(key){
                return key.replace(reg2,"");
            };
            
            return {
                length: attrs.length,
                getItem: function(key){
                    return (attrs.getNamedItem( encode(key) ) || {nodeValue: null}).nodeValue || root.getAttribute(encode(key)); 
                },
                setItem: function(key, value){
                    root.setAttribute( encode(key), value); 
                    o.save(n);
                    this.length = attrs.length;
                },
                removeItem: function(key){
                    root.removeAttribute( encode(key) ); 
                    o.save(n);
                    this.length = attrs.length;
                },
                clear: function(){
                    while(attrs.length){
                        this.removeItem( attrs[0].nodeName );
                    }
                    this.length = 0;
                },
                key: function(i){
                    return attrs[i] ? decode(attrs[i].nodeName) : undefined;
                }
            };
        })();
        var exports = {
            length : localStorage.length,
            set : function(key, value, options){
                options = options || {};
                
                //iPhone/iPad 'QUOTA_EXCEEDED_ERR'
                if( this.get(key, false) !== undefined ){
                    this.remove(key);
                }
                
                //options.expires过期时间 单位天  使用一个独立的key来保存所有设置过期时间的键
                if( typeof options.expires == 'number' ){
                    expiresData[key] = (+new Date) + options.expires*24*60*60*1000;
                    exports.set(expiresKey, JSON.stringify(expiresData));
                }
                
                localStorage.setItem(key, value, options);
                this.length = localStorage.length;
            },
            get : function(key, isCheck){
                //get时检测是否过期
                isCheck = isCheck===false ? false : true;//防止重复查询
                isCheck && expiresCheck();
                var v = localStorage.getItem(key);
                return v === null ? undefined : v;
            },
            remove : function(key){ 
                localStorage.removeItem(key); 
                this.length = localStorage.length;
            },
            clear : function(){
                localStorage.clear();
                this.length = 0;
            },
            key : function(index){//获取索引为index的key名称
                return localStorage.key(index);
            }
        },
        expiresKey = '__expireskey__',
        expiresData = exports.get(expiresKey, false);
        
        //检测是否过期
        function expiresCheck(){
            var key, i=0;
            for( key in expiresData ){
                if( (+new Date) > expiresData[key] ){
                    exports.remove(key);
                    delete expiresData[key];
                    continue;
                }
                i++;
            }
            if( i>0 ){
                exports.set(expiresKey, JSON.stringify(expiresData))
            }else{//全部过期 删除此key
                exports.remove(expiresKey);
            }
        }
        if( expiresData ){
            expiresData = JSON.parse(expiresData);
            expiresCheck();
        }else{
            expiresData = {};
        }
        exports.check = expiresCheck;
        
        return exports;
    }(),

    tmpl : function(){
        /*
         * js模版引擎
         * http://ejohn.org/blog/javascript-micro-templating/
         */
        var c = {};
        return function(s,d){
            var fn = !/\W/.test(s) ? c[s]=c[s]||$.tmpl(document.getElementById(s).innerHTML):
            new Function("o",
            "var p=[];"+"with(o){p.push('"+
            s
            //.replace(/\\/g,"\\\\")//解决转义符bug
            .replace(/[\r\t\n]/g," ")            
            .split("<%").join("\t")
            .replace(/((^|%>)[^\t]*)'/g,"$1\r")
            
            //.replace(/\t=(.*?)%>/g, "',$1,'")
            //将undefined的值置为''
            .replace(/\t=(.*?)%>/g, "',(typeof $1=='undefined'?'':$1),'")
            
            .split("\t").join("');")
            .split("%>").join("p.push('")
            .split("\r").join("\\'")
            + "');}return p.join('');");
            return d?fn(d):fn;
        };
    }(),

    /**
     * 将容器上自带属性拷贝到组件上
     */
    getAttributes (node) {
        var attrs = node.attributes
        var options = {}

        //部分属性需要替换为符合react规范
        var needReplace = {
            'class' : 'className',
            'novalidate' : 'noValidate',
            'cellpadding' : 'cellPadding',
            'cellspacing' : 'cellSpacing',
            'rowspan' : 'rowSpan',
            'colspan' : 'colSpan',
            'defaultvalue' : 'defaultValue'
        }
        for( var i=0,n=attrs.length;i<n;i++ ){
            var attr = attrs[i]
            var name = attr.name
            if( name=='id' ){
                continue
            }
            
            // if( name=='value' && node.type=='text' ){
            //     options['defaultValue'] = attr.value
            //     continue
            // }
            if( needReplace[name] ){
                options[needReplace[name]] = attr.value
            }else{
                options[name] = attr.value
            }            
        }
        return options
    },

    /**
     * 时间格式化字符串
     * @format[string] 'yy/mm/dd hh:mm:ss'
     */
    dateParse (options) {
        options = options || {};
        // console.log(options.date,new Date(Number(options.date)))
        var date = options.date ? new Date(Number(options.date)) : new Date();
        var format = options.format || 'yy/mm/dd hh:mm:ss';
        var arr = [date.getFullYear(), date.getMonth()+1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()]
        
        if( typeof format=='string' ){
            format = format.replace(/\b(\w+)\b/g, function(a){
                var d = String(arr.shift());
                return a.length>d.length ? ('0'+d) : d;
            })
        }
        return format;
    },

    //将类数组转换为真正的数组 如dom集合
    toArray (data) {
        var array = []
        for( var i=0,n=data.length; i<n; i++ ){
            array.push(data[i])
        }
        return array
    },

    joinClass () {
        var args = Array.prototype.slice.call(arguments, 0)
        var arrs = []
        for( var i=0; i<args.length; i++ ){    
            var c  = args[i] || ''
            var arr = String(c).split(' ')
            Array.prototype.push.apply(arrs, arr)
        }
        return arrs.filter((c)=>{
            if( c ){
                return c
            }
        }).join(' ')
    },

    //标准数组和json数组的转换
    arrayTransfor (data) {

    },

    parseHash () {
        var hash = location.hash.replace(/^#/,'')
        var hashData = {}
        hash.split('&').forEach((h) => {
            h = h.split('=')
            hashData[h[0]] = decodeURIComponent(h[1])
        })
        return hashData
    },

    //获取select选中项
    selectedOptions (select) {
        var selectedOption
        if( select.selectedOptions ){
            selectedOption = select.selectedOptions[0]
        }else{
            //ie不支持selectedOptions
            this.toArray(select.options).forEach(function(option){
                if( option.selected ){
                    selectedOption = option
                }
            })
        }
        return {
            value : selectedOption.value,
            text : selectedOption.innerText
        }
    }
}
module.exports.action = actions(module.exports)

if( typeof Object.assign=='undefined' ){
    Object.assign = function(target){
        var arr = Array.prototype.slice.call(arguments, 1)
        arr.forEach(function(item){
            if( !item || typeof item!='object' ){
                return
            }
            for( var i in item ){
                target[i] = item[i]
            }
        })
        return target
    }
}

