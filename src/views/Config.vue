<template>
  <div class="container">
    <b-modal
      id="delete-modal"
      title="Delete Item"
      ok-title="delete"
      ok-variant="danger"
      @ok="deleteProduct()"
      @hidden="resetDeleteModal"
      header-bg-variant="danger"
      header-border-variant="danger"
      header-text-variant="light"
      body-bg-variant="dark"
      body-text-variant="light"
      footer-bg-variant="dark"
      footer-border-variant="dark"
    >
      <template>
        <h5 class="mb-4">Are you sure you want to delete this item!</h5>
        <product-item
          :title="product.title"
          :img="product.img"
          :has_prime="product.has_prime"
          :price="product.price"
          :url="product.url"
        />
      </template>
    </b-modal>
    <b-card
      header="Configure"
      header-tag="header"
      border-variant="dark"
      bg-variant="light"
      class="config"
    >
      <div class="config-wrapper p-2 ">
        <div class="amazon-info d-flex align-items-center p-2">
          <img :src="user.logo" />
          <span class="ml-2">
            <h5>Amazon Blacksmith</h5>
            <p>{{ user.channel_name }}</p>
          </span>
        </div>

        <div class="row mt-3">
          <div class="col-lg-8">
            <sub-header :title="'Product List'" />
            <product-table v-on:delete-item="showDeleteModal" />
            <div>
              <div class="mt-2">
                <b-button
                  block
                  variant="outline-success"
                  size="lg"
                  @click="addItem"
                >
                  Add Item
                </b-button>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="panel-wrapper">
              <sub-header :title="'Preview'" />
              <panel />
            </div>
          </div>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Panel from './Panel.vue'
  // import draggable from 'vuedraggable'
  import axios from 'axios'
  import SubHeader from '../components/SubHeader.vue'
  import ProductTable from '../components/ProductTable.vue'
  import ProductItem from '../components/ProductItem.vue'

  const defaultProduct = { title: '', img: '', has_prime: false, price: 0 }

  export default {
    components: { Panel, SubHeader, ProductTable, ProductItem },
    name: 'Config',

    data() {
      return {
        product: defaultProduct,
      }
    },

    computed: {
      ...mapGetters(['user', 'products']),
    },

    methods: {
      addItem(data) {
        console.log('add')
        if (data) console.log(data)
      },

      resetDeleteModal() {
        this.product = defaultProduct
      },

      showDeleteModal(product) {
        this.product = product

        this.$bvModal.show('delete-modal')
      },

      async deleteProduct() {
        console.log(this.product)

        try {
          await axios.delete(`/product/${this.product._id}`)

          this.$store.commit('products:set', {
            products: this.products.filter(
              (product) => this.product._id !== product._id
            ),
          })

          this.resetDeleteModal()
        } catch (err) {
          console.log(err)
        }
      },
    },
  }
</script>

<style lang="scss">
  @import '../assets/sass/_index.scss';

  .panel-wrapper {
    width: 320px;
    height: 450px - 30px;
  }
  .config {
    // color: $white;
    width: 100%;
    height: 100vh;

    .config-wrapper {
      .amazon-info {
        width: 100%;
        // height: 50px;
        background: #f0f1f2;
        border: 1px solid $black;
        border-radius: 5px;

        img {
          width: 50px;
        }
        span p,
        span h5 {
          padding: 0;
          margin: 0;
        }

        span p {
          font-size: 15px;
        }
        span h5 {
          font-size: 20px;
        }
      }
    }
  }
</style>
