// 引入并申明使用
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Search from '@/views/Search'

const originPush = VueRouter.prototype.push
VueRouter.prototype.push = function(location, onResolved, onRejected) {
  // location就是我们调用的this.$router.push传递过来的参数
  if (onResolved === undefined && onRejected === undefined) {
    return originPush.call(this, location).catch(()=> {})
  }else {
    return originPush.call(this, location, onResolved, onRejected)
  }
}

const originReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function(location, onResolved, onRejected) {
  if (onResolved === undefined && onRejected === undefined) {
    return originReplace.call(this, location).catch(()=> {})
  } else {
    return originReplace.call(this, location, onResolved, onRejected)
  }
}
// 向外暴露一个路由器对象

export default new VueRouter({
  mode: 'history',
  // 路由的配置其实就是配置路径和组件的映射
  routes: [
    // 重定向路由
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      // 配置的时候注册了组件
      component: Home
    },
    {
      path: '/login',
      component: Login,
      // 路由对象当中的元配置项，可以配置我们需要配置的所有数据
      meta: {
        isHidden: true
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        isHidden: true
      }
    },
    {
      path: '/search/:keyword',
      component: Search,
      name: 'search',// 命名路由
      // 这个props是我们在路由组件当中操作params参数的快捷方法
      // 将props置为true时，会默认把传递过来的params参数额外的映射为Search组件当中的属性去操作
      props: true
    }
  ]//配置路由
  
})