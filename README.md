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





>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

>  或者您可以 "follow" 一下，我会不断开源更多的有趣的项目
