<template>
  <div class="page-home" v-if="showThePage">
    <header class="header">
      <div class="location">
        <i class="icon i-location"></i>
        <span>北京市通州区物资学院</span>
      </div>
      <!-- 搜索 -->
      <router-link to="/search">
        <input type="text" class="search-input" placeholder="搜索商家、商品">
      </router-link>
      <!-- 热搜词 -->
      <div class="hot-word">
        <router-link class="search-word" v-for="item in hotWords" :to="'/search/' + item.search_word" :key="item.search_word">
          <span>{{ item.title }}</span>
        </router-link>
      </div>
    </header>
    <!-- 首页 slider 导航 -->
    <div class="index-slider">
      <Swipe :auto="0"> <!-- swipe 设置不自动滚动 -->
        <Swipe-item>
          <router-link to="/search/美食">
            <div class="slide-item">
              <img src="/static/images/slider-pic/slider-pic1.jpeg" alt="美食">
              <span class="title">美食</span>
            </div>
          </router-link>
          <router-link to="/search/甜品饮品">
            <div class="slide-item">
              <img src="/static/images/slider-pic/slider-pic2.jpeg" alt="甜品饮品">
              <span class="title">甜品饮品</span>
            </div>
          </router-link>
          <router-link to="/search/商店超市">
            <div class="slide-item">
              <img src="/static/images/slider-pic/slider-pic3.jpeg" alt="商店超市">
              <span class="title">商店超市</span>
            </div>
          </router-link>
          <router-link to="/search/预定早餐">
            <div class="slide-item">
              <img src="/static/images/slider-pic/slider-pic4.jpeg" alt="预定早餐">
              <span class="title">预定早餐</span>
            </div>
          </router-link>
          <router-link to="/search/果蔬生鲜">
            <div class="slide-item">
              <img src="/static/images/slider-pic/slider-pic5.jpeg" alt="果蔬生鲜">
              <span class="title">果蔬生鲜</span>
            </div>
          </router-link>
          <router-link to="/search/新店特惠">
            <div class="slide-item">
              <img src="/static/images/slider-pic/slider-pic6.jpeg" alt="新店特惠">
              <span class="title">新店特惠</span>
            </div>
          </router-link>
          <router-link to="/search/准时达">
            <div class="slide-item">
              <img src="/static/images/slider-pic/slider-pic7.jpeg" alt="准时达">
              <span class="title">准时达</span>
            </div>
          </router-link>
          <router-link to="/search/夜宵">
            <div class="slide-item">
              <img src="/static/images/slider-pic/slider-pic8.jpeg" alt="夜宵">
              <span class="title">夜宵</span>
            </div>
          </router-link>
        </Swipe-item>
        <Swipe-item>
          <router-link to="/search/土豪推荐">
            <div class="slide-item">
              <img src="/static/images/slider-pic/slider-pic9.jpeg" alt="土豪推荐">
              <span class="title">土豪推荐</span>
            </div>
          </router-link>
          <router-link to="/search/鲜花蛋糕">
            <div class="slide-item">
              <img src="/static/images/slider-pic/slider-pic10.jpeg" alt="鲜花蛋糕">
              <span class="title">鲜花蛋糕</span>
            </div>
          </router-link>
          <router-link to="/search/汉堡">
            <div class="slide-item">
              <img src="/static/images/slider-pic/slider-pic11.jpeg" alt="汉堡">
              <span class="title">汉堡</span>
            </div>
          </router-link>
          <router-link to="/search/日韩料理">
            <div class="slide-item">
              <img src="/static/images/slider-pic/slider-pic12.jpeg" alt="日韩料理">
              <span class="title">日韩料理</span>
            </div>
          </router-link>
          <router-link to="/search/麻辣烫">
            <div class="slide-item">
              <img src="/static/images/slider-pic/slider-pic13.jpeg" alt="麻辣烫">
              <span class="title">麻辣烫</span>
            </div>
          </router-link>
          <router-link to="/search/披萨意面">
            <div class="slide-item">
              <img src="/static/images/slider-pic/slider-pic14.jpeg" alt="披萨意面">
              <span class="title">披萨意面</span>
            </div>
          </router-link>
          <router-link to="/search/川湘菜">
            <div class="slide-item">
              <img src="/static/images/slider-pic/slider-pic15.jpeg" alt="川湘菜">
              <span class="title">川湘菜</span>
            </div>
          </router-link>
          <router-link to="/search/包子粥店">
            <div class="slide-item">
              <img src="/static/images/slider-pic/slider-pic16.jpeg" alt="包子粥店">
              <span class="title">包子粥店</span>
            </div>
          </router-link>
        </Swipe-item>
      </Swipe>
    </div>
    <!-- 推荐商家 -->
    <div class="index-seller">
      <h3 class="title">推荐商家</h3>
      <seller-list v-if="sellerListArr.length" :sellers="sellerListArr"></seller-list>
      <div class="loading-wrapper" v-show="loadMore">
        <img src="/static/loading.gif">
        <span>正在加载...</span>
      </div>
      <div class="noMore-wrapper" v-show="noMore">
        <span>主人~已经到底啦~</span>
      </div>
    </div>
    <!-- 底部的固定导航栏 -->
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Swipe, SwipeItem } from 'vue-swipe'
import axios from 'axios'
import footerNav from '../common/footerNav/footer_nav'
import sellerList from '../common/sellerList/seller_list'

const ERR_OK = 0

export default {
  name: 'home',
  data () {
    return {
      showThePage: false, // 是否展示当前页面
      hotWords: [],
      sellerListArr: [],
      isLoadingMore: false, // score中的加载更多
      loadMore: false, // 列表底部的加载更多
      noMore: false
    }
  },
  mounted () {
    this.$store.dispatch('setLoading', true)
    this.getHotWords()
    this.getSellerList()

    // 模拟实际请求需要的时间
    let time = Math.floor(Math.random() * 2000)
    setTimeout(() => {
      this.$store.dispatch('setLoading', false) // loading 隐藏
      this.showThePage = true
    }, time)

    // 监听页面的滚动事件
    window.addEventListener('scroll', this.dispatchLoad, false)
  },
  computed: {
    ...mapGetters([
      'getLoading'
    ])
  },
  methods: {
    getHotWords () {
      axios.get('/api/getHotWords').then(response => {
        if (response.data.errno === ERR_OK) {
          this.hotWords = response.data.data
        }
      })
    },
    getSellerList () {
      axios.get('/api/sellersSimple', {
        page: 1,
        limit: 5
      }).then(response => {
        if (response.data.errno === ERR_OK) {
          this.sellerListArr = response.data.data
        }
      })
    },
    // 触发滚动加载更多的模拟数据
    dispatchLoad () {
      var dscrollTop = document.body.scrollTop || document.documentElement.scrollTop
      if (document.documentElement.offsetHeight <= (dscrollTop + window.innerHeight + 1)) {
        console.info('触发加载')
        setTimeout(() => {
          this.$store.dispatch('setLoading', false) // loading 隐藏
          this.showThePage = true
        }, 2000)
        if (this.sellerListArr.length < 50) {
          this.loadMore = true
          // 假装我又去请求了数据
          setTimeout(() => {
            this.sellerListArr = this.sellerListArr.concat(this.sellerListArr)
          }, 1000)
        } else {
          this.loadMore = false
          this.noMore = true
        }
      }
    }
  },
  components: {
    footerNav, Swipe, SwipeItem, sellerList
  }
}
</script>

<style lang="less" src="./home.less" scoped></style>
<!-- swipe的css + 改写 -->
<style>
  .mint-swipe,.mint-swipe-items-wrap{overflow:hidden;position:relative;height:100%}.mint-swipe-items-wrap{-webkit-transform:translateZ(0);transform:translateZ(0)}.mint-swipe-items-wrap>div{position:absolute;-webkit-transform:translateX(-100%);transform:translateX(-100%);width:100%;height:100%;display:none}.mint-swipe-items-wrap>div.is-active{display:block;-webkit-transform:none;transform:none}.mint-swipe-indicators{position:absolute;bottom:10px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.mint-swipe-indicator{width:8px;height:8px;display:inline-block;border-radius:100%;background:#ccc;margin:0 3px}.mint-swipe-indicator.is-active{background: #0096ff;}
</style>
