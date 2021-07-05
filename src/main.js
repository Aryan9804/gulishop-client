import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
// 全局注册，如果一个非路由组件被多个组件使用，那么定义在components，注册在
// main.js里面全局注册
Vue.component('TypeNav', TypeNav)
Vue.config.productionTip = false
var a = 100
new Vue({
  render: h => h(App),
  router//让我们所有的组件内部都可以使用this.$router和this.$route
}).$mount('#app')
