<template>
  <div class="sub-header">
    <h4>{{ title }}</h4>
    <hr />
  </div>
</template>

<script>
  export default {
    name: 'SubHeader',
    props: ['title'],
  }
</script>

<style lang="scss">
  @import '../assets/sass/_index.scss';
  .sub-header {
  }
</style>
