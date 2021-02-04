import Vue from "vue";
import Vuex from "vuex";
// plugins
import createPersistedState from "vuex-persistedstate";
// modules
import user from "./modules/user";
import products from "./modules/products";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        products
    },
    plugins: [
        createPersistedState({
            storage: window.sessionStorage
        })
    ]
});
