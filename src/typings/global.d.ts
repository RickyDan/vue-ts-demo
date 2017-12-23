import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $rest: object
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    rest: object
  }
}
