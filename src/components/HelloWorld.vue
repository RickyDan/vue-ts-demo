<template>
  <div class="hello">
    <Item name="typescript + vue"></Item>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Item from './Item.vue'

@Component({
  components: {
    Item
  }
})
export default class HelloWorld extends Vue {
  msg: string = 'WelCome to Your Vue-Typescript App'
}
</script>
