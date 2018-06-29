import * as types from '../mutationType'
import rest from '../../rest/config'

interface State {
  isLogin: boolean
}

interface Params {
  username: string
  password: string
}

const state: State = {
  isLogin: false
}

const mutations = {
  [types.LOGIN]: (state: State) => {
    localStorage.setItem('username', 'rick')
    state.isLogin = true
  }
}

const actions = {
  async getLogin ({ commit }, params: Params) {
    console.log(params)
    const res = await rest.index.getIndexInfo(params)
    if (res.code === 0) {
      commit(types.LOGIN, res.data)
    }
  }
}

const getters = {
  isLogin (state: State) {
    return state.isLogin
  }
}

export default {
  mutations,
  actions,
  getters,
  state
}
