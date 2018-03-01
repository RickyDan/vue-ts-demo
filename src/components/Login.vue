<template>
  <section>
    <el-form :model="params" label-width="100px">
      <el-form-item prop="user">
        <el-input v-model="params.user" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="params.password" />
      </el-form-item>
      <el-form-item prop="validate">
        <el-input v-model="params.validate" />
      </el-form-item>
      <el-form-item>
        <el-button>登录</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  interface Params {
    user: string
    password: string
    validate: string
  }
  @Component
  export default class Login extends Vue {
    params: Params = {
      user: '',
      password: '',
      validate: ''
    }
  }
</script>

<style scoped>

</style>