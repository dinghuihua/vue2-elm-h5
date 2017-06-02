# vue2-elm-h5

> 使用vue2.0全家桶 + vuex 仿写较完整的饿了么外卖订餐移动端H5站

>  开发环境 macOS 10.11.4 , Chrome 56 , nodejs v7.6.0 , npm 4.1.2

## 项目运行

``` bash
# 全局安装vue-cli [装过就不用装了]
npm install -g vue-cli

# 初始化一个vue2.0项目
vue init webpack vue2-elm-h5

# 记得顺便装上vue-router
# 安装依赖
npm install

# 开启本地服务器 localhost:8080
npm run dev
```

安装需要的插件

``` bash
npm install less less-loader --save-dev
npm install vuex --save

```

## 技术栈
vue2 + vuex2 + vue-router2 + axios + webpack + ES6 + less + flex

## 部分技术说明
#### 一、 axios 的使用

我们可以借助node mock数据，具体如下，在dev-server.js文件中

```
var app = express()

/* start 模拟接口 */
var appData = require('../server/data.json')
var hotWords = appData.hot_search_word

var apiRoutes = express.Router()

apiRoutes.get('/getHotWords', function (req, res) {
  res.json({
    errno: 0,
    data: hotWords
  });
})

app.use('/api', apiRoutes)
/* end 模拟接口 */
```
* 这样我们启动本地服务时，访问 http://localhost:8888/api/getHotWords 即可得到json数据【 ps:代码中require的是我们在本地模拟数据的一个json文件 】

* 
接口写好了，我们看可以使用它了，在这里我们用axios来发送http请求，先安装axios（也可以使用vue-resource，但自从vue2出来后，Vue.js的作者尤雨溪微博说将不维护它了，推荐用axios了）
```
npm install axios --save
```

具体使用举例：请求搜索热词列表, 部分js代码如下：

```
import axios from 'axios'
const ERR_OK = 0
axios.get('/api/getHotWords').then(response => {
	if (response.data.errno === ERR_OK) {
	  this.hotWords = response.data.data
	}
})
```
html代码如

```
<!-- 热搜词 -->
<div class="hot-word">
	<router-link class="search-word" v-for="item in hotWords" :to="'/search/' + item.search_word">
	  <span>{{ item.title }}</span>
	</router-link>
</div>
```
#### 二、 轮播使用vue-swipe
```
npm install vue-swipe --save
```
github地址：  https://github.com/ElemeFE/vue-swipe

#### 三、 商家页 - 商家优惠信息的弹出层实现 【 CSS Sticky footer布局 】

介绍该布局的文章: http://www.w3cplus.com/css3/css-secrets/sticky-footers.html
概括： 如果页面内容不够长的时候，页脚块（这里就指我们的关闭按钮）粘贴在视窗底部；如果内容足够长时，页脚块会被内容向下推送。
布局套路如下：

```
<div class="detail">
  <div class="detail-wrapper clearfix">
     <!--实际内容-->
     <div class="detail-main"></div>
  </div>
  <div class="detail-close"></div>
</div>  
```
css关键代码（less）

```
.detail{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: 100%;
  overflow: auto;
  .detail-wrapper{
    min-height: 100%;
    .detail-main{
      padding-bottom: 64px;
    }
  }
  .detail-close{
    position: relative;
    margin: -64px auto 0;
    clear: both;
  }
}
```
注意：

（1）在内容区要设置padding-bottom留出空间放关闭按钮

（2）因为内容区的 min-height 是100%了，固定的底部要设置负margin，不然就高度就超了

#### 四、 better-scroll 运用
iscroll的改良版。github地址：https://github.com/ustbhuangyi/better-scroll

安装

 ```npm install better-scroll --save```
 
引入better-scroll

 ```import BScroll from 'better-scroll'```
 
实例化的时候需要一个dom，注意要在dom渲染完成后（this.$nextTick）初始化better-scroll才能生效, 部分代码如下
将内层的高度与外层的wrapper的高度做比较，内层比较高的时候就会产生滚动
```
created (){
	this.$nextTick(() => {
		this._initScroll()
	})
}
methods: {
  _initScroll () {
    this.menuScroll = new BScroll(this.$refs.menuWrapper, {
      click: true
    })
    this.foodScroll = new BScroll(this.$refs.foodsWrapper, {
      click: true,
      probeType: 3
    })
  }
}
```
      
>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

>  或者您可以 "follow" 一下，我会不断开源更多的有趣的项目
