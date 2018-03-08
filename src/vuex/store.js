import Vue from 'vue'
import Vuex from 'vuex'
import rest from '../rest'
import ajax from '../common/ajax'

Vue.use(Vuex)

const state = {
  userName: '',
  loginStatus: false
}

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations: {
    // 更新用户状态
    UPDATE_USERINFO (state, userInfo) {
      state.userName = userInfo.name
      state.loginStatus = userInfo.loginStatus
    },
    // 退出登陆
    EXIT_LOGIN (state) {
      state.userName = ''
      state.loginStatus = false
    }
  },
  actions: {
    UPDATE_USERINFO ({commit}) {
      return rest.index.getIndexInfo().then(res => {
        if (res.code === 0) {
          commit('UPDATE_USERINFO', res.data)
          return Promise.resolve(res.data)
        }
      })
    },
    EXIT_LOGIN ({commit}) {
      commit('EXIT_LOGIN')
    }
  }
})
ajax.setStore(store)
export default store
