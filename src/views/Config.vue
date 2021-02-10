<template>
  <b-card
    header="Configure"
    header-tag="header"
    border-variant="dark"
    bg-variant="light"
    class="config"
  >
    <div class="config-wrapper p-2">
      <div class="row">
        <div class="col-lg-8">
          <div class="amazon-info d-flex align-items-center">
            <img :src="user.logo" />
            <span class="ml-2">
              <h5>Amazon Blacksmith</h5>
              <p>Created by Amazon</p>
            </span>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="panel-wrapper">
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
    height: 500px - 30px;
  }
  .config {
    // color: $white;
    width: 100%;
    height: 100vh;

    .config-wrapper {
      .amazon-info {
        img {
          width: 75px;
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
