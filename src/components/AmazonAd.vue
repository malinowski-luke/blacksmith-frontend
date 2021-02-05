<template>
  <a
    class="amazon-ad"
    href="https://www.amazon.com/ref=nav_logo"
    target="_blank"
  >
    <div class="inner-box">
      <img src="../assets/img/amazon.png" />
      <h3>Shop deals for gamers</h3>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'AmazonAd',
  }
</script>

<style lang="scss">
  .amazon-ad {
    width: 100%;
    height: 125px;
    background: linear-gradient(
      135deg,
      rgba(243, 124, 44, 1) 0%,
      rgba(191, 64, 57, 1) 90%
    );

    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    .inner-box {
      width: calc(100% - 15px);
      height: calc(125px - 15px);
      background: #221c30;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        margin-bottom: 5px;
        width: 90px;
      }

      h3 {
        margin: 0;
        color: #fff;
      }
    }
  }
</style>
