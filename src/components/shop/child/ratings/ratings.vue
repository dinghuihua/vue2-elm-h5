<style lang="less" src="./ratings.less" scoped></style>
<template>
<div class="ratings" ref="rating">
  <div class="ratings-content" >
    <div class="overview">
      <div class="overview-left">
        <h1 class="score">{{seller.score}}</h1>
        <div class="title">综合评分</div>
        <div class="rank">高于周边商家{{seller.rankRate}}%</div>
      </div>
      <div class="overview-right">
        <div class="score-wrapper">
          <span class="title">服务态度</span>
          <star :size="36" :score="seller.serviceScore"></star>
          <span class="score">{{seller.serviceScore}}</span>
        </div>
        <div class="score-wrapper">
          <span class="title">商品评分</span>
          <star :size="36" :score="seller.foodScore"></star>
          <span class="score">{{seller.foodScore}}</span>
        </div>
        <div class="delivery-wrapper">
          <span class="title">送达时间</span>
          <span class="delivery">{{seller.deliveryTime}}分钟</span>
        </div> 
      </div>
    </div>
    <split></split>
    <ratingselect @choose="selectRating" @toggle="toggleContent" :ratings="ratings" :select-type="selectType" :only-content="onlyContent"></ratingselect>
    <div class="rating-wrapper">
      <ul>
        <li v-show="needShow(rating.rateType, rating.text)" v-for="rating in ratings" class="rating-item">
          <div class="avatar">
            <img :src="rating.avatar">
          </div>
          <div class="content">
            <h2 class="name">{{rating.username}}</h2>
            <div class="star-wrapper">
              <star :size="24" :score="rating.score"></star>
              <span class="delivery" v-show="rating.deliveryTime">{{rating.deliveryTime}}分钟送达</span>
            </div>
            <div class="text">{{rating.text}}</div>
            <div class="recommend-wrapper" v-show="rating.recommend && rating.recommend.length">
              <i class="icon i-thumb_up"></i>
              <span class="recommend-item" v-for="item in rating.recommend">{{item}}</span>
            </div>
            <div class="time">{{rating.rateTime}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>  
</template>
<script>
  import BScroll from 'better-scroll'
  import star from '../../../../components/common/star/star'
  import split from '../../../../components/common/split/split'
  import ratingselect from '../../../../components/common/ratingselect/ratingselect'

  const ALL = 2

  export default {
    props: ['seller'],
    data () {
      return {
        selectType: ALL,
        onlyContent: true
      }
    },
    computed: {
      ratings () {
        return this.seller.ratings
      }
    },
    created () {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.rating, {
            click: true
          })
        } else {
          this.scroll.refresh()
        }
      })
    },
    methods: {
      needShow (type, text) {
        if (this.onlyContent && !text) {
          return false
        }
        if (this.selectType === ALL) {
          return true
        } else {
          return type === this.selectType
        }
      },
      selectRating (type) {
        this.selectType = type
        // $nextTick触发之后, dom才会更新
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      },
      toggleContent () {
        this.onlyContent = !this.onlyContent
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    },
    components: {
      star, split, ratingselect
    }
  }
</script>
