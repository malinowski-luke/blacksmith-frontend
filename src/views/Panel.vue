<template>
  <div class="panel">
    <div class="panel-content">
      <AmazonAd class="mb" />
      <div class="product-list">
        <div class="product-list-header">
          <div class="streamer-info">
            <img
              src="https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
            />
            <p>Luke's <br />STREAM GEAR</p>
          </div>
          <MenuIcon v-on:toggle-show-hide="showHideProduct" />
        </div>
        <div class="product-list-body" ref="productList">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import axios from 'axios'
  import AmazonAd from '../components/AmazonAd'
  import Product from '../components/Product'
  import MenuIcon from '../components/MenuIcon'
  import Footer from '../components/Footer'

  export default {
    name: 'Panel',

    components: {
      AmazonAd,
      Product,
      MenuIcon,
      Footer,
    },

    computed: {
      ...mapGetters(['user', 'products']),
    },

    created() {
      // this.fetchProducts()
    },

    methods: {
      async fetchProducts() {
        try {
          const response = await axios.post('http://localhost:3000/product', {
            channel_id: this.user.channel_id,
          })
          // work here
          console.log(response.data)
        } catch (err) {
          console.log(err)
        }
      },
      showHideProduct() {
        this.$refs.productList.classList.toggle('show')
      },
    },
  }
</script>

<style lang="scss">
  @import '../assets/sass/_index.scss';

  .panel {
    width: 100%;
    height: fit-content;
    min-height: 100vh;

    .panel-content {
      padding: 20px 10px;

      .mb {
        margin-bottom: 10px;
      }
    }

    .product-list {
      width: 100%;
      background: $light-purple;
      margin-bottom: 30px;

      .product-list-header {
        width: 100%;
        @include flex(row, space-between, center);

        div {
          @include flex(row, flex-start, center);
          img {
            width: 50px;
            height: 50px;
          }

          p {
            margin-left: 10px;
            color: $white;
          }
        }
      }

      .product-list-body {
        overflow: hidden;
        @include flex(column);
        transition: all 0.5s ease;
        max-height: 0;
      }

      .show {
        // transitions don't work with fit-content or auto
        max-height: 300vh;
      }
    }
  }
</style>
