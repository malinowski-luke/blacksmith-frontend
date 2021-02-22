<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import axios from 'axios'

  export default {
    name: 'App',

    components: {},

    computed: { ...mapGetters(['user', 'updated_at', 'products']) },

    created() {
      if (!this.user.channel_id) this.fetchTwitchUserData()

      this.fetchProducts()
    },

    methods: {
      fetchTwitchUserData() {
        let user

        window.Twitch.ext.onAuthorized(async (auth) => {
          const channel_id = auth.channelId,
            client_id = auth.clientId

          user = await this.authenticateUser(channel_id)
          if (!user) user = await this.createUser(channel_id, client_id)

          if (user) {
            let { channel_id, channel_name, logo } = user
            this.$store.commit('user:set', {
              channel_id,
              channel_name,
              logo,
            })
            this.$store.commit('client_id:set', { client_id })
          }
        })
      },

      async authenticateUser(channel_id) {
        try {
          const { data } = await axios.get(`/user/${channel_id}`)
          return data
        } catch (err) {
          console.error(err.message)
          return
        }
      },

      async createUser(channel_id, client_id) {
        try {
          const { data } = await axios.post(`/user/new`, {
            channel_id,
            client_id,
          })
          return data
        } catch (err) {
          console.error(err.message)
          return
        }
      },

      async fetchProducts() {
        try {
          const response = await axios.get(`/product/${this.user.channel_id}`)
          console.log(response, 'hit')
          if (response.data.length > 0) {
            this.$store.commit('products:set', { products: [...response.data] })
          }
        } catch (err) {
          console.log(err)
        }
      },
    },
  }
</script>

<style lang="scss">
  @import './assets/sass/_index.scss';

  #app {
    width: 100%;
  }
</style>
