<template>
  <div class="icon-container" @click="toggleIcon" ref="icon">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>
</template>

<script>
  export default {
    name: 'MenuIcon',
    methods: {
      toggleIcon: function() {
        this.$refs.icon.classList.toggle('change')
        this.$emit('toggle-show-hide')
      },
    },
  }
</script>

<style lang="scss">
  @import '../assets/sass/_index.scss';

  .icon-container {
    display: inline-block !important;
    cursor: pointer;

    .bar1,
    .bar2,
    .bar3 {
      width: 35px;
      height: 5px;
      background: linear-gradient(135deg, $orange 0%, $orange-red 90%);
      margin: 6px 5px 6px 0;
      transition: 0.4s;
    }
  }

  .change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
  }

  .change .bar2 {
    opacity: 0;
  }

  .change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }
</style>
