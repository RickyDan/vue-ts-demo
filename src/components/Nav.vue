<template>
  <el-menu theme="dark" class="menu-all">
    {{ userName }}
  </el-menu>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    computed: {
      userName () {
        return this.$store.state.userName
      }
    }
  })
  export default class Nav extends Vue {
    created () {
      this.$store.dispatch('UPDATE_USERINFO')
    }
  }
</script>
