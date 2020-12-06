<template>
  <div class="panel">
    <h1>Panel</h1>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Panel',
    computed: {
      ...mapGetters(['user']),
    },
    mounted() {
      console.log(this.user)
    },
    methods: {},
  }
</script>

<style>
  .panel {
    text-align: center;
  }
</style>
