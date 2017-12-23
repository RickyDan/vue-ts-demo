import { Message } from 'element-ui'
import ajax from '../common/ajax'
// 设置错误提示信息
ajax.setTipFn((tips: string) => {
  Message.error(tips)
})

export default {
  index: {
    getIndexInfo: ajax.query('/topics')
  }
}
