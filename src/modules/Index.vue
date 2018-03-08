<template>
  <section class="side-bar">
    <el-row>
      <el-col :span="4">
        <el-menu default-active="car" @select="handleSelectMenu">
          <el-menu-item index="car">
            <i class="el-icon-car"></i>
            车源管理
          </el-menu-item>
          <el-menu-item index="intend">
            <i class="el-icon-setting"></i>
            意向管理
          </el-menu-item>
          <el-menu-item index="user">
            <i class="el-icon-person"></i>
            用户管理
          </el-menu-item>
          <el-menu-item index="setting">
            <i class="el-icon-key"></i>
            修改密码
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18">
        <CarSources :index="index" />
        <Users :index="index" />
        <Intend :index="index" />
        <SetPassword :index="index" />
      </el-col>
    </el-row>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import CarSources from './cars/CarSources.vue'
import Users from './users/Users.vue'
import Intend from './intend/Intend.vue'
import SetPassword from './setting/SetPassword.vue'

@Component({
  components: {
    CarSources,
    Users,
    Intend,
    SetPassword
  }
})
export default class Index extends Vue {
  index: string = 'car'
  handleSelectMenu (index: string) {
    this.index = index
  }
}
</script>
<style>
  .side-bar .el-form {
    padding-left: 0
  }
  .side-bar .el-menu {
    background-color: transparent;
  }
</style>
