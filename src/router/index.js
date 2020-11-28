import Vue from 'vue'
import Router from 'vue-router'

// views
import Panel from '../views/Panel.vue'
import Config from '../views/Config.vue'

Vue.use(Router)

const routes = [
  {
    path: '/panel.html',
    name: 'Panel',
    component: Panel,
  },
  {
    path: '/config.html',
    name: 'Config',
    component: Config,
  },
]

export default new Router({
  routes,
  mode: 'history',
})
