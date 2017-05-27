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
        <router-link class="search-word" v-for="item in hotWords" :to="'/search/' + item.search_word" :key="item.search_word">
          <span>{{ item.title }}</span>
        </router-link>
      </div>
    </header>
    
    <!-- 底部的固定导航栏 -->
    <Footer-nav></Footer-nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FooterNav from '../common/footer_nav/footer_nav'
import axios from 'axios'

const ERR_OK = 0

export default {
  name: 'home',
  data () {
    return {
      showThePage: false, // 是否展示当前页面
      hotWords: []
    }
  },
  mounted () {
    this.$store.dispatch('setLoading', true)
    let time = Math.floor(Math.random() * 1000) // 模拟请求等待需要的时间
    setTimeout(() => {
      this.$store.dispatch('setLoading', false) // loading 隐藏
      this.showThePage = true
    }, time)
    this.getHotWords()
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
    }
  },
  components: {
    FooterNav
  }
}
</script>
