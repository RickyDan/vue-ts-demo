<script lang="tsx">
  import Vue, { CreateElement} from 'vue'
  import { Component } from 'vue-property-decorator'
  import Car from './Car.vue'

  @Component({
    components: {
      Car
    }
  })
  export default class Login extends Vue {
    isLogin: boolean = false
    isShow = false
    private txt: string = '登录'
    value: string = ''
    // 在函数定义的同时确定要返回的类型，可以不需要debugger就知道函数一定会返回何种数据类型
    getStatus ():void {
      this.isLogin = !this.isLogin
      this.add(1, 2)
      this.txt = this.isLogin ? '注册' : '登录'
      console.log(this.isLogin)
    }
    
    add (num1: number, num2: number): number {
      return num1 * num2
    }

    created () {
      this.getData()
    }

    async getData () {
      const res = await this.$rest.index.getIndexInfo()
      if (res.code === 0) {
        console.log(res.data)
      }
    }

    showDialog () {
      this.isShow = true
      console.log(this.isShow)
    }
    render (h: CreateElement) {
      return (
        <div class={{'login-page': true}}>
          <el-button type="primary" onClick={this.getStatus}>{this.txt}</el-button>
          <el-button type="success" onClick={() => this.add(1, 2)}>相加</el-button>
          <el-button onClick={() => this.showDialog()}>删除</el-button>
          <Car car-name="Toyota" />
        </div>
      )
    }
  }
</script>
