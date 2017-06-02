<style lang="less" src="./goods.less" scoped></style>
<template>
  <div class="goods-wrapper">
    <!-- 左侧菜单 -->
    <div class="menu-wrapper">
      <ul>
        <li v-for="(item, index) in goods" class="menu-item" :class="{'current': currentIndex === index}" @click="selectMenu(index, $event)">
          <span class="text">
            <span class="sign" :class="signClassMap[item.type]" v-show="item.type>0"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <!-- 右侧食品列表 -->
    <div class="foods-wrapper">
      <ul>
        <li class="">
          <h1 class="title">热销榜</h1>
          <ul>
            <li class="food-item">
              <div class="pic">
                <img src="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114">
              </div>
              <div class="content">
                <h2 class="name">皮蛋瘦肉粥</h2>
                <p class="desc">咸粥</p>
                <div class="extra">
                  <span class="sell-count">月售229份</span>
                  <span>好评率100%</span>
                </div>
                <div class="price">
                  <span class="now">10</span>
                  <span class="old">16</span>
                </div>
              </div>
            </li>
            <li class="food-item">
              <div class="pic">
                <img src="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114">
              </div>
              <div class="content">
                <h2 class="name">皮蛋瘦肉粥</h2>
                <p class="desc">咸粥</p>
                <div class="extra">
                  <span class="sell-count">月售229份</span>
                  <span>好评率100%</span>
                </div>
                <div class="price">
                  <span class="now">10</span>
                  <span class="old">16</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['seller'],
    data () {
      return {
        listHeight: [],
        scrollY: 0
      }
    },
    created () {
      this.signClassMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    },
    computed: {
      goods () {
        return this.seller.goods
      },
      currentIndex () {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i]
          let height2 = this.listHeight[i + 1]
          if (this.scrollY >= height1 && this.scrollY < height2) {
            return i
          }
        }
        return 0
      },
      selectFoods () {
        let foods = []
        this.goods.forEach((good) => {
          good.foods.forEach((food) => {
            if (food.count) {
              foods.push(food)
            }
          })
        })
        return foods
      }
    }
  }
</script>
