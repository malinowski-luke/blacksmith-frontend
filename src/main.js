import Vue from 'vue'
import App from './App.vue'

// modules
import router from './router'
import store from './store'

// mixins
import utils from './mixins/utils'

// plugins
import VTooltip from 'v-tooltip'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

// css
import 'v-tooltip/dist/v-tooltip.css'
// bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

Vue.config.productionTip = false

Vue.use(VTooltip)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.mixin(utils)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
