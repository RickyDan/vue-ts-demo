<template>
  <section v-if="index === 'setting'">
    <header>
      <h4>修改密码</h4>
    </header>
    <el-form :model="params" style="width: 200px">
      <el-form-item>
        <el-input v-model="params.old_password" placeholder="请输入旧密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="params.new_password" placeholder="请输入新密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="params.confirm_password" placeholder="请确认新密码"></el-input>
      </el-form-item>
      <el-input type="submit" placeholder="提交">
      </el-input>
    </el-form>
  </section>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { Message } from 'c-element-ui'

  @Component
  export default class SetPasswd extends Vue {
    @Prop({type: String, required: true})
    index: string
    params = {
      old_password: '',
      new_password: '',
      confirm_password: ''
    }

    created () {
      console.log(this.params)
    }
  }
</script>

<style scoped>
</style>
