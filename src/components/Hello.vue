<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        <h4>{{ item.title }}</h4>
      </li>
    </ul>
    <p>{{ params.tab }}</p>
    <el-date-picker
      v-model="date"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class Hello extends Vue {
    name: string = 'Kawi'
    date: string = ''
    data: Object = {}
    params: Object = {
      limit: 10,
      tab: 'share',
      page: 1
    }
    list: Array<string> = []
    get MyName () :string {
      return `My name is ${this.name}`
    }
    created () {
      // this.getData()
    }
    // async getData () {
    //   const obj: any = this.$rest
    //   const data = await obj.index.getIndexInfo(this.params)
    //   this.list = data.data
    // }
  }
</script>
