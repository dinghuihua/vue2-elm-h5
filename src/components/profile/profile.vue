<style lang="less" src="./profile.less" scoped></style>
<template>
  <div class="page-profile">
    <h2>我的 页的内容</h2>

    <!-- 底部的固定导航栏 -->
    <Footer-nav></Footer-nav>
  </div>
</template>

<script>
import FooterNav from '../common/footerNav/footer_nav'
export default {
  name: 'discover',
  data () {
    return {
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {

  },
  components: {
    FooterNav
  }
}
</script>
