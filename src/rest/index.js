import Vue from 'vue'
import Rest from '../plugins/rest'
import config from './config'
Vue.use(Rest)
export default new Rest({
  rest: config
})
