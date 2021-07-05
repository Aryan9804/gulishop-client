<template>
  <div>
    <!-- 3.使用 -->
    <Header></Header>
      <router-view></router-view>
    <!-- <Footer v-show="$route.path != '/login' && $route.path != '/register'"></Footer> -->
    <Footer v-show="!$route.meta.isHidden"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  // 非路由组件的注册
  components: {
    // 2.注册
    Header,
    Footer
  }
}
</script>

<style>
  
</style>
