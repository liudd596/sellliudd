<template>
    <div class="cartcontrol">
      <!-- cart-decrease 减少按钮 -->
      <transition name="move">
        <div class="cart-decrease" v-show="food.count>0" @click="decreaseCart">
          <div class="inner icon-remove_circle_outline"></div>
        </div>
      </transition>
      <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
      <!-- cart-add 增加按钮 -->
      <div class="cart-add icon-add_circle" @click="addCart"></div>
    </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';

  export default {
    props: {
      food: { // 调用cartcountrol的时候关联的是food,增加减少是对该food
        type: Object
      }
    },
    methods: {
      addCart(event) {
        if (!event._constructed) {
          return;
        }
        // console.log('click');
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
        this.$emit('cart-add', event.target); // 添加这句，提交'cart-add'事情给父组件，第二个是要传递的参数
      },
      decreaseCart(event) {
        if (!event._constructed) {
          return;
        }
        if (this.food.count) {
          this.food.count--;
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
.cartcontrol
  font-size : 0
  .cart-decrease
    display : inline-block
    color : rgb(0, 160, 220)
    transition : all 0.4s linear
    font-size : 24px
    &.move-transition
      opacity: 1
      transform : translate3d(0, 0, 0)
      .inner
        display : inline-block
        line-heigh: 24px
        font-size : 24px
        color: rgb(0, 160, 220)
        transition : all 0.4s linear // 定义旋转过渡效果
        transform : rotate(0)
    &.move-enter, &.move-leave
      opacity : 0
      transform : translate3d(24px, 0, 0)
      .inner
        transform : rotate(180deg)
  .cart-count
    display : inline-block
    font-size : 10px
    height : 24px
    line-height : 24px
    vertical-align : top
  .cart-add
    display : inline-block
    color : rgb(0, 160, 220)
    font-size : 24px
</style>
