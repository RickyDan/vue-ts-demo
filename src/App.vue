<template>
  <div id="app">
    <Navigation />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Navigation from './components/Nav.vue'

@Component({
  components: {
    Navigation
  }
})
export default class App extends Vue {
}
</script>
<style lang="less">
html, body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>


