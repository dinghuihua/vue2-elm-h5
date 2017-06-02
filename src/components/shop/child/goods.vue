<template>
  <div class="goods-wrapper">
    <div class="menu-wrapper">
      <ul>
        <li v-for="(item, index) in goods" class="menu-item" :class="{'current': currentIndex === index}" @click="selectMenu(index, $event)">
          <span class="text">
            <span class="sign" :class="signClassMap[item.type]" v-show="item.type>0"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper"></div>
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
<style lang="less" scoped>
// 提取样式
.sign::after{
  display: inline-block;
  width: 0.32rem;
  height: 0.32rem;
  text-align: center;
  margin-right: 0.053333rem;
  border-radius: 0.026667rem;
  color: #fff;
  font-weight: bold;
}
.decrease::after{
  content: '减';
  background-color: #d02424;
}
.discount::after{
  content: '折';
  background-color: #06adc3;
}
.special::after{
  content: '特';
  background-color: #24d0a5;
}
.invoice::after{
  content: '票';
  background-color: #791717;
}
.guarantee::after{
  content: '保';
  background-color: #717917;
}

.goods-wrapper{
  display: flex;
  width: 100%;
  .menu-wrapper{
    flex: 0 0 2.133333rem;
    width: 2.133333rem;
    background-color: #f3f5f7;
    .menu-item{
      position: relative;
      display: table;
      width: 2.133333rem;
      height: 1.44rem;
      line-height: 0.373333rem;
      padding: 0 0.32rem;
      &.current{
        background-color: #fff;
        .text{
          border-bottom: 0;
        }
        &::after{
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: .08rem;
          background-color: #3190e8;
        }
      }
      .text{
        display: table-cell;
        vertical-align: middle;
        line-height: 0.373333rem;
        font-size: 0.32rem;
        color: rgb(77, 85, 93);
        font-weight: 200;
        border-bottom: 0.013333rem solid rgba(7, 17, 27, 0.1);
      }
    }
  }
  .foods-wrapper{
    flex: 1;
    background-color: red;
  }
}
</style>
