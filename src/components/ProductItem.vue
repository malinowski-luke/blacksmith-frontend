<template>
  <a class="product" :href="product.url" target="_blank">
    <img :src="product.img" />
    <div>
      <p>{{ formatStr(product.title, 20) }}</p>
      <span>
        {{ product.price }}
        <img v-if="product.has_prime === true" src="../assets/img/prime.png" />
      </span>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'ProductItem',
    props: ['product'],
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
      border-top-left-radius: inherit;
      border-bottom-left-radius: inherit;
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
          margin-left: 5px;
        }
      }
    }
  }
</style>
