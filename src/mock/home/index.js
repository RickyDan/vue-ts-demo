import Mock from 'mockjs'
import cache from '../../common/cache'

// mock 开关
let mock = cache.getSessionData('mock')
let mockSwitch = mock === 1 ? '' : '_'

Mock.mock(/order\/index/, 'get' + mockSwitch, {
  code: 0,
  message: 'ok',
  data: {
    'orders|10': [
      {
        'id|+1': 1,
        order_id: 12101,
        user: '@cname',
        update_time: '2018-02-23',
        product: 'ipad pro',
        price: '3889'
      }
    ],
    total: 50
  }
})
