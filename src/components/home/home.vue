<style lang="less" src="./home.less" scoped></style>
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
        <span>炸鸡</span>
        <span>汉堡</span>
        <span>炸鸡</span>
        <span>麦当劳</span>
        <span>肯德基</span>
        <span>水饺</span>
        <span>粽子</span>
        <span>早餐</span>
        <span>水煮鱼</span>
        <span>麻辣烫</span>
        <span>水饺</span>
        <span>粽子</span>
        <span>早餐</span>
        <span>水煮鱼</span>
        <span>麻辣烫</span>
      </div>
    </header>
    
    <!-- 底部的固定导航栏 -->
    <Footer-nav></Footer-nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FooterNav from '../common/footer_nav/footer_nav'

export default {
  name: 'home',
  data () {
    return {
      showThePage: false // 是否展示当前页面
    }
  },
  mounted () {
    this.$store.dispatch('setLoading', true)
    let time = Math.floor(Math.random() * 1000) // 模拟请求等待需要的时间
    setTimeout(() => {
      this.$store.dispatch('setLoading', false) // loading 隐藏
      this.showThePage = true
    }, time)
  },
  computed: {
    ...mapGetters([
      'getLoading'
    ])
  },
  methods: {

  },
  components: {
    FooterNav
  }
}
</script>
