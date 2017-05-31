<style lang="less" src="./shop.less"></style>
<template>
  <div class="shop-wrapper">
    <v-header :seller="shop"></v-header>
  </div>
</template>
<script>
  import Header from '../common/shopHeader/shop_header.vue'
  export default {
    name: 'shop',
    data () {
      return {
        showThePath: true
      }
    },
    computed: {
      shop () {
        // 通过id找到store中对应店铺信息
        return this.$store.getters.getShopInfo[this.$route.query.id]
      }
    },
    mounted () {
      console.log(this.shop)
    },
    components: {
      'v-header': Header
    }
  }
</script>
