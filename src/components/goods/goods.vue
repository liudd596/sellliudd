<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods" class="menu-item">
          <span class="text border-1px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul>
        <li v-for="item in goods" class="food-list">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item">
              <div class="icon">
                <img :src="food.icon" alt="">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span>月售{{food.sellerCount}}份</span>
                  <span>好评率{{food.rating}}</span>
                </div>
                <div class="price">
                  <span>￥{{food.price}}</span>
                  <span v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
const ERR_OK = 0;

export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      goods: []
    };
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];

    this.$http.get('/api/goods').then((response) => {
      response = response.body;
      if (response.errno === ERR_OK) {
        this.goods = response.data;
        console.log(this.goods);
      }
    });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"

  .goods
    display : flex
    position : absolute
    top: 176px
    bottom : 46px
    width : 100%
    overflow : hidden
    .menu-wrapper
      flex : 0 0 80px
      width : 80px
      background : #f3f5f7
      text-align : center
      .menu-item
        display : table // 垂直居中最好的布局
        height : 54px
        width : 56px
        font-size : 12px
        line-height : 14px
        padding : 0 12px
        .icon
          display : inline-block
          vertical-align : top
          width: 12px
          height: 12px
          margin-right : 2px
          background-size : 12px 12px
          background-repeat : no-repeat
          &.decrease
            bg-image('decrease_3')
          &.discount
            bg-image('discount_3')
          &.guarantee
            bg-image('guarantee_3')
          &.invoice
            bg-image('invoice_3')
          &.special
            bg-image('special_3')
        .text
          display: table-cell
          width :56px
          vertical-align: middle
          border-1px(rgba(7,17,27,0.1))
          font-size : 12px
    .foods-wrapper
      flex: 1 // 让所有弹性盒模型对象的子元素都有相同的长度，忽略它们内部的内容
      .title
        font-size : 12px
        color: rgb(147,153,159)
        height : 26px
        line-height : 26px
        background : #f3f5f7
        border-left : 2px solid #d9dde1
        padding-left : 14px
      .food-item
        display :flex
        margin : 18px
        padding-bottom : 18px
        border-1px(rgba(7,17,27,0.1))
        &:last-child
          border-none()
        .icon
          width : 114px
          height: 114px
        .content
          margin :2px 18px 0 10px
          .name
            font-size : 14px
            color: rgb(7,17,27)
            line-height : 14px
          .desc,.extra
            font-size : 10px
            color: rgb(147,153,159)
            line-height :10px
            margin : 8px 0 4px

</style>