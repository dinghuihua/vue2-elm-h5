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
        <li class="" v-for="item in goods">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item">
              <div class="pic">
                <img :src="food.icon">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc" v-if="food.description">{{food.description}}</p>
                <div class="extra">
                  <span class="sell-count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">{{food.price}}</span>
                  <span class="old" v-if="food.oldPrice">{{food.oldPrice}}</span>
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
    mounted () {
      console.log(this.seller)
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
