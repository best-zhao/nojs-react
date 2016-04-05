/**
 * 树形菜单组件
 */
require('../css/tree.css')
var nj = require('./nojs-react') 
var {
  React,
  ReactDOM,
  mixins
} = nj;
var $ = require('jquery')

var Tree = React.createClass({
    statics : {
        parse (options) {
            var arr = []
            var data = options.data
            var keymap = options.keymap
            if( !data ){
                return arr
            }
            var _data = {}
            data.forEach(function(item,i){
                var pid = item[keymap.parentid]
                var level
                if( !pid || pid==options.rootID ){
                    level = item.level = 0
                }else if( _data[pid] ){
                    level = item.level = _data[pid].level+1
                    _data[pid].children.push(item)
                }
                item.display = true
                item.children = []
                arr[level] = arr[level] || []
                arr[level].push(item)

                _data[item[keymap.id]] = item
            })

            return {
                databyid : _data,
                databylevel : arr
            }
        },
        init (options) {
            options.keymap = $.extend({
                'id' : 'id',
                'name' : 'name',
                'parentid' : 'parentid'
            }, options.keymap)

            options.rootID = options.rootID === undefined ? '0' : options.rootID
            
            var level = options.level || 0

            if( typeof options.data=='string' ){
                options.async = true
                options.dataFormat = {
                    databyid : {},
                    databylevel : []
                }
                options.source = options.data
                options.data = []
            }else{
                var data = Tree.parse(options)
                var children = data.databylevel[level]
                options.data = children
                options.dataFormat = data
            }
            

            return ReactDOM.render(
              <Tree {...options} />,
              options.element
            )
        },
        //显示一个层级select菜单
        levelSelect (options) {
            var el = options.element
            if( !el || el['$$levelselect'] ){
                return
            }
            options.keymap = $.extend({
                'id' : 'id',
                'name' : 'name',
                'parentid' : 'parentid'
            }, options.keymap)

            options.rootID = options.rootID === undefined ? '0' : options.rootID

            var data = options.dataFormat = Tree.parse(options)
            el['$$levelselect'] = 1

            return ReactDOM.render(
              <LevelSelect {...options} />,
              options.element
            )
        },
        //显示select级联菜单
        treeSelect (options) {
            options.keymap = $.extend({
                'id' : 'id',
                'name' : 'name',
                'parentid' : 'parentid'
            }, options.keymap)

            options.rootID = options.rootID === undefined ? '0' : options.rootID

            var data = options.data
            if( typeof data=='string' ){
                options.async = true
            }else{
                options.dataFormat = Tree.parse(data)
            }            

            return ReactDOM.render(
              <TreeSelect {...options} />,
              options.element
            )
        }
    },
    getDefaultProps () {
        return {level:0, allowSelect:true}
    },
    componentWillMount (){
        //添加事件
        this.toggleEvent = nj.utils.addEventQueue.call(this, 'onToggle')
        this.selectEvent = nj.utils.addEventQueue.call(this, 'onSelect')
        this.pullEvent = nj.utils.addEventQueue.call(this, 'onPull')

        this.getData(null,null,0)
    },
    getInitialState () {
        return {data : this.props.data||[]}
    },
    toggle (node, event) {
        node.open = !node.open
        var KEY_ID = this.props.keymap.id
        if( node.open ){
            if( this.props.async ){
                this.getData(node, this.props.level+1, 1)
            }else{
                node.complete = true
            }
        }
        this.setState({change:!this.state.change})
        this.toggleEvent.complete(node, event)
        //阻止事件冒泡到select事件
        if( event && event.stopPropagation ){
            event.stopPropagation()
        }else{
            window.event.cancelBubble = true
        }
        //event.preventDefault()
    },
    //选中节点
    select (node, event) {
        if( !node || !this.props.allowSelect ){
            return
        }

        this.selectEvent.complete(node, event)

        if( event && event.isDefaultPrevented() ){//调用preventDefault阻止关闭弹窗事件
            return
        }
        //打开所有父节点
        this.getParents(node).reverse().forEach((parent)=>{
            !parent.open && this.toggle(parent)
        })
        if( !node.select ){
            var allnodes = this.props.dataFormat.databyid
            for( var i in allnodes ){
                allnodes[i].select = null
            }
        }
        
        node.select = true
        this.setState({node:node})
        return this
    },
    //获取所有父节点
    getParents (node) {
        var parents = []
        var KEY_ID = this.props.keymap.id
        var id = node[KEY_ID]
        var allnodes = this.props.dataFormat.databyid
        if( !allnodes[id] ){
            return parents
        } 
        var KEY_PID = this.props.keymap.parentid
        var parentNode = allnodes[node[KEY_PID]]
        while( parentNode ){
            parents.push(parentNode)
            parentNode = allnodes[parentNode[KEY_PID]]
        }
        return parents
    },    
    //设置节点显示状态
    setNodeDisplay (node, display) {
        if( !node ){
            return
        }
        node.display = display

        if( display ){//需要检测其父级是否为显示状态
            var KEY_PID = this.props.keymap.parentid
            var allnodes = this.props.dataFormat.databyid
            var parentNode = allnodes[node[KEY_PID]]
            while( parentNode ){
                parentNode.display = display
                parentNode.open = 1
                parentNode = allnodes[parentNode[KEY_PID]]
            }
        }
        this.setState({change:!this.state.change})

    },
    getData (parentNode, level, from) {

        if( !this.props.async ){
            return
        }
        // this.props.async && console.log(22,this.props.level)
        level = level || 0
        
        var parentid = this.props.rootID
        var KEY_ID = this.props.keymap.id

        var databyid = this.props.dataFormat.databyid
        parentNode = parentNode || this.props.parentNode

        if( parentNode ){
            if( parentNode.complete ){
                return
            }
            parentNode.pending = true
            parentid = parentNode[KEY_ID]            
        }
        
        var source = this.props.source || this.props.rootScope.source
        $.getJSON(this.props.source+parentid, (json)=>{
            //this.state.data[level] = json.data
            json.data.forEach((node)=>{
                databyid[node[KEY_ID]] = node
            })

            var rootScope = this.props.rootScope || this
            
            rootScope.pullEvent.complete(this, json.data)

            if( parentNode ){
                parentNode.pending = null
                parentNode.children = json.data
                parentNode.complete = true
                this.setState({change:!this.state.change}) 
            }else{
                this.setState({data:json.data}) 
            }           
            
        })
    },
    render(){
        var async = this.props.async
        var data = this[async?'state':'props'].data
        var level = this.props.level
        var parentNode = this.props.parentNode
        var visible = !parentNode || parentNode.open ? ' d_show' : ' d_hide'
        var rootScope = this.props.rootScope || this
        
        // if( async && parentNode ){
        //     data = parentNode.children
        // }
        // async && console.log(data)
        return data ? (
            <ul className={'level'+this.props.level+visible}>
                {
                    //对于父节点没有打开的暂时不渲染其子节点
                    (!parentNode || parentNode.open || parentNode.complete) && data.map((item,i) => {
                        if( item.display===false ){//隐藏节点
                            return
                        }
                        var children = item.children = item.children || []

                        if( !children ){
                            //return
                        }
                        var holder = [];
                        for( var j=0;j<level;j++){
                            holder.push(j)
                        }
                        var nodeClass = ['item']
                        var childOptions = {}
                        var nochild

                        if( children.length  || async ){
                            $.extend(
                                childOptions, 
                                this.props, 
                                {level:level+1, parentNode:item, rootScope:rootScope}
                            )
                            childOptions.data = children
                        }
                        if( async ){
                            if( item.complete && !children.length ){
                                nochild = true
                            }
                        }else if(!children.length) {
                            nochild = true
                        }                        
                        nochild && nodeClass.push('no-child')
                        // if( !async && !children.length )

                        item.pending && nodeClass.push('pending')
                        item.open && nodeClass.push('open')
                        item.select && nodeClass.push('selected')
                        
                        //节点显示名称可以通过函数自定义
                        var nodeName = item.name
                        var defineName = rootScope.props.defineName
                        if( typeof defineName=='function' ){
                            nodeName = defineName.call(rootScope,item)
                        }

                        // console.log(this.level,children,children.length,parentNode)

                        var KEY_ID = this.props.keymap.id

                        return (
                            <li key={i} data-id={item[KEY_ID]} className={'level'+this.props.level+'-item'}>
                            <div 
                                onClick={rootScope.select.bind(rootScope,item)} 
                                className={nodeClass.join(' ')}>

                                {holder.map((h,j) => (<span key={j} className={'_line'+(j+1>=this.props.level?' _line_begin _line'+(j-this.props.level+1):'')}></span>))}
                                
                                <span className="_icon" onClick={!nochild&&this.toggle.bind(this,item)}></span>
                                {rootScope.props.checkbox ? (<span className="_checkbox"><input type="checkbox" name={rootScope.props.checkbox.name} defaultChecked={item.checked} value={item[KEY_ID]} disabled={item.disabled}/></span>) : null}
                                <span className="_text" dangerouslySetInnerHTML={{__html:nodeName}}></span>
                            </div>
                            {children.length ? (<Tree {...childOptions} />) : null}
                            </li>
                        )
                    })
                }
            </ul>
        ) : null
    }
})

//select级联菜单
var TreeSelect = React.createClass({
    getInitialState () {
        //this.state.data: Array 存放输入状态下每级的数据列表 
        var data = []
        if( !this.props.async ){
            var levels = this.props.dataFormat.databylevel 
            data.push(levels[0])
        }
        this.state = {data:data}
        this.select(this.props.selected, false);
        return this.state;
    },
    componentWillMount () {
        this.getData()
    },
    getData (parentid, level) {
        if( !this.props.async ){
            return
        }
        level = level || 0
        parentid = parentid || this.props.rootID
        $.getJSON(this.props.data+parentid, function(json){
            this.state.data[level] = json.data
            this.setState({data:this.state.data}) 
        }.bind(this))
    },
    //选中节点 selected 选中的节点id
    select (selected, update){
        this.resetData(0)
        // console.log(selected)
        update = update===false ? false : true
        this.state.ids = selected && selected.length ? selected : []
        selected = selected || [];
        if( !selected.length ){

        }
        selected = selected.map(function(id){
            return {id:id}
        })
        this.state.selected = selected
        update && this.setState({selected:selected,ids:this.state.ids})
    },
    //清空数据
    resetData (fromLevel) {
        this.state.data.forEach((data,i)=>{
            if( i>fromLevel ){//选择空值时 清空所有下级
                data.length = 0
                this.state.selected[i] = {}
                this.setState({data:this.state.data})
            }
        })
    },
    handleChange (level,e) {
        var select = this.refs['select-'+level]
        
        var maxlevel = parseInt(this.props.maxlevel)
        var selected = this.state.selected

        this.resetData(level)

        if(!select){
            console.log(level)
            return
        }
        var parentid = select.value

        selected[level] = parentid ? {
            id : parentid,
            name :nj.utils.selectedOptions(select).text //e.target.selectedOptions[0].innerText
        } : {}

        if( !maxlevel || level+1<maxlevel ){
            parentid && this.getData(parentid, level+1)
        }
        
        this.props.onChange && this.props.onChange.call(this,parentid,level,e)
    },
    render () {
        var KEY_ID = this.props.keymap.id
        var KEY_NAME = this.props.keymap.name
        var maxlevel = this.props.maxlevel
        var infos = this.props.infos || []//附加信息 如name
        var selected = this.state.ids 

        return (
        <div className="nj-tree-select">
            {this.state.data.map((level,i)=>{
                if( maxlevel && i+1>maxlevel ){
                    return
                }
                var id = selected[i]//默认选中节点
                // console.log(id,selected)
                
                var info = infos[i] || {}
                var el = level && level.length ? (
                    <select key={i} className={info.className} ref={'select-'+i} value={id} name={info.name} onChange={this.handleChange.bind(this,i)}>
                        <option value="">请选择</option>
                        {level.map((item,i)=>{
                            return (<option key={i} value={item[KEY_ID]}>{item[KEY_NAME]}</option>)
                        })}
                    </select>
                ) : null 

                if( id && el ){
                    selected[i] = null//选中后清空 防止重复
                    setTimeout(()=>{
                        el.props.onChange()
                        // this.handleChange(i)
                    }, 10)
                }
                return el
            })}            
        </div>
        )
    }
})

//显示一个层级select菜单
var LevelSelect = React.createClass({
    handleChange (e) {
        var onChange = this.props.onChange
        onChange && onChange.call(this, e.target.value)
    },
    render () {
        var levels = this.props.dataFormat.databylevel
        var items = []
        var KEY_ID = this.props.keymap.id
        var KEY_NAME = this.props.keymap.name

        function getlines(level){
            var line = ''
            while(--level>=0 ){
                line += '--'
            }
            return line
        }

        var key = 0
        var maxlevel = this.props.maxlevel
        maxlevel = typeof maxlevel=='function' ? maxlevel.call(this) : maxlevel

        function getItems(nodes){
            if( !nodes || !nodes.length ){
                return
            }
            var level = nodes[0].level
            if( maxlevel && level>=maxlevel ){
                return
            }
            nodes.forEach(function(node,j){
                items.push(<option value={node[KEY_ID]} disabled={node.disabled} key={++key}>{getlines(node.level)+node[KEY_NAME]}</option>)
                getItems(node.children)
            })
        }

        var rootNode = this.props.rootNode===false ? false : true

        rootNode && items.push(<option value={this.props.rootID} key={++key} className="root-node" style={{color:'#999'}}>{'----根节点----'}</option>)
        getItems(levels[0])
        
        return (
            <select 
                size={this.props.size} 
                name={this.props.name} 
                className={this.props.className} 
                onChange={this.handleChange}
                defaultValue={this.props.defaultNode}>

                {items}
            </select>
        )
    }
})

module.exports = Tree