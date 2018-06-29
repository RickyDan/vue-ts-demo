import * as types from '../mutationType'
import rest from '../../rest/config'
import { Message } from 'element-ui'

interface Params {
  per_page: number
  current_page: number
}

interface State {
  dataSource: Object[],
  total: Number
}

const state: State = {
  dataSource: [],
  total: 0
}

const actions = {
  async getOrders ({ commit }, params: Params) {
    const res = await rest.orders.getOrderList(params)
    if (res.code === 0) {
      commit(types.GET_ORDER_LIST, res.data)
    } else {
      Message.error(res.message)
    }
  }
}

const mutations = {
  [types.GET_ORDER_LIST]: (state: State, dataSource) => {
    state.dataSource = dataSource.orders
    state.total = dataSource.total
  }
}

const getters = {
  orders (state: State) {
    return state.dataSource
  },
  total (state: State) {
    return state.total
  }
}

export default {
  mutations,
  actions,
  state,
  getters
}
