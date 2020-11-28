<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  let channelID = window.Twitch.ext.onAuthorized((auth) => auth.channelId))

  export default {
    name: 'App',
    components: {
      // HelloWorld,
    },
    created() {
      console.log(channelID)
    },
  }
</script>

<style>
  #app {
  }
</style>
