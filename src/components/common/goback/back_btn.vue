<template>
  <i class="icon i-back_left back-btn" @click="goback"></i>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      goback () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="less" scoped>
  .back-btn{
    display: inline-block;
    font-size: 0.533333rem;
    color: #fff;
    font-weight: bold;
  }
</style>
