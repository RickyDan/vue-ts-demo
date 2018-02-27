// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import rest from './rest'

Vue.use(Element)
Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  rest,
  template: '<App/>',
  components: { App }
})
