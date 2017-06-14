<style lang="less" src="./seller.less" scoped></style>
<template>
<div class="seller">
  <div class="seller-content" ref="sellerContent">
    <div class="overview">
      <h1 class="title">{{seller.name}}</h1>
      <div class="desc">
        <star :size="36" :score="seller.score"></star>
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
          <span class="sign" :class="signClassMap[seller.supports[index].type]"></span>
          <span class="text">{{seller.supports[index].description}}</span>
        </li>
      </ul>
    </div>
    <split></split>
    <div class="pics">
      <h1 class="title">商家实景</h1>
      <div class="pic-wrapper" ref="picWrapper">
        <ul class="pic-list" ref="picList">
          <li class="pic-item" v-for="pic in seller.pics">
            <img :src="pic">
          </li>
        </ul>
      </div>
    </div>
    <split></split>
  </div>
</div>  
</template>
<script>
  import BScroll from 'better-scroll'
  import star from '../../../../components/common/star/star'
  import split from '../../../../components/common/split/split'
  export default {
    props: ['seller'],
    data () {
      return {}
    },
    created () {
      this.signClassMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    },
    mounted () {
      console.log(this.seller)
      this.$nextTick(() => {
        // this._initScroll()
      })
    },
    watch: {
      'seller' () {
        this.$nextTick(() => {
          // this._initScroll()
        })
      }
    },
    methods: {
      _initScroll () {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.sellerContent, {
            click: true
          })
          console.log('scroll')
        } else {
          this.scroll.refresh()
        }
      }
    },
    components: {
      star, split
    }
  }
</script>
