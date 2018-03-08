<template>
  <section class="nav-banner">
    <el-menu theme="dark" class="menu-all" v-if="loginStatus">
      {{ userName }}
    </el-menu>
  </section>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    computed: {
      userName () {
        return this.$store.state.userName
      },
      loginStatus () {
        return this.$store.state.loginStatus
      }
    }
  })
  export default class Nav extends Vue {
  }
</script>
