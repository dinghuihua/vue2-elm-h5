<template>
  <div class="star" :class="starType">
    <span v-for="(itemClass, index) in itemClasses" :class="itemClass" class="star-item" key="index"></span>
  </div>
</template>
<script>
  const LENGTH = 5
  const CLS_ON = 'on'
  const CLS_HALF = 'half'
  const CLS_OFF = 'off'

  export default {
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    computed: {
      starType () {
        return 'star-' + this.size
      },
      itemClasses () {
        let result = []
        let score = Math.floor(this.score * 2) / 2
        // 是否有半星
        let hasDecimal = score % 1 !== 0
        // 向下取整 如 3.7 -> 3 得到全星的数量
        let integer = Math.floor(score)
        for (var i = 0; i < integer; i++) {
          result.push(CLS_ON)
        }
        if (hasDecimal) {
          result.push(CLS_HALF)
        }
        while (result.length < LENGTH) {
          result.push(CLS_OFF)
        }
        return result
      }
    }
  }
</script>
<style lang="less" scoped>
  .bg-image(@url) {
    background-image: url("@{url}@2x.png");
    @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
      background-image: url("@{url}@3x.png");
    }
  }
  .star{
    font-size: 0;
    .star-item{
      display: inline-block;
      background-repeat: no-repeat;
    }
    &.star-48{
      .star-item{
        width: 0.533333rem; // 40/75rem
        height: 0.533333rem;
        margin-right: 0.586667rem;
        background-size: 0.533333rem;
        &.last-child{
          margin-right: 0;
        }
        &.on{
          .bg-image('star48_on');
        }
        &.half{
          .bg-image('star48_half');
        }
        &.off{
          .bg-image('star48_off'); 
        }
      }
    }
    &.star-36{
      .star-item{
        width: 0.4rem; // 30/75rem
        height: 0.4rem;
        margin-right: 0.16rem;
        background-size: 0.4rem;
        &.last-child{
          margin-right: 0;
        }
        &.on{
          .bg-image('star36_on');
        }
        &.half{
          .bg-image('star36_half');
        }
        &.off{
          .bg-image('star36_off');
        }
      }
    }
    &.star-24{
      .star-item{
        width: 0.266667rem; // 20/75rem
        height: 0.266667rem;
        margin-right: 0.08rem;
        background-size: 0.266667rem;
        &.last-child{
          margin-right: 0;
        }
        &.on{
          .bg-image('star24_on');
        }
        &.half{
          .bg-image('star24_half');
        }
        &.off{
          .bg-image('star24_off');
        }
      }
    }
  }
</style>
