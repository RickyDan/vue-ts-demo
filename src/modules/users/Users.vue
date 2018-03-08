<template>
  <section v-if="index === 'user'" id="users">
    <header class="tit">
      <h4>
        用户管理 
        <el-button icon="plus" class="plus">
          新增
        </el-button>
      </h4>
    </header>
    <el-table
      :data="userData.user_list"
      style="width: 100%"
      border>
      <el-table-column prop="login_name" label="登录名"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column label="联系人">
        <template slot-scope="scope">
          <div>{{ scope.row.name }}</div>
          <div>{{ scope.row.mobile }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="created_at" label="创建时间">
      </el-table-column>
      <el-table-column prop="status_text" label="用户状态">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div><el-button type="text">重置密码</el-button></div>
          <div><el-button type="text">启用</el-button></div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @current-change="handleCurrentChange"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, prev, pager, next, jumper"
      :total="userData.count">
    </el-pagination>
  </section>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import { Res } from './users'
  import { Message } from 'c-element-ui'

  @Component
  export default class Users extends Vue {
    @Prop({ type: String, required: true })
    index: string

    params = {
      per_page: 10
    }
    userData = {}
    created () {
      this.getData()
    }

    handleCurrentChange (val: number) {
      this.params.per_page = val
      this.getData()
    }

    async getData () {
      const res: Res = await this.$rest.index.getUsers()
      if (res.code === 0) {
        this.userData = res.data
      } else {
        Message.error(res.message)
      }
    }
  }
</script>
<style lang="less">
  #users {
    .tit {
      .plus {
        float: right;
      }
    }
  }
</style>
