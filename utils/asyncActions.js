/*
 * ajax事件集合类
 * @on : 绑定事件
 * @trigger : 触发事件
 * 参数相同[action, options]
 */

var $ = require('jquery')

var Actions = module.exports = function(context){
    var Events = {},
    config = {//全局选项
        //newData : 只使用外部数据，将配置数据置空(副本)
        //reverse : {}
        //data
        _data : {},//传递附加数据
        type : 'post',
        dataType : 'json'
    };
    
    function parseConf(conf){
        for( var i in conf ){
            if( i=='reverse' || conf.reverse[i] ){
                continue;
            }
            conf.reverse[i] = conf[i];
        }
    }

    //创建事件
    function Action(options){
        this.options = options
        this.init()
    }
    Action.prototype = {
        init () {
            //添加自定义事件
            this.fetchBeforeEvent = context.addEventQueue.call(this, 'onFetchBefore')
            this.fetchEvent = context.addEventQueue.call(this, 'onFetch')
            this.fetchCompleteEvent = context.addEventQueue.call(this, 'onFetchComplete')
        }
    }

    return {
        //配置默认选项
        config : function(options){
            config = $.extend(true, config, options);
        },
        //添加事件
        add : function(name, options){
            options = $.extend(true, {}, config, options);
            options.reverse && parseConf(options);
            return Events[name] = new Action(options)
        },
        get : function(name){
            return Events[name]
        },
        //绑定事件
        on : function(action, options){
            if( $.type(action)=='object' ){//批量添加
                for( var i in action ){
                    Actions.on(i, action[i]);
                }
                return;
            }
            
            options = options || {};        
            var target = $(typeof options.target=='string' ? '#'+options.target : options.target)

            if( typeof action!='string' || !target.length ){
                return;
            }
            target.on('click', function(){
                //dom上使用data-state属性标示初始状态，如已关注标示为1,否则为0或不标示
                Actions.trigger( action, $.extend( {}, options, {target:this, state:$(this).data('state')} ));
                return this.tagName.toLowerCase()=='input' ? true : false;
            })
        },
        //触发事件
        trigger : function(action, options){
            if( typeof action!='string' ){
                //无动作名则为临时动作，只有一个参数options
                options = action;
            }
            var _action = Events[action]
            
            var _config = _action ? _action.options : config,
                conf, data, reverse, target;
            
            options = options || {};
            target = options.target;
            
            if( target && $(target).data('ajaxState') ){
                return;
            }  
            if( reverse = _config.reverse ){//是否执行反向动作
                reverse = $(target).data('state') ? true : false;//初始状态
                if( options.reverse ){
                    parseConf(options);
                    options = reverse ? options.reverse : options;
                }
            }
            conf = $.extend(true, {}, reverse ? _config.reverse : _config);//创建全局配置的副本
            
            if( typeof options.data=='function' ){//外部数据
                options.data = options.data.call(target);
            }
            if( options.newData ){//只使用外部数据，不使用配置数据
                conf.data = null;
            }else if( typeof conf.data=='function' ){//配置数据
                conf.data = conf.data.call(target);
            }
            conf = $.extend(true, conf, options);//合并得到最终选项                
            
            if( _action && _action.fetchBeforeEvent.complete(conf)===false ){
                return
            }
            
            target = $(target);
            target.data('ajaxState', true);
            
            var promise1 = $.ajax(conf)
            var promise2 = _action && _action.fetchEvent.complete(promise1, conf)
            var promise = promise1 || promise2

            promise = promise.then(json=>{                
                target.data('ajaxState', null);
                if( json.status == 1 && _config.reverse ){//还原反向动作状态
                    conf.state = _config.state = reverse ? null : 1;
                    target.data('state', conf.state);
                }
                _action && _action.fetchCompleteEvent.complete(json, conf)
            })
            
            return promise;
        }
    }
};

