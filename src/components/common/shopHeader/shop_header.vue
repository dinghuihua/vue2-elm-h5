<style lang="less" src="./shop_header.less"></style>
<template>
  <header class="shop-header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title brand">
          <span>{{seller.name}}</span>
        </div>
        <p class="description">
          <span>{{seller.description}}</span>
          <span>{{seller.deliveryTime}}分钟送达</span>
          <span>配送费￥{{seller.deliveryPrice}}</span>
        </p>
        <div class="support">
          <span class="sign decrease"></span>
          <span class="text">在线支付满28减5</span>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-icon"></span>
      <span class="text">{{seller.bulletin}}</span>
      <i class="icon i-detail_right arrow-right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <!-- 浮层 -->
    <div class="detail" style="display:none"></div>
  </header> 
</template>
<script>
  export default{
    props: ['seller'],
    data () {
      return {

      }
    }
  }
</script>
