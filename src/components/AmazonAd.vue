<template>
  <a
    class="amazon-ad"
    href="https://www.amazon.com/ref=nav_logo"
    target="_blank"
  >
    <div class="inner-box">
      <img src="../assets/img/amazon.png" />
      <h5>Shop deals for gamers</h5>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'AmazonAd',
  }
</script>

<style lang="scss">
  @import '../assets/sass/_index.scss';
  .amazon-ad {
    width: 100%;
    height: 125px;
    background: linear-gradient(135deg, $orange 0%, $orange-red 90%);
    text-decoration: none;
    @include flex();

    .inner-box {
      width: calc(100% - 15px);
      height: calc(125px - 15px);
      background: $dark-purple;

      @include flex(column);
      img {
        margin-bottom: 5px;
        width: 90px;
      }

      h5 {
        margin: 0;
        color: $white;
      }
    }
  }
</style>
