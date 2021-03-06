import '../mock'
import cache from '../common/cache'
import url from '../common/url'
cache.clearSessionData()

// uglify 条件编译
if (typeof DEBUG === 'undefined') {
  let debug = url.getSearch().debug
  let d = false
  if (debug === '1') {
    cache.setSessionData('debug', true)
    d = true
  } else if (debug === '2') {
    cache.setSessionData('debug', false)
    d = false
  }
  window.DEBUG = cache.getSessionData('debug') || !!d
}

// mock 配置
if (DEBUG) {
  // mock 开关
  let mock = url.getSearch().mock || cache.getSessionData('mock')
  cache.setSessionData('mock', 1)
  if (mock === '2') {
    cache.setSessionData('mock', 2)
  }
}
