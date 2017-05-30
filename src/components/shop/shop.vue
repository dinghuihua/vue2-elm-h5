<template>
  <div>shop</div>
</template>
<script>
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
        return this.$store.getters.getShopInfo[this.$route.params.id]
      }
    }
  }
</script>
