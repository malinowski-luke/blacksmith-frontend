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
  .header {
    position: sticky;
    top: 0;
    width: 100%;
    height: 5vh;
    color: white;
    background: #221c30;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 10px #000000;

    img {
      width: 30px;
      height: 30px;
    }
  }
</style>
