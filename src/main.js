import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import './plugins/element.js'
import './assets/css/reset.css'
import './assets/css/common.css'
import router from './router'

// 引入echarts
import echarts from 'echarts'
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
