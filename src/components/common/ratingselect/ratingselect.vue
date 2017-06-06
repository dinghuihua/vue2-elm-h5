<template>
  <div class="ratingselect">
    <div class="rating-type">
      <span @click="choose(2, $event)" class="block positive" :class="{'active': selectType === 2}">{{desc.all}}<span class="count">{{ratings.length}}</span></span>
      <span @click="choose(0, $event)" class="block positive" :class="{'active': selectType === 0}">{{desc.positive}}<span class="count">{{positives.length}}</span></span>
      <span @click="choose(1, $event)" class="block negative" :class="{'active': selectType === 1}">{{desc.negative}}<span class="count">{{negatives.length}}</span></span>
    </div>
    <div @click="toggleContent" class="switch" :class="{'on': onlyContent}">
      <i class="icon i-checked_circle"></i>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>
<script>
  // POSITIVE积极的评价; NEGATIVE负面评价
  const ALL = 2
  const POSITIVE = 0
  const NEGATIVE = 1

  export default {
    props: {
      ratings: {
        type: Array,
        default () {
          return []
        }
      },
      selectType: {
        type: Number,
        default: ALL
      },
      onlyContent: {
        type: Boolean,
        default: false
      },
      desc: {
        type: Object,
        default () {
          return {
            all: '全部',
            positive: '满意',
            negative: '不满意'
          }
        }
      }
    },
    computed: {
      positives () {
        return this.ratings.filter((rating) => {
          return rating.rateType === POSITIVE
        })
      },
      negatives () {
        return this.ratings.filter((rating) => {
          return rating.rateType === NEGATIVE
        })
      }
    },
    methods: {
      choose (type, event) {
        this.selectType = type
        this.$emit('choose', type)
      },
      toggleContent (event) {
        this.onlyContent = !this.onlyContent
        this.$emit('toggle')
      }
    }
  }
</script>
<style lang="less">
  .ratingselect{
    background: #fff;
    .rating-type{
      padding: 0.48rem 0;
      margin: 0 0.48rem;
      font-size: 0;
      border-bottom: 0.013333rem solid rgba(7, 17, 27, 0.1);
      .block{
        display: inline-block;
        padding: 0.213333rem 0.32rem;
        margin-right: 0.213333rem;
        border-radius: 1px;
        font-size: 0.32rem;
        line-height: 0.426667rem;
        color: rgb(77, 85, 93);
        .count{
          margin-left: 0.053333rem;
          font-size: 0.213333rem;
        }
        &.active{
          color: #fff;
        }
        &.positive{
          background: rgba(0, 160, 220, 0.2);
          &.active{
            background: rgb(0, 160, 220);
          }
        }
        &.negative{
          background: rgba(77, 85, 93, 0.2);
          &.active{
            background: rgb(77, 85, 93);
          }
        }
      }
    }
    .switch{
      padding: 0.32rem 0.48rem;
      line-height: 0.64rem;
      border-bottom: 0.013333rem solid rgba(7, 17, 27, 0.1);
      color: rgb(147, 153, 159);
      .i-checked_circle{
        display: inline-block;
        vertical-align: top;
        margin-right: 0.106667rem;
        font-size: 0.64rem;
      }
      &.on{
        .i-checked_circle{
          color: #00c850;
        }
      }
      .text{
        font-size: 0.32rem;
        line-height: 0.64rem;
        color: rgb(147, 153, 159);
      }
    }
  }
</style>
