## Index

### Install

<pre>
<code class="language-javascript">npm install nojs-react --save
</code></pre>

### Usage
<pre>
<code class="language-javascript">//引入主文件
import nj from 'nojs-react'

//nj包含了对React的引用
const {React, ReactDOM, utils} = nj

//引入单个组件
import Mask from 'nojs-react/dist/lib/mask'
Mask.show()
</code></pre>

可以在webpack中配置路径alias：
<pre>
<code class="language-javascript">{
    entry : {...},
    resolve : {
        alias : {
            nj : 'nojs-react/dist'
        }
    }
}
</code></pre>

简化路径后：
<pre>
<code class="language-javascript">import Mask from 'nj/lib/mask'
</code></pre>