<template>
    <div class="hearder">
      <div class="content-wrapper">
        <div class="avatar">
          <img width="64" height="64" :src="seller.avatar">
        </div>
        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{seller.name}}</span>
          </div>
          <div class="description">
            {{seller.description}}/{{seller.deliveryTime}}分钟送达
          </div>
          <div v-if="seller.supports" class="support">
            <span class="icon" :class="classMap[seller.supports[0].type]"></span>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
        </div>
        <div v-if="seller.supports" class="support-count" @click="showDetail">
          <span class="count">{{seller.supports.length}}个</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
      <div class="bulletin-wrapper">
          <span class="bulletin-title"></span>
          <span class="bulletin-text">{{seller.bulletin}}</span>
          <i class="icon-keyboard_arrow_right" @click="showDetail"></i>
      </div>
      <div class="background">
          <img :src="seller.avatar" alt="" width="100%" height="100%">
      </div>
      <div class="detail" v-if="detailShow">
          <div class="detail-wrapper claerfix">
            <div class="detail-main">
              <div class="name">{{seller.name}}</div>
            </div>
          </div>
          <div class="detail-close">
            <i class="icon-close"></i>
          </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        detailShow: false
      };
    },
    methods: {
      showDetail() {
        this.detailShow = true;
      }
    },
    created () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"

  .hearder
    position : relative
    color: #fff
    overflow : hidden
    background-color : rgba(7,17,27,0.5)
    .content-wrapper
       padding: 24px 12px 18px 24px
       position : relative
       .avatar
         display: inline-block
         vertical-align : top
         img
           border-radius : 2px
       .content
         display: inline-block
         margin-left: 16px
         font-size: 14px
         .title
           margin: 2px 0 8px 0
           .brand
             display: inline-block
             vertical-align : top
             width: 30px
             height: 18px
             bg-image('brand')
             background-size: 30px 18px
             background-repeat : no-repeat
           .name
             margin-left: 6px
             font-size: 16px
             font-weight : bold
             line-height : 18px
         .description
           font-size: 12px
           line-height : 12px
           margin-bottom : 10px
         .support
           margin-bottom : 2px
           .icon
             display : inline-block
             width: 12px;
             height: 12px;
             margin-right : 4px
             background-size : 12px 12px
             background-repeat : no-repeat
             &.decrease
               bg-image('decrease_1')
             &.discount
               bg-image('discount_1')
             &.guarantee
               bg-image('guarantee_1')
             &.invoice
               bg-image('invoice_1')
             &.special
               bg-image('special_1')
           .text
             font-size: 10px
             line-height : 12px
             vertical-align : top
       .support-count
         position : absolute
         right : 12px
         bottom : 14px
         padding : 0 8px
         height : 24px
         line-height: 24px
         border-radius : 14px
         background-color : rgba(0.0.0.0.2)
         text-align : center
         cursor : pointer
         .count
           font-size : 10px
           vertical-align : middle
         .icon-keyboard_arrow_right
           font-size : 10px
           margin-left: 2px
           line-height : 24px
    .bulletin-wrapper
       position : relative
       background-color : rgba(7,17,27,0.2)
       height: 28px
       padding: 0 22px 0 12px
       line-height : 28px
       white-space : nowrap
       overflow : hidden
       text-overflow : ellipsis // 对溢出文本显示省略号
       .bulletin-title
         bg-image("bulletin")
         width : 22px
         height : 12px
         display : inline-block
         background-size : 22px 12px
         background-repeat : no-repeat
         vertical-align : top
         margin-top : 9px
       .bulletin-text
         font-size: 10px
         margin: 0 4px
       .icon-keyboard_arrow_right
         position: absolute
         right: 12px
         font-size: 10px
         top: 10px
    .background
      position : absolute
      top: 0px
      left: 0px
      width: 100%
      height: 100%
      z-index: -1
      filter : blur(5px)
    .detail
       position : fixed
       top: 0
       left: 0
       background-color : rgba(7,17,27,0.8)
       z-index : 100
       width : 100%
       height: 100%
       overflow : auto
       .detail-wrapper
         min-height: 100%
         width : 100%
         .detail-main
           margin-top : 64px
           padding-bottom : 64px
           .name
             text-align: center
             font-size : 16px
             font-weight : 700
       .detail-close
         position : relative
         width : 32px
         height: 32px
         margin : -64px auto 0
         clear: both
         font-size : 32px
</style>
