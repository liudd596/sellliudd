// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
//  路由
import VueRouter from 'vue-router';
//  网络请求模块
import VueResource from 'vue-resource';
// 1. 定义组件，也可以从别的文件引入import
//  const goods = { template:'<div>I am goods（商品）!</div>' }
import App from './App';
import goods from 'components/goods/goods';
import seller from 'components/seller/seller';
import ratings from 'components/ratings/ratings';
//  全局引入所有样式
import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

// 2.定义路由  数组形式
// 每个路由应该映射一个组件。 其中"component" 可以是
const routes = [
  {path: '/goods', component: goods},
  {path: '/seller', component: seller},
  {path: '/ratings', component: ratings}
];

// 3. 创建一个路由器实例，并且配置路由规则
const router = new VueRouter({
  mode: 'history', // 去掉路由地址的#
  linkActiveClass: 'active', // 设置路由的active样式
  routes
});
// 4. 创建和挂载根实例
// 记得要通过 router 配置参数注入路由，从而让整个应用都有路由功能
var vm = new Vue({
  // el: '#app',
  router,
  // render函数是渲染一个视图，然后提供给el挂载，如果没有render那页面什么都不会出来
  //
  render: h => h(App)
}).$mount('#app');

Vue.use({
  vm
});

// 打开页面，自动显示商品页
router.push('/goods');
