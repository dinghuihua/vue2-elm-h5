<style lang="less" src="./footer_nav.less" scoped></style>
<template>
  <div class="footer_nav">
    <router-link to="/index">
      <i class="icon i-home"></i>
      <span class="text">首页</span>
    </router-link>
    <router-link to="/discover">
      <i class="icon i-discover"></i>
      <span class="text">发现</span>
    </router-link>
    <router-link to="/order">
      <i class="icon i-order"></i>
      <span class="text">订单</span>
    </router-link>
    <router-link to="/profile">
      <i class="icon i-my"></i>
      <span class="text">我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {}
  }
}
</script>
