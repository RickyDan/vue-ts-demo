<template>
  <div>
    <p>这是{{carName}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      carName: {
        type: String,
        required: true
      }
    }
  }
</script>
