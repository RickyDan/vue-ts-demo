import { Message } from 'c-element-ui'
import ajax from '../common/ajax'
import Api from '../interface/ApiInterface'

declare interface Permissions {
  permissions: Array<string>
}
declare interface Res {
  data: Permissions
}

// 设置错误提示信息
ajax.setTipFn((tips: string) => {
  Message.error(tips)
})

ajax.setSuccess((res: Res) => {
  // 缓存用户权限
  if (res.data && res.data.permissions) {
    // store.commit('UPDATE_AUTHLIST', res.data.permissions)
  }
})

const rest: Api = {
  index: {
    getIndexInfo: ajax.query('/login'),
    getCarSources: ajax.query('/car_sources')
  }
}

export default rest
