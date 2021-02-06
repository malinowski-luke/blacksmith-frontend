<template>
  <div class="footer">
    Luke earns from qualifying purchases.
  </div>
</template>

<script>
  export default {
    name: 'Footer',
  }
</script>

<style lang="scss">
  @import '../assets/sass/_index.scss';

  .footer {
    width: 100%;
    height: 30px;
    position: fixed;
    bottom: 0;
    background: linear-gradient(90deg, $purple 35%, $pink 100%);

    @include flex();
    color: $white;

    font-size: 12px;
  }
</style>
