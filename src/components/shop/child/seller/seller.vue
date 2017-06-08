<style lang="less" src="./seller.less" scoped></style>
<template>
  <div class="seller-content">
    <div class="overview">
      <h1 class="title">{{seller.name}}</h1>
      <div class="desc">
        <star :size="36"></star>
        <span class="text">({{seller.ratingCount}})</span>
        <span class="text">月售{{seller.sellCount}}单</span>
      </div>
      <ul class="remark">
        <li class="block">
          <h2 class="tit">起送价</h2>
          <div class="content">
            <span class="stress">{{seller.minPrice}}</span>元
          </div>
        </li>
        <li class="block">
          <h2 class="tit">商家配送</h2>
          <div class="content">
            <span class="stress">{{seller.deliveryPrice}}</span>元
          </div>
        </li>
        <li class="block">
          <h2 class="tit">平均配送时间</h2>
          <div class="content">
            <span class="stress">{{seller.deliveryTime}}</span>分钟
          </div>
        </li>
      </ul>
    </div>
    <split></split>
    <div class="bulletin">
      <h1 class="title">公告与活动</h1>
      <div class="content-wrapper">
        <p class="content">{{seller.bulletin}}</p>
      </div>
      <ul v-if="seller.supports" class="bulletin-list">
        <li class="bulletin-item" v-for="(item, index) in seller.supports">
          <span class="sign decrease"></span>
          <span class="text">{{seller.supports[index].description}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import star from '../../../../components/common/star/star'
  import split from '../../../../components/common/split/split'
  export default {
    props: ['seller'],
    data () {
      return {}
    },
    mounted () {
      console.log(this.seller)
    },
    components: {
      star, split
    }
  }
</script>
