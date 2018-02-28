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
    <p>这是 {{ name }} {{ msg }}</p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    name: {
      type: String,
      required: true
    }
  }
})
export default class Item extends Vue {
  msg: string = '组件'
  private date: string = ''
  list: Array<string> = []
  params: Object = {
    limit: 10,
    tab: 'share',
    page: 1
  }
  created () {
    this.getData()
  }
  async getData () {
    const data = await this.$rest.index.getIndexInfo(this.params)
    this.list = data.data
  }
}
</script>

