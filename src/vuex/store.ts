import Vue from 'vue'
import Vuex, { Commit, Dispatch } from 'vuex'
import login from './modules/login'
import order from './modules/order'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    login,
    order
  }
})
