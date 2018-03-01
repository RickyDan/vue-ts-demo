import Mock from 'mockjs'
import cache from '../../common/cache'

// mock 开关
let mock = cache.getSessionData('mock')
let mockSwitch = mock === 1 ? '' : '_'

Mock.mock(/car_sources/, 'get' + mockSwitch, {
  'code': 0,
  'message': 'ok',
  'data': {
    'count': 50,
    'car_series|5': [
      {
        'id|1-50': 1,
        'serie_name': 'B级豪华运动旅行车2017款 B200 1双离 时尚型2017年款',
        'vin': 'LEDR304355',
        'status_text': '在售',
        'status': 1,
        'last_updated': '2018-03-01 13:00'
      }
    ]
  }
})
