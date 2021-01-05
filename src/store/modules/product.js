import Vue from "vue";
import moment from "moment";

export default {
    state: {
        products: [],
        updated_at: moment().format()
    },
    mutations: {
        "product:set"(state, { products }) {
            Vue.set(state.products, "products", products);
            Vue.set(state, "updated_at", moment().format());
        },
        "product:clear"(state) {
            Vue.set(state.products, "products", []);
            Vue.set(state, "updated_at", moment().format());
        }
    },
    getters: {
        product(state) {
            return state.product;
        },
        updated_at(state) {
            return state.updated_at;
        }
    }
};
