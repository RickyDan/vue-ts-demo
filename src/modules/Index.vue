<template>
  <el-container>
    <el-aside width="200px">
      <el-menu>
        <el-menu-item index="1-1">
          <template slot="title">
            <i class="el-icon-message"></i>车源管理
          </template>
        </el-menu-item>
        <el-menu-item index="1-2">
          <template slot="title">
            <i class="el-icon-message"></i>意向管理
          </template>
        </el-menu-item>
        <el-menu-item index="1-3">
          <template slot="title">
            <i class="el-icon-message"></i>用户管理
          </template>
        </el-menu-item>
        <el-menu-item index="1-4">
          <template slot="title">
            <i class="el-icon-message"></i>修改秘密
          </template>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align: left">
        <h3 style="font-size: 20px">
          用户管理
          <el-button style="float: right">新增</el-button>
        </h3>
      </el-header>
    <el-main>
      <CarSources />
    </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import CarSources from './cars/CarSources.vue'

@Component({
  components: {
    CarSources
  }
})
export default class Index extends Vue {
}
</script>
