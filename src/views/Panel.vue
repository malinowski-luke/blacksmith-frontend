<template>
  <div>
    <div class="panel">
      <header class="header">
        <img src="../assets/img/amazon-small.png" />
      </header>
      <div class="panel-content">
        <amazon-ad class="mb" />
        <div class="product-list">
          <div class="product-list-header">
            <div class="streamer-info">
              <img :src="user.logo" />
              <p>{{ formatStr(user.channel_name, 20) }} <br />STREAM GEAR</p>
            </div>
            <menu-icon v-on:toggle-show-hide="showHideProduct" />
          </div>
          <div class="product-list-body" ref="productList">
            <product-item
              v-for="product in products"
              :key="product._id"
              :product="product"
            />
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      {{ formatStr(user.channel_name, 20) }} earns from purchases.
    </footer>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import axios from 'axios'

  import AmazonAd from '../components/AmazonAd'
  import ProductItem from '../components/ProductItem'
  import MenuIcon from '../components/MenuIcon'

  export default {
    name: 'Panel',

    components: {
      AmazonAd,
      ProductItem,
      MenuIcon,
    },

    computed: {
      ...mapGetters(['user', 'products']),
    },

    created() {
      if (this.products.length === 0) this.fetchProducts()
    },

    mounted() {
      console.log(this.products)
    },

    methods: {
      async fetchProducts() {
        try {
          const response = await axios.post('http://localhost:3000/product', {
            channel_id: this.user.channel_id,
          })

          console.log(response)
          if (response.data.length > 0) {
            console.log('hit')
            this.$store.commit('products:set', { products: [...response.data] })
          }
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
    width: 320px;
    height: 450px - 30px;
    overflow-x: scroll;
    background: linear-gradient(149deg, $purple 5%, $dark-gray 90%);
    position: relative;

    .panel-content {
      padding: 20px 10px;
      overflow: hidden !important;

      .mb {
        margin-bottom: 10px;
      }
    }

    .product-list {
      width: 100%;
      background: $light-purple;
      margin-bottom: 15px;

      .product-list-header {
        width: 100%;
        @include flex(row, space-between, center);

        .streamer-info {
          @include flex(row, flex-start, center);
          img {
            width: 50px;
            height: 50px;
          }

          p {
            padding: 0;
            margin: 0;
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

  .header {
    position: sticky;
    top: 0;
    width: 100%;
    height: 50px;
    color: $white;
    background: $dark-purple;
    box-shadow: 0 5px 10px $black;
    z-index: 1;
    @include flex();

    img {
      width: 30px;
      height: 30px;
    }
  }

  .footer {
    width: 100%;
    height: 30px;
    background: linear-gradient(90deg, $purple 35%, $pink 100%);

    @include flex();
    color: $white;

    font-size: 12px;
  }
</style>
