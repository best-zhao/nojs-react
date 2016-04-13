## Verify

表单验证组件，2种方式创建表单，React组件和html标签指令(nj-form)
<a href="doc/form/normal.html">demos</a>

### Usage 
<pre><code class="language-javascript">
import Verify from 'nojs-react/lib/form' //引入组件
const {Form, Input, InputGroup, start} = Verify
</code>
</pre>


#### #1 React Component
<pre><code class="language-javascript"><script type="text/code">
var myform = ReactDOM.render((
    <Form className="nj-form" action="" method="post">
        <Input type="text" defaultValue="hello" required />
    </Form>
), document.getElementById('form-selector'))
</script></code>
</pre>

#### #2 nj-html
<pre><code class="language-html"><script type="text/code">
<!--通过nj-html指令在html文件中直接创建表单-->
<nj-form class="nj-form" action="" method="post" handle="myform">
    username: <nj-input class="text" name="username" defaultValue="lilei" required nj-minlength="4" nj-maxlength="16"></nj-input>
    email: <nj-input class="text" name="email" type="email" required></nj-input>
    skills: 
    <nj-input-group required nj-minlength="2">
        <nj-input class="checkbox" name="skill[]" value="1">html</nj-input>
        <nj-input class="checkbox" name="skill[]" value="2">css</nj-input>
        <nj-input class="checkbox" name="skill[]" value="3">javascript</nj-input>
    </nj-input-group>
</nj-form>
</script></code>
</pre>

通过 <code>handle</code>属性可以获取表单的实例对象
<pre><code class="language-javascript">
var myform = Verfiy.getByHandle('myform')
</code>
</pre>



### Events

#### onSubmitBefore <span>表单提交验证之前触发</span>
<pre><code class="language-javascript">
//添加onSubmitBefore事件 可链式添加多个（该方式适合所有事件） 该事件在验证动作之前执行
myform.onSubmitBefore(e=>{
    if( something1 ){
        e.preventDefault()//阻止表单继续验证
    }
}).onSubmitBefore(e=>{
    if( something2 ){
        e.preventDefault()//阻止表单继续验证
    }
})
</code>
</pre>

#### onSubmit <span>表单提交验证完成后触发</span>
<pre><code class="language-javascript">
//添加onSubmit事件 
myform.onSubmit(e=>{
    var form = myform.refs.wrap //获取form标签dom对象
    //ajax提交表单
    $.post(form.action, $(form).serialize(), json=>{

    }) 
    e.preventDefault()//阻止表单以默认方式提交
})
</code>
</pre>


### Props

#### showicon <span>[String] 只显示此类验证图标，可取值'all'/'ok'/'error'，默认'all'</span>
#### handle <span>[String] 指定实例名称，通过getByHandle(handle)方法可获取对应实例对象</span>
#### noValidate <span>[Boolean] 是否禁用html5原生验证方式 默认true</span>

