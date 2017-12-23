<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        <h4>{{ item.title }}</h4>
      </li>
    </ul>
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
    data: Object = {}
    list: Array<string> = []
    get MyName () :string {
      return `My name is ${this.name}`
    }
    created () {
      console.log(this.$rest)
      // this.getData()
    }
    async getData () {
      // const data = await this.$rest.index.getIndexInfo()
      // console.log(data)
      // this.list = data.data.data
    }
  }
</script>
