<style lang="less" src="./seller_list.less" scoped></style>
<template>
	<ul>
		<li class="shop-item" v-for="item in sellerListArr">
			<div class="logo">
				<img src="/static/images/shop-logo.png">
			</div>
			<div class="main">
				<section class="line-wrapper">
					<h3 class="shopname brand-sign">
						<span>自创品牌麦当劳旗舰（北京店)</span>
					</h3>
					<div class="supportWrap">
						<div class="supper">
							<i>保</i>
						</div>
						<div class="supper">
							<i>票</i>
						</div>
						<div class="supper">
							<i>准</i>
						</div>
					</div>
				</section>
				<section class="line-wrapper">
					<div class="rateWrap">
					  <span>4.8</span>
						<span>月售3234单</span>
					</div>
					<div class="deliveryWrap">
						<span class="delivery">准时达</span>
						<span class="delivery type">蜂鸟专送</span>
					</div>
				</section>
				<section class="line-wrapper">
					<div class="moneylimit">
						<span class="split">￥20起送</span>
						<span class="split">配送费￥5</span>
						<span>￥33/人</span>
					</div>
					<div class="timedistanceWrap">
						<span class="split">1.32km</span>
						<span class="timed">25分钟</span>
					</div>
				</section>
			</div>
		</li>
	</ul>
</template>

<script>
export default {
  name: 'sellerList',
  props: {
    sellers: {
      type: Array
    }
  },
  data () {
    return {
      showThePage: false // 是否展示当前页面
    }
  }
}
</script>

