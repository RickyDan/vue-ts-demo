import Vue from 'vue'
import Vuex from 'vuex'
import rest from '../rest'
import ajax from '../common/ajax'

Vue.use(Vuex)

const state = {
  userName: '' // 用户名
}

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations: {
    // 更新用户名
    UPDATE_USERINFO (state, userInfo) {
      state.userName = userInfo.name
    }
  },
  actions: {
    UPDATE_USERINFO({commit}) {
      return rest.index.getIndexInfo().then(res => {
        if (res.code === 0) {
          commit('UPDATE_USERINFO', res.data)
          return Promise.resolve(res.data)
        }
      })
    }
  }
})
ajax.setStore(store)
export default store
