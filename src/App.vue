<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <div class="loading_jump" v-if="isLoading">
      <div class="loading_jump1">正在加载中...</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    computed: {
      isLoading () {
        return this.$store.getters.getLoading
      }
    }
  }
</script>

<style lang="less">
  @import "style/index.less";
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>
