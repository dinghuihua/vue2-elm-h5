<style lang="less" src="./shop.less" scoped></style>
<template>
  <div class="shop-wrapper">
    <s-header :seller="shop"></s-header>
    <div class="tab">
      <div class="tab-item" @click="showContent='goods'">
        <span :class="{'active': showContent === 'goods'}">商品</span>
      </div>
      <div class="tab-item" @click="showContent='ratings'">
        <span :class="{'active': showContent === 'ratings'}">评论</span>
      </div>
      <div class="tab-item" @click="showContent='seller'">
        <span :class="{'active': showContent === 'seller'}">商家</span>
      </div>
    </div>
    <s-goods :seller="shop" v-show="showContent === 'goods'"></s-goods>
    <s-ratings :seller="shop" v-show="showContent === 'ratings'"></s-ratings>
    <s-seller :seller="shop" v-show="showContent === 'seller'"></s-seller>
  </div>
</template>
<script>
  import Header from './child/shopHeader/shop_header.vue'
  import Goods from './child/goods/goods.vue'
  import Ratings from './child/ratings/ratings.vue'
  import Seller from './child/seller/seller.vue'
  export default {
    name: 'shop',
    data () {
      return {
        showThePath: true,
        showContent: 'goods' // 默认显示商品列表
      }
    },
    computed: {
      shop () {
        // 通过id找到store中对应店铺信息
        return this.$store.getters.getShopInfo[this.$route.query.id]
      }
    },
    mounted () {
      console.log(this.showContent)
    },
    components: {
      's-header': Header,
      's-goods': Goods,
      's-ratings': Ratings,
      's-seller': Seller
    }
  }
</script>
