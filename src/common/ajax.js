import axios from 'axios'
import cookie from './cookie'

class Ajax {
  constructor (options) {
    this.baseUrl = options && options.baseUrl ? options.baseUrl : 'replacing_api'
    this.authUrl = options && options.authUrl ? options.authUrl : 'replacing_auth'
    this.$store = null
    this.$http = axios
    this.isLogin = false
    this.queryMap = {}
    this.createMap = {}
    this.putWayMap = {}
    this.patchMap = {}
    this.deleteMap = {}
    // 正在登陆
    this.logining = false
    this.next = ''
    // 输出提示
    this.showTips = (tips) => {
      if (window.console) {
        console.log(tips)
      }
    }
    // 通用拦截器
    if (options && typeof options.success === 'function') {
      this.success = options.success
    } else {
      this.success = res => {}
    }
    axios.interceptors.request.use(
      config => {
        let csrftoken = cookie.getCookie('csrf-token')
        if (!/^(GET|HEAD|OPTIONS|TRACE)$/i.test(config.method) && !axios.credentials) {
          config.headers.common['X-CSRF-Token'] = csrftoken
        }
        return config
      },
      err => {
        return Promise.reject(err)
      }
    )
    // ajax 全局错误处理
    axios.interceptors.response.use(
      response => {
        this.success(response)
        return response
      },
      err => {
        if (err.response) {
          switch (err.response.status) {
            case 404:
              this.showTips('请求发生404错误')
              break
            case 500:
              this.showTips('请求发生500错误')
              break
            case 504:
              this.showTips('请求超时')
              break
            case 400:
            case 401:
              if (!this.logining) {
                this.logining = true
                if (window.location.hash) {
                  this.logining = true
                  if (window.location.hahs) {
                    this.next = encodeURIComponent(window.location.hash)
                  }
                }
              }
              break
            default:
              this.showTips('error:' + err.response.status)
              break
          }
          return Promise.reject(err.response.data) // 返回接口返回的错误信息
        }
      }
    )
  }

  // 设置用展示提示信息的函数
  setTipFn (fn) {
    this.showTips = fn
  }
  // 设置自定义的回调
  setSuccess (success) {
    this.success = success
  }

  setStore (store) {
    this.$store = store
  }

  parse (path, id) {
    if (typeof id === 'string') {
      return path + '/' + id
    }
    if (typeof id === 'object') {
      let search = '?'
      let counter = 0
      for (let key in id) {
        if (counter) search += '&'
        search += key + '=' + id[key]
        counter++
      }
      return path + search
    }
    return path
  }
  query (path, config1 = {cache: false}) {
    if (!this.queryMap[path]) {
      let url = ''
      this.queryMap[path] = (id, expand, config2 = {}, isReturnRes) => {
        // 合并config
        let config = Object.assign({}, config1, config2)
        // 关闭缓存
        if (!config.cache) {
          let headers = config.headers = config.headers || {}
          headers['Cache-Control'] = 'no-cache'
          headers['If-Modified-Since'] = '0'
        }
        url = expand ? (path + '/' + expand) : path
        let newPath = id ? this.parse(url, id) : url
        let baseUrl = config.baseUrl || this.baseUrl
        return this.$http.get(baseUrl + newPath, config).then((res) => {
          return isReturnRes ? res : res.data
        }, (res) => {
          return res
        })
      }
    }
    return this.queryMap[path]
  }

  // 增
  create (path, config1 = {cache: false}) {
    if (!this.createMap[path]) {
      let url = ''
      this.createMap[path] = (data, expand, config2 = {}, isReturnRes) => {
        // 合并config
        let config = Object.assign({}, config1, config2)
        // 关闭缓存
        if (!config.cache) {
          let headers = config.headers = config.headers || {}
          headers['Cache-Control'] = 'no-cache'
          headers['If-Modified-Since'] = '0'
        }
        url = expand ? (url = path + '/' + expand) : path
        let baseUrl = config.baseUrl || this.baseUrl
        return this.$http.post(baseUrl + url, data, config).then((res) => {
          return isReturnRes ? res : res.data
        }, (res) => {
          return res
        })
      }
    }
    return this.createMap[path]
  }

  // put 方法~
  putWay (path, config1 = {cache: false}) {
    if (!this.putWayMap[path]) { // cache path closure
      let url = ''
      this.putWayMap[path] = (data, expand, config2 = {}, isReturnRes) => {
        // 合并config
        let config = Object.assign({}, config1, config2)
        // 关闭缓存
        if (!config.cache) {
          let headers = config.headers = config.headers || {}
          headers['Cache-Control'] = 'no-cahce'
          headers['If-Modified-Since'] = '0'
        }
        url = expand
          ? (url = path + '/' + expand)
          : path
        let baseUrl = config.baseUrl || this.baseUrl
        return this
          .$http
          .put(baseUrl + url, data, config)
          .then((res) => {
            return isReturnRes
              ? res
              : res.data
          }, (res) => {
            return res
          })
      }
    }
    return this.putWayMap[path]
  }
  // delete方法
  delete (path, config1 = {
    cache: false
  }) {
    if (!this.deleteMap[path]) {
      let url = ''
      this.deleteMap[path] = (data, expand, config2 = {}) => {
        // 合并config
        let config = Object.assign({}, config1, config2)
        // 关闭缓存
        if (!config.cache) {
          let headers = config.headers = config.headers || {}
          headers['Cache-Control'] = 'no-cahce'
          headers['If-Modified-Since'] = '0'
        }
        url = expand
          ? (url = path + '/' + expand)
          : path
        let baseUrl = config.baseUrl || this.baseUrl
        return this
          .$http
          .delete(baseUrl + url, data, config)
          .then((res) => {
            return res.data
          }, (res) => {
            return res
          })
      }
    }
    return this.deleteMap[path]
  }
}

export default new Ajax()
