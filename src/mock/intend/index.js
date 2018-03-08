import Mock from 'mockjs'
import cache from '../../common/cache'

// mock 开关
let mock = cache.getSessionData('mock')
let mockSwitch = mock === 1 ? '' : '_'

Mock.mock(/intend_manage/, 'get' + mockSwitch, {
  'code': 0,
  'message': 'ok',
  'data': {
    'count': 50,
    'list|10': [
      {
        'id': 1,
        'name': '戴姆勒',
        'mobile': '1560987543',
        'car_num': '0045',
        'serie': 'E级轿车 2017款 E300L 豪华型轿车',
        'commit_at': '2018-01-03'
      }
    ]
  }
})

Mock.mock(/intend_exchange/, 'get' + mockSwitch, {
  'code': 0,
  'message': 'ok',
  'data': {
    'count': 50,
    'list|10': [
      {
        'id': 1,
        'mobile': '15899791500',
        'serie': 'E级桥车 2017款 豪华型桥车',
        'old_serie': 'GLC 2014款 紧凑型SUV',
        'commit_at': '2018-02-23'
      }
    ]
  }
})
