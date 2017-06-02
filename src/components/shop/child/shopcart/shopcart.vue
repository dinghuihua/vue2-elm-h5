<style lang="less" src="./shopcart.less" scoped></style>
<template>
	<div class="shopcart">
    <div class="content">
      <div class="con-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{'highlight': totalCount>0}">
            <i class="icon i-cart" :class="{'highlight': totalCount>0}"></i>
          </div>
          <div class="num" v-show="totalCount>0">{{totalCount}}</div>
        </div>
        <div class="price" :class="{'highlight': totalPrice>0}">￥{{totalPrice}}</div>
        <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
      </div>
      <div class="con-right">
        <div class="pay not-enough">￥{{minPrice}}起送</div>
      </div>
    </div>
    <!-- 购车车弹出层food列表 -->
    <div class="shopcart-list" v-show="listShow">
      <div class="list-header">
        <h1 class="title">购物车</h1>
        <span class="empty">清空</span>
      </div>
      <div class="list-content">
        <ul>
          <li class="food">
            <span class="name">娃娃菜炖豆腐</span>
            <div class="price">
              <span>￥30</span>
            </div>
          </li>
          <li class="food">
            <span class="name">娃娃菜炖豆腐</span>
            <div class="price">
              <span>￥30</span>
            </div>
          </li>
          <li class="food">
            <span class="name">娃娃菜炖豆腐</span>
            <div class="price">
              <span>￥30</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 弹出层后 其他部分蒙层 -->
    <transition name="fade">
      <div class="list-mask" @click="hideList()" v-show="listShow"></div>
    </transition>
  </div>
</template>
<script>
  export default {
    props: {
      selectFoods: {
        type: Array,
        default () {
          return []
        }
      },
      deliveryPrice: {
        type: Number,
        default: 0
      },
      minPrice: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        listShow: false
      }
    },
    computed: {
      totalCount () {
        let count = 0
        this.selectFoods.forEach((food) => {
          count += food.count
        })
        return count
      },
      totalPrice () {
        let total = 0
        this.selectFoods.forEach((food) => {
          total += food.price * food.count
        })
        return total
      }
    }
  }
</script>
