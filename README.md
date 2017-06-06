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
	 // 初始化计算foodList的高度
	 this._calculateHeight()
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
    // 给右侧的食品列表添加滚动事件， 保存滚动在y轴方向的高度
    this.foodScroll.on('scroll', (pos) => {
      this.scrollY = Math.abs(Math.round(pos.y))
    })
  }
}

```

实现左菜单和右侧食品列表联动

```
// 将每个分类下的food的高度相加，得到每个分类下对应的foodlist的总高度， 然后保存在this.listHeight数组中
_calculateHeight () {
	let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
	let height = 0
	this.listHeight.push(height)
	for (var i = 0; i < foodList.length; i++) {
	  let item = foodList[i]
	  height += item.clientHeight
	  this.listHeight.push(height)
	}
}

```
右侧的滚动会激活对应的菜单项

```
computed: {
  currentIndex () {
    for (let i = 0; i < this.listHeight.length; i++) {
      let height1 = this.listHeight[i]
      let height2 = this.listHeight[i + 1]
      if (this.scrollY >= height1 && this.scrollY < height2) {
        return i
      }
    }
    return 0
  }
}
```
[要给菜单项绑定激活样式]
获取到currentIndex后，在menu-item绑定一个class:class="{'current':currentIndex === index}",当currentIndex和menu-item对应的index相等时，设置current的样式。这样就可以左右联动了。

```
<li class="menu-item" v-for="(item, index) in goods" :class="{'current': currentIndex === index}" @click="selectMenu(index, $event)">
  
</li>
```

点击左侧菜单 => 右侧联动

* 这里用了better-scroll的一个方法： scrollToElement(el, time, offsetX, offsetY, easing)

滚动到某个元素，el（必填）表示 dom 元素，time 表示动画时间，offsetX 和 offsetY 表示坐标偏移量，easing 表示缓动函数


```
selectMenu (index, event) {
	let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
	let el = foodList[index]
	this.foodScroll.scrollToElement(el, 300)
}
```

#### 五、添加购车组件 
>cartcontrol组件

* 点击‘+’加入购物车时。 需要给food动态添加一个count属性，用来记录商品数量，但我们自己新增的属性 Object.defineProperty() 检查不到， 因此要利用vue去给对象this.food新增一个属性count

大致代码如下：

```
methods: {
	addCart (event) {
	  if (!this.food.count) {
	    /* this.food.count = 1 新增属性 Object.defineProperty()检查不到 */
	    Vue.set(this.food, 'count', 1)
	  } else {
	    this.food.count ++
	  }
	  // 向父组件传递事件
	  this.$emit('add', event.target)
	},
	decreaseCart (event) {
	  if (this.food.count) {
	    this.food.count --
	  }
	}
}
```
* 父组件goods.vue可以监听来自子组件cartcontrol的事件

```
<!-- 父组件可以在使用子组件的地方直接用 v-on (或@) 来监听子组件触发的事件。 -->
<cartcontrol @add="addFood" :food="food"></cartcontrol>
```

* 小球飞入的动画效果
> 与 ‘-’ 的小球出现和消失时从水平滚动的动画同理，外层div控制左右移动，内部的div （inner）控制滚动rote

小球是相对与视口的动画，故它的position:fixed

（1）开始位置: 需要计算
点击add的时候，派发一个事件，将它的dom传给父组件，这样就能获得该‘+’按钮相对与视口在什么位置，
也就是前面的addCart方法里添加了这么一句

```
// 向父组件传递事件
	  this.$emit('add', event.target)

```
父组件goods接收到cartcontrol组件的add方法后，命名为addFood, 在父组件中的methods中定义addFood方法。
父组件goods执行shopcart组件的drop方法后
在goods组件中有

```
methods: {
      _drop (target) {
        this.$nextTick(() =>{
        // 调用子组件shopcart的drop方法, 这样就可以把点击的dom传给shopcart, 它就可以获取到起始位置
          this.$refs.shopcart.drop(target)
        })
      },
      addFood (target) {
        // 执行小球下落动画
        this._drop(target)
      }
    }
```

（2）落点位置: 底部的footer购物车图标的位置


>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

