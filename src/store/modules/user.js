import Vue from 'vue'
import moment from 'moment'

export default {
  state: {
    channelID: '',
    products: [],
    updated_at: moment().format(),
  },
  mutations: {},
  getters: {
    user: (state) => state.user,
    products: (state) => state.products,
  },
}
