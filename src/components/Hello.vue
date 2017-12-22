<template>
  <div>
    <p>{{MyName}}</p>
    <el-date-picker
      v-model="date"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class Hello extends Vue {
    name: string = 'Kawi'
    date: string = ''

    get MyName () :string {
      return `My name is ${this.name}`
    }
    created () {
      console.log(this)
    }
  }
</script>
