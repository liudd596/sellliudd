<template>
    <div class="shopcart">
      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{'highlight':totalCount>0}">
              <span class="icon-shopping_cart" :class="{'highlight':totalCount>0}"></span>
            </div>
            <div class="num">{{totalCount}}</div>
          </div>
          <div class="price" :class="{'highlight':totalPrice>0}">￥{{totalPrice}}</div>
          <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
        </div>
        <div class="content-right">
          <div class="pay" :class="payClass">
            {{payDesc}}
          </div>
        </div>
      </div>
      <div class="ball-container">
        <transition name="drop" v-for="(ball,index) in balls" v-show="ball.show" class="ball" :key="index">
          <div class="inner"></div>
        </transition>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      selectFoods: { // 选择商品的数组
        type: Array,
        default() {
          return [
            {
              price: 40,
              count: 1
            }
          ];
        }
      },
      deliveryPrice: {
        type: Number,
        default: 0 // 默认值，在组件还未传递值的时候
      },
      minPrice: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        balls: [
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          }
        ]
      };
    },
    computed: {
      totalPrice() { // 计算购物车总和
        let total = 0;
        this.selectFoods.forEach((food) => {
          total += food.price * food.count;
        });
        return total;
      },
      totalCount() {
        let count = 0;
        this.selectFoods.forEach((food) => {
          count += food.count;
        });
        return count;
      },
      payDesc() {
        if (this.totalPrice === 0) {
           return `￥${this.minPrice}元起送`;
        } else if (this.totalPrice < this.minPrice) {
          let diff = this.minPrice - this.totalPrice;
          return `￥${diff}元起送`;
        } else {
          return '去结算';
        }
      },
      payClass() {
        if (this.totalPrice < this.minPrice) {
           return 'not-enough';
        } else {
          return 'enough';
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shopcart
    position : fixed
    left: 0
    bottom : 0
    z-index : 50
    background : #000
    width : 100%
    height: 48px
    .content
      display : flex
      background : #141d27
      font-size : 0
      color: rgba(255,255,255,0.4)
      .content-left
        flex : 1
        .logo-wrapper
          display : inline-block
          position : relative
          top: -10px
          margin : 0 12px
          padding : 6px
          width : 56px
          height: 56px
          box-sizing : border-box
          vertical-align : top
          background : #141d27
          border-radius : 50%
          .num
            position : absolute
            top: 0
            right: 0
            width : 24px
            height: 16px
            line-height : 16px
            text-align :center
            border-radius : 16px
            font-size : 9px
            font-weight : 700
            color : #fff
            background : rgb(240,20,20)
            box-shadow : 0 4px 8px 0 rgba(0,0,0,0.4)
          .logo
            width : 100%
            height : 100%
            border-radius : 50%
            text-align : center
            background : #2b43c
            &.highlight
              background : rgb(0, 160, 220)
            .icon-shopping_cart
              line-height : 44px
              font-size : 24px
              color : #80858a
              &.highlight
                color: #fff
        .price
          display: inline-block
          vertical-align : top
          margin-top : 12px
          line-height: 24px
          padding-right : 12px
          border-sizing: border-box
          border-right: 1px solid rgba(255,255,255,0.1)
          font-size : 16px
          font-weight : 700
          &.highlight
            color : #fff
        .desc
          display : inline-block
          margin : 12px 0 0 12px
          font-size : 10px
          font-weight : 700
          line-height : 24px
      .content-right
        flex : 0 0 105px
        background: #2b333b
        .pay
          font-size : 12px
          height : 48px
          line-height: 48px
          text-align : center
          font-weight : 700
          &.not-enough
            background : #2b333b
          &.enough
            background : #00b43c
            color : #fff
    .ball-container
      .ball
        position : fixed
        left: 32px
        bottom: 22px
        z-index: 200
        &.drop-transition
          transition: all 0.4s
          .inner
            width : 16px
            height: 16px
            border-radius: 50%
</style>
