<template>
  <section id="login-page">
    <header>
      <div class="banner">
        <span class="left-logo">
          <img src="../assets/static/images/left-logo.png" />
          <em>星睿官网管理后台</em>
        </span>
        <img src="../assets/static/images/right-logo.png" class="right-logo" />
      </div>
    </header>
    <div class="img-wrapper">
      <img src="../assets/static/images/login-banner.jpg" />
    </div>
    <div class="login-form">
      <h4>登录</h4>
      <el-form :model="params" ref="loginForm">
        <el-form-item 
          prop="user"
          :rules="[
            { required: true, message: '登录名不能为空' }
          ]"
          >
        <el-input v-model="params.user" placeholder="登录名" />
        </el-form-item>
        <el-form-item 
          prop="password"
          :rules="[
            { required: true, message: '密码不能为空' }
          ]"
          >
          <el-input v-model="params.password" placeholder="密码" type="password" />
        </el-form-item>
        <el-form-item
          prop="validate"
          :rules="[
            { required: true, message: '验证码不能为空' }
          ]"
          >
          <el-input v-model="params.validate" placeholder="验证码" />
        </el-form-item>
        <el-form-item>
          <el-button @click="handleLogin('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <p class="copyright">
      Copyright © 2018 立新出行版权所有 
    </p>
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
    created () {
      this.$store.dispatch('EXIT_LOGIN')
    }

    handleLogin (formName: string) {
      const formHandle: any = this.$refs[formName]
      formHandle.validate((valid: any) => {
        if (valid) {
          this.$store.dispatch('UPDATE_USERINFO')
          this.$router.push({ path: '/index' })
        } else {
          console.log('error submit')
          return false
        }
      })
    }
  }
</script>

<style scoped lang="less">
  @import '../assets/static/styles/login.less';
</style>