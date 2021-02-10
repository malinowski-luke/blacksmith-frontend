import Vue from 'vue'
import App from './App.vue'

// modules
import router from './router'
import store from './store'

// mixins
import utils from './mixins/utils'

// plugins
import VTooltip from 'v-tooltip'
import { BootstrapVue } from 'bootstrap-vue'

// css
import 'v-tooltip/dist/v-tooltip.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(VTooltip)
Vue.use(BootstrapVue)

Vue.mixin(utils)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
