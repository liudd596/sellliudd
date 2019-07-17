<template>
  <div>
    <!--:seller="seller"的意思是将seller对象传递给v-header中的seller，而v-header中通过props从父组件中获得-->
     <v-header :seller="seller"></v-header>
     <div class="tab border-1px">
        <div class="tab-item">
          <router-link to="/goods">商品</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/ratings">评论</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/seller">商家</router-link>
        </div>
     </div>
    <!-- 路由外链 -->
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import header from 'components/header/hearder';

const ERR_OK = 0;

export default {
  data() {
    return {
      seller: {} //  将seller作为数据导出
    };
  },
  // created 钩子函数
  created() {
    this.$http.get('/api/seller').then((response) => {
      response = response.body;
     // console.log(response);
      if (response.errno === ERR_OK) {
        this.seller = response.data;
      //  console.log(this.seller);
      }
    });
  },
  // mounted: function() {
  //   // 生命周期
  //   this.$http.get('http://cangdu.org:8001/v1/cities?type=group').then(response => {
  //     console.log(response);
  //   }, response => {
  //     console.log(response);
  //   });
  // },
  components: {
    // 注册组件
    'v-header': header
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixin.styl"

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    // border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a     // &代表父元素  > 为后代选择器
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>
