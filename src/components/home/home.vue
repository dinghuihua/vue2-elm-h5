<style lang="less" src="./home.less"></style>
<template>
  <div class="page-home" v-if="showThePage">
    <h2>home页的内容</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      showThePage: false // 是否展示当前页面
    }
  },
  mounted () {
    this.$store.dispatch('setLoading', true)
    let time = Math.floor(Math.random() * 2000) // 模拟请求等待需要的时间
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

  }
}
</script>
