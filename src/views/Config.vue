<template>
  <b-card
    header="Configure"
    header-tag="header"
    border-variant="dark"
    bg-variant="light"
    class="config"
  >
    <div class="config-wrapper p-2">
      <div class="amazon-info d-flex align-items-center p-2">
        <img :src="user.logo" />
        <span class="ml-2">
          <h5>Amazon Blacksmith</h5>
          <p>Created by Amazon</p>
        </span>
      </div>

      <div class="row mt-3">
        <div class="col-lg-8">
          <h4>Product List</h4>
          <hr />
        </div>
        <div class="col-lg-4">
          <div class="panel-wrapper">
            <h4>Preview</h4>
            <hr />
            <panel />
          </div>
        </div>
      </div>
    </div>
  </b-card>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Panel from './Panel.vue'

  export default {
    components: { Panel },
    name: 'Config',

    computed: {
      ...mapGetters(['user']),
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
