<style lang="less" src="./seller_list.less" scoped></style>
<template>
  <ul>
    <li class="shop-item" v-for="item in sellers" @click="toDetail(item.id)">
      <div class="logo">
        <img :src="item.avatar">
      </div>
      <div class="main">
        <section class="line-wrapper">
          <h3 class="shopname" :class="{'brand-sign': item.brand}">
            <span>{{item.name}}</span>
          </h3>
          <div class="supportWrap">
            <div class="supper" v-if="item.bao">
              <i>保</i>
            </div>
            <div class="supper" v-if="item.piao">
              <i>票</i>
            </div>
            <div class="supper" v-if="item.zhun">
              <i>准</i>
            </div>
          </div>
        </section>
        <section class="line-wrapper">
          <div class="rateWrap">
            <star :size="24" :score="item.score"></star>
            <span class="rate-score">{{item.score}}</span>
            <span>月售{{item.sellCount}}单</span>
          </div>
          <div class="deliveryWrap">
            <span class="delivery" v-if="item.zhun">准时达</span>
            <span class="delivery type" v-if="item.is_fengniao">蜂鸟专送</span>
          </div>
        </section>
        <section class="line-wrapper">
          <div class="moneylimit">
            <span class="split">￥{{item.minPrice}}起送</span>
            <span class="split">配送费￥{{item.deliveryPrice}}</span>
            <span>￥{{item.avgPrice}}/人</span>
          </div>
          <div class="timedistanceWrap">
            <span class="split">1.32km</span>
            <span class="timed">{{item.deliveryTime}}分钟</span>
          </div>
        </section>
      </div>
    </li>
  </ul>
</template>

<script>
import star from '../star/star'
export default {
  name: 'sellerList',
  props: ['sellers'],
  data () {
    return {
      showThePage: false // 是否展示当前页面
    }
  },
  methods: {
    toDetail (id) {
      console.log('点击seller list item')
      this.$router.push({path: 'shop', query: { id: id }})
    }
  },
  components: {
    star
  }
}
</script>

