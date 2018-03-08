import Mock from 'mockjs'
import cache from '../../common/cache'

// mock 开关
let mock = cache.getSessionData('mock')
let mockSwitch = mock === 1 ? '' : '_'

Mock.mock(/user_list/, 'get' + mockSwitch, {
  'code': 0,
  'message': 'ok',
  'data': {
    'count': 50,
    'user_list|10': [
      {
        'id': '1',
        'login_name': 'benz',
        'email': 'benz@gmail.com',
        'name': '下周回国贾跃亭',
        'mobile': '15815002432',
        'created_at': '2017-07-30',
        'status': 1,
        'status_text': '正常'
      }
    ]
  }
})
