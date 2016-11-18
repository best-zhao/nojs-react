## Utils

提供的工具类函数

### Usage
<pre><code class="language-javascript">
import {utils} from 'nojs-react'
const {cookie, localStorage} = utils
</code>
</pre>

#### cookie(key, value, options) <span>cookie操作</span>
<pre><code class="language-javascript">
var uid = cookie('userid') //get
cookie('userid', 'value', options) //set
</code>
</pre>

#### joinClass(class1, class2, classN) <span>将传入的参数组合成最终的class。参数个数不限，值为假的被过滤</span>
<pre><code class="language-javascript">
var className = joinClass('name1', some1 && 'name2 name3', ['name4', 'name5']) //带空格的字符串参数或数组参数都可接受
</code>
</pre>

#### dateParse(options) <span>格式化日期</span>
<pre><code class="language-javascript">
/**
 * options.format[string] 默认'yy/mm/dd hh:mm:ss'
 * options.date[Number] 毫秒数 默认为当前时间
 */
dateParse() // => 2016/04/19 10:39:48
</code>
</pre>