import Vue from 'vue'
import moment from 'moment'

export default {
  state: {
    products: [],
    updated_at: moment().format(),
  },

  mutations: {
    'products:set'(state, { products }) {
      Vue.set(state, 'products', products)
      Vue.set(state, 'updated_at', moment().format())
    },
    'products:clear'(state) {
      Vue.set(state, 'products', [])
      Vue.set(state, 'updated_at', moment().format())
    },
  },

  getters: {
    products(state) {
      return state.products
    },
  },
}
