<style lang="less" src="./ratings.less" scoped></style>
<template>
  <div class="ratings-content">
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
  </div>
</template>
<script>
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
    mounted () {
      console.log(this.ratings)
    },
    computed: {
      ratings () {
        return this.seller.ratings
      }
    },
    methods: {
      selectRating () {

      },
      toggleContent () {

      }
    },
    components: {
      star, split, ratingselect
    }
  }
</script>
