<template>
  <section v-if="index === 'intend'">
    <h4>意向管理</h4>
    <el-tabs v-model="params.active" @tab-click="handleTabClick">
      <el-form :model="queryParams" :inline="true">
        <el-form-item prop="time">
          <el-date-picker 
            v-model="queryParams.time"
            type="daterange"
            start-placeholder="请选择时间段:">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <i class="el-icon-search">
          </i>
          <i class="el-icon-update">
          </i>
        </el-form-item>
        <el-form-item>
          <el-button>
            导出
          </el-button>
        </el-form-item>
      </el-form>
      <el-tab-pane label="购车意向客户" name="buy">
        <el-table
          :data="data.list"
          style="width: 100%"
          border>
          <el-table-column prop="name" label="车主姓名"></el-table-column>
          <el-table-column prop="mobile" label="手机号码"></el-table-column>
          <el-table-column prop="car_num" label="车辆编号"></el-table-column>
          <el-table-column prop="serie" label="意向车型"></el-table-column>
          <el-table-column prop="commit_at" label="提交时间"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="text">联系</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="置换意向客户" name="exchange">
        <el-table
          :data="data.list"
          style="width: 100%"
          border>
          <el-table-column prop="mobile" label="手机号码">
          </el-table-column>
          <el-table-column prop="serie" label="选择新车"></el-table-column>
          <el-table-column prop="old_serie" label="选择旧车"></el-table-column>
          <el-table-column prop="commit_at" label="提交时间"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="text">联系</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-pagination
          @current-change="handleCurrentChange"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, prev, pager, next, jumper"
          :total="data.count">
        </el-pagination>
    </el-tabs>
  </section>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { Message } from 'c-element-ui'
  import { Params, Res, ResExchange } from './intends'

  @Component
  export default class Intend extends Vue {
    @Prop({type: String, required: true})
    index: string
    
    params: Params = {
      per_page: 1,
      count: 10,
      time: '',
      active: 'buy'
    }

    queryParams = {
      time: ''
    }

    data = {}

    created () {
      this.getIntendData()
    }

    async getIntendData () {
      const res: Res = await this.$rest.index.getIntends()
      if (res.code === 0) {
        this.data = res.data
      } else {
        Message.error(res.message)
      }
    }

    async getExchangeData () {
      const res: ResExchange = await this.$rest.index.getExchange()
      if (res.code === 0) {
        this.data = res.data
      } else {
        Message.error(res.message)
      }
    }

    handleTabClick (tab: any) {
      if (tab.name === 'buy') {
        this.getIntendData()
      } else {
        this.getExchangeData()
      }
    }

    handleCurrentChange (val: number) {
      this.params.per_page = val
      this.getIntendData()
    }
  }
</script>

<style scoped lang="less">
</style>