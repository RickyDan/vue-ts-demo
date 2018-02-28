import { Message } from 'element-ui'
import ajax from '../common/ajax'
import Api from '../interface/ApiInterface'

// 设置错误提示信息
ajax.setTipFn((tips: string) => {
  Message.error(tips)
})

ajax.setSuccess(res => {
  // 缓存用户权限
  if (res.data && res.data.permissions) {
    // store.commit('UPDATE_AUTHLIST', res.data.permissions)
  }
})

const rest: Api = {
  index: {
    getIndexInfo: ajax.query('/login')
  }
}

export default rest
