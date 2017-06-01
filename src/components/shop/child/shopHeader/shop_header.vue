<style lang="less" src="./shop_header.less" scoped></style>
<template>
  <header class="shop-header">
    <div class="backBtn-wrapper">
      <back-btn></back-btn>
    </div>
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title" :class="{'brand': seller.brand}">
          <span>{{seller.name}}</span>
        </div>
        <p class="description">
          <span>{{seller.description}}</span>
          <span>{{seller.deliveryTime}}分钟送达</span>
          <span>配送费￥{{seller.deliveryPrice}}</span>
        </p>
        <div class="support">
          <span class="sign" :class="signClassMap[seller.supports[0].type]"></span>
          <span class="text">在线支付满28减5</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="showDetail()">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon i-arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail()">
      <span class="bulletin-icon"></span>
      <span class="text">{{seller.bulletin}}</span>
      <i class="icon i-arrow_right arrow-right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <!-- 浮层 -->
    <transition name="fade">
      <div class="detail" v-show="detailShow">
        <div class="detail-wrapper clearfix">
          <!--实际内容-->
          <div class="detail-main">
            <h1 class="name">{{seller.name}}</h1>
            <div class="star-wrapper">
              <star :size="48" :score="seller.score"></star>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul v-if="seller.supports" class="supports-list">
              <li class="support-item" v-for="(item, index) in seller.supports">
                <span class="sign" :class="signClassMap[seller.supports[index].type]"></span>
                <span class="text">{{seller.supports[index].description}}</span>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <p class="content">{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <!-- 关闭浮层按钮 -->
        <div class="detail-close" @click="showDetail()">
          <i class="icon i-close"></i>
        </div>
      </div>
    </transition>
  </header> 
</template>
<script>
  import star from '@/components/common/star/star'
  import backBtn from '@/components/common/goback/back_btn'
  export default{
    props: ['seller'],
    data () {
      return {
        detailShow: false
      }
    },
    created () {
      this.signClassMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    },
    methods: {
      showDetail () {
        this.detailShow = !this.detailShow
      }
    },
    components: {
      star, backBtn
    }
  }
</script>
