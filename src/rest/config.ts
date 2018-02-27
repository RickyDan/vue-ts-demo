import { Message } from 'element-ui'
import ajax from '../common/ajax'
import Api from '../interface/ApiInterface'

// 设置错误提示信息
ajax.setTipFn((tips: string) => {
  Message.error(tips)
})

const rest: Api = {
  index : {
    getIndexInfo: ajax.query('/topics')
  }
}

export default rest
