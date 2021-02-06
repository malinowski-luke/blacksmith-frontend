<template>
  <a
    class="product"
    href="https://images-na.ssl-images-amazon.com/images/I/51e4qbkMDCL._AC_SL1200_.jpg"
    target="_blank"
  >
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/51e4qbkMDCL._AC_SL1200_.jpg"
    />
    <div>
      <p>Surge protector</p>
      <span>
        $39.99
        <img v-if="true" src="../assets/img/prime.png" />
      </span>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'Product',
  }
</script>

<style lang="scss">
  @import '../assets/sass/_index.scss';

  .product {
    display: inline-block;
    width: calc(100% - 10px);
    height: 100px;
    background: $dark-gray;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    @include flex(row, flex-start, center);
    transition: all 0.5s ease;

    &:hover {
      background: $dark-purple;
    }

    img {
      width: 100px;
      height: 100px;
      border-radius: inherit;
    }

    div {
      margin-left: 10px;
      color: $white;

      span {
        margin: 5px 0;
        vertical-align: baseline;

        @include flex(row, flex-start, center);

        img {
          width: 35px;
          height: 20px;
        }
      }
    }
  }
</style>
