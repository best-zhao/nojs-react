## Scroll

滚动组件

### Usage
<pre><code class="language-javascript"><script type="text/code">
import {Scroll} from 'nojs-react/lib/scroll' //引入组件
render(
    <Scroll time={4200} direction='x'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </Scroll>
, demoWrap)
</script></code>
</pre>


### Props

#### direction <span>[String] 滚动方向'x/y'，默认'y'</span>
#### step <span>[Number]每次滚动个数 0为连续滚动</span>
#### time <span>[Number] 滚动间隔时间，毫秒数 默认step==0?40:6000</span>
#### repeat <span>[Boolean] 是否无间断循环 默认true</span>
#### auto <span>[Boolean] 是否自动滚动 默认true</span>

<div id="demo-scroll-wrap" class="mb30"></div>
<a href="" class="prev">prev</a><a href="" class="next">next</a>
<div>
    <style>
    .nj-scroll{height:20px;overflow:hidden;border:1px solid #ddd;width:400px;position:relative;}
    .nj-scroll ._item{float:left;width:400px;}

    .dir-scroll{height:44px;}
    .nj-scroll-page{position:absolute;right:0;top:0;}
    .nj-scroll-page .-page-active{color:red;}
    </style>

    <!-- <div>{step:1} 每次滚动一项</div>
    <nj-scroll time="2100" class="dir-scroll">
        <nj-scroll-items>
        <div>11</div>
        <div>22</div>
        <div>33</div>
        </nj-scroll-items>
    </nj-scroll>

    <div>{step:2} 每次滚动两项</div>
    <nj-scroll time="2200" step="2" class="dir-scroll">
        <nj-scroll-items>
        <div>11</div>
        <div>22</div>
        <div>33</div>
        </nj-scroll-items>
    </nj-scroll>

    <div>{direction:'x'} 横向滚动</div>
    <nj-scroll time="2000" direction="x">
        <nj-scroll-items>
            <div class="_item">11</div>
            <div class="_item">22</div>
            <div class="_item">33</div>
        </nj-scroll-items>
        <nj-scroll-page trigger="hover" handle="scroll-page"></nj-scroll-page>
    </nj-scroll> -->
</div>