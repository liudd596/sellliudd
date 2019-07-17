<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods" class="menu-item">
          <span class="text">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper"></div>
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
    }
  },
  created () {
    this.$http.get('/api/goods').then((response) => {
      response = response.body;
      if (response.errno === ERR_OK) {
        this.goods = response.data;
        console.log(this.goods);
      }
    });
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
      .menu-item
        height : 54px
        font-size : 12px
        line-height : 14px
        .icon
          display : inline-block
          width: 12px;
          height: 12px;
          margin-right : 4px
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
    .foods-wrapper
      flex: 1 // 让所有弹性盒模型对象的子元素都有相同的长度，忽略它们内部的内容

</style>
