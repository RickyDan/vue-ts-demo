<script lang="tsx">
  import Vue, { CreateElement} from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class Login extends Vue {
    isLogin: boolean = false
    txt: string = '登录'
    getStatus ():void {
      this.isLogin = !this.isLogin
      this.txt = this.isLogin ? '注册' : '登录'
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
