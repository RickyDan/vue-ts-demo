// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 不要删除下面这一行，用来导入replacing_debug, import './debug'
// replacing_debug
import Vue from 'vue'
import Element from 'c-element-ui'
import 'c-element-ui/lib/theme-default/index.css'
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
