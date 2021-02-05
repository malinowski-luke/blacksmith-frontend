import Vue from 'vue'
import App from './App.vue'

// modules
import router from './router'
import store from './store'

// plugins
import VTooltip from 'v-tooltip'
import 'v-tooltip/dist/v-tooltip.css'

Vue.config.productionTip = false

Vue.use(VTooltip)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
