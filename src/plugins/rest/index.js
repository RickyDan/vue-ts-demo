import config from '../../rest/config'

export default class Rest {
  static install () {}
  constructor () {
    Object.assign(this, config)
  }
}

function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.mixin({
    beforeCreate () {
      const options = this.$options
      if (options.rest) {
        this.$rest = options.rest
      } else if (options.parent && options.parent.$rest) {
        this.$rest = options.parent.$rest
      }
    }
  })
}

Rest.install = install
Rest.version = '__VERSION__'
