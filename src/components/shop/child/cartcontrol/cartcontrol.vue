<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart($event)">
        <i class="icon i-reduce_circle inner"></i> 
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add" @click.stop.prevent="addCart($event)">
      <i class="icon i-add_circle"></i>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
export default{
  props: {
    food: {
      type: Object
    }
  },
  data () {
    return {
    }
  },
  methods: {
    addCart (event) {
      if (!this.food.count) {
        /* this.food.count = 1 新增属性 Object.defineProperty()检查不到 */
        Vue.set(this.food, 'count', 1)
      } else {
        this.food.count ++
      }
      // 向父组件传递事件
      this.$emit('add', event.target)
    },
    decreaseCart (event) {
      if (this.food.count) {
        this.food.count --
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .cartcontrol{
    font-size: 0;
    .cart-decrease{
      display: inline-block;
      padding: 0.16rem;
      opacity: 1;
      transform: translate3d(0, 0, 0);
      .inner{
        display: inline-block;
        line-height: 0.533333rem;
        font-size: 0.533333rem;
        color: rgb(0, 160, 220);
        transition: all 0.4s linear;
        transform: rotate(0);
      }
      &.move-enter-active, &.move-leave-active{
        transition: all 0.4s linear;
      }
      &.move-enter, &.move-leave-active{
        opacity: 0;
        transform: translate3d(0.64rem, 0, 0);
        .inner{
          transform: rotate(180deg);
        }
      }
    }
    .cart-count{
      display: inline-block;
      vertical-align: top;
      width: 0.32rem;
      padding-top: 0.16rem;
      line-height: 0.533333rem;
      text-align: center;
      font-size: 0.3rem;
      color: #666;
    }
    .cart-add{
      display: inline-block;
      padding: 0.16rem;
      line-height: 0.533333rem;
      font-size: 0.533333rem;
      color: rgb(0, 160, 220);
    }

  }
</style>
