<template>
  <section>
    <el-form :model="queryParams" :inline="true">
      <el-form-item prop="time">
        <el-date-picker 
          v-model="queryParams.time"
          type="daterange"
          start-placeholder="起止时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item prop="status">
         <el-select v-model="queryParams.status" placeholder="车源状态">
          <el-option
            v-for="item in options"
            :key="item.value"
            :value="item.value"
            :label="item.name"
            ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="vin">
        <el-input v-model="queryParams.vin" placeholder="VIN"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button icon="el-icon-search">
        </el-button>
        <el-button icon="el-icon-refresh">
        </el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="carData.car_series"
      style="width: 100%"
      border>
      <el-table-column prop="id" label="编号"></el-table-column>
      <el-table-column prop="serie_name" label="车型"></el-table-column>
      <el-table-column prop="vin" label="VIN"></el-table-column>
      <el-table-column label="车源状态">
        <template slot-scope="scope">
          <span>{{ scope.row.status_text }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="last_updated" label="最后操作">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      @current-change="handleCurrentChange"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, prev, pager, next, jumper"
      :total="carData.count">
    </el-pagination>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Params, Res } from './carSources'

@Component
export default class CarSources extends Vue {
  params: Params = {
    start_time: '',
    status: 1,
    vin: '',
    count: 10,
    per_page: 1
  }
  queryParams = {
    time: '',
    status: '',
    vin: ''
  }
  options = [{
    value: 1,
    name: '在售'
  }, {
    value: 2,
    name: '待审核'
  }]
  carData = {}
  
  created () {
    this.getData()
  }

  handleCurrentChange (val: number) {
    this.params.per_page = val
    this.getData()
  }

  async getData () {
    console.log(this.params.per_page)
    const res: Res = await this.$rest.index.getCarSources()
    if (res.code === 0) {
      this.carData = res.data
    }
  }
}
</script>
