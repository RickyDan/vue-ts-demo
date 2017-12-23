<script lang="tsx">
  import { CreateElement } from 'vue'
  import { Vue, Component } from 'vue-property-decorator'

  @Component
  export default class Login extends Vue {
    isLogin: boolean = false
    txt: string = '登录'
    getStatus ():void {
      this.isLogin = true
      this.txt = '注册'
      console.log(this.isLogin)
    }
    render (h: CreateElement) {
      return (
        <div>
          <el-button type="primary" onClick={this.getStatus}>{this.txt}</el-button>
        </div>
      )
    }
  }
</script>
