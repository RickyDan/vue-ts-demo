<template>
  <div class="hello">
    <Item name="typescript + vue"></Item>
    <el-button type="primary" @click="add(3, 4)">点击</el-button>
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

  created () {
    console.log(this.msg)
    this.add(1, 2)
  }

  add (a: number, b: number): number {
    console.log(a + b)
    return a + b
  }
}
</script>
