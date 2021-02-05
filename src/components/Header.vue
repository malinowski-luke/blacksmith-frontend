<template>
  <header class="header">
    <img src="../assets/img/amazon-small.png" />
  </header>
</template>

<script>
  export default {
    name: 'Header',
  }
</script>

<style lang="scss">
  @import '../assets/sass/_index.scss';
  .header {
    position: sticky;
    top: 0;
    width: 100%;
    height: 5vh;
    color: $white;
    background: $dark-purple;
    box-shadow: 0 5px 10px $black;
    @include flex();

    img {
      width: 30px;
      height: 30px;
    }
  }
</style>
