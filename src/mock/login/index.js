import Mock from 'mockjs'
import cache from '../../common/cache'

// mock 开关
let mock = cache.getSessionData('mock')
let mockSwitch = mock === 1 ? '' : '_'

Mock.mock(/login/, 'post' + mockSwitch, {
  'code': 0,
  'message': 'ok'
})

Mock.mock('/logout', 'get' + mockSwitch, {
  'code': 0,
  'message': 'ok',
  'data': '成功登出'
})
