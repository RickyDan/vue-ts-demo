<template>
  <div>
    这是 {{ carName }}
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from 'vue-property-decorator'
  @Component
  export default class Car extends Vue {
    @Prop({ type: String, required: true })
    carName: string
  }
</script>

<style scoped>

</style>