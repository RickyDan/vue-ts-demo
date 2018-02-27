import Vue from 'vue'
import Api from '../interface/ApiInterface'

declare module 'vue/types/vue' {
  // Vue 的全局属性
  interface Vue {
    $rest: Api
  }
}

declare module 'vue/types/options' {
  // Vue 构造函数接收的额外选项
  interface ComponentOptions<V extends Vue> {
    rest?: object
  }
}

declare module 'c-element-ui'
declare module 'vue-lazyload'
declare module 'vue-ueditor'