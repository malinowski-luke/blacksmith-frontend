<template>
  <div class="panel">
    <Header />
    <div class="panel-content">
      <AmazonAd />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import axios from 'axios'
  import Header from '../components/Header.vue'
  import AmazonAd from '../components/AmazonAd'

  const { log } = window.Twitch.ext.rig

  export default {
    name: 'Panel',

    components: { Header, AmazonAd },

    computed: {
      ...mapGetters(['user', 'products']),
    },

    created() {
      this.fetchProducts()
      log('hello')
    },

    methods: {
      async fetchProducts() {
        try {
          const response = await axios.post('http://localhost:3000/product', {
            channel_id: this.user.channel_id,
          })
          // work here
          log(response.data)
        } catch (err) {
          log(err)
          console.log(err)
        }
      },
    },
  }
</script>

<style lang="scss">
  .panel {
    .panel-content {
      padding: 20px 10px;
    }
  }
</style>
