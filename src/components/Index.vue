<template>
 <section>
    <el-tabs v-model="params.tab" @tab-click="handleClick">
      <el-tab-pane label="全部" name=""></el-tab-pane>
      <el-tab-pane label="精华" name="good"></el-tab-pane>
      <el-tab-pane label="分享" name="share"></el-tab-pane>
      <el-tab-pane label="问答" name="ask"></el-tab-pane>
      <el-tab-pane label="工作" name="job"></el-tab-pane>
    </el-tabs>
    <div class="list">
      <ul>
        <li v-for="item in list" :key="item.id">
          <span class="avator">
            <img 
              :src="item.author.avatar_url" 
              style="width: 30px; height: 30px; border-radius: 3px"/>
          </span>
        </li>
      </ul>
    </div>
 </section>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  declare interface Tab {
    name: string
  }
  @Component
  export default class Index extends Vue {
    params = {
      tab: '',
      page: 1,
      limit: 20,
      mdrender: true
    }
    list: Array<Object> = []
    created () {
      this.getData()
    }
    
    handleClick (tab: Tab) {
      this.params.tab = tab.name
      this.getData()
    }

    async getData () {
      const res = await this.$rest.index.getIndexInfo(this.params)
      if (res.success) {
        this.list = res.data
      } else {
        this.$message.error(res.message)
      }
    }
  }
</script>
