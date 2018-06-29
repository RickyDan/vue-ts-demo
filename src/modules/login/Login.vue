<template>
  <section class="login">
    <el-form :model="params" :rules="rules" class="login-form" label-width="70px">
      <el-form-item label="用户名: " prop="username">
        <el-input size="small" v-model="params.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" size="small" v-model="params.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item class="submit-btn">
        <el-button type="primary" size="small" @click="getLogin(params)">登录</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import { Action } from 'vuex-class'
  import test from '../../mixins/test.mixin'

  @Component({
    mixins: [test]
  })
  export default class Login extends Vue {
    @Action('getLogin') getLogin
    params = {
      username: '',
      password: ''
    }
    rules = {
      username: [
        {required: true, message: '用户名不能为空', trigger: 'blur'},
        {max: 20, message: '用户名长度不能超过20个字符', trigger: 'blur'}
      ],
      password: [
        {required: true, message: '密码不能为空', trigger: 'blur'}
      ]
    }
    mounted () {
      this.testMixinFunc()
    }
  }
</script>
<style lang="less">
  @import '../../assets/styles/login.less';
</style>
