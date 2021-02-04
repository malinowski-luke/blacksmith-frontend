import Vue from "vue";
import moment from "moment";

export default {
    state: {
        user: {
            channel_id: "",
            channel_name: "",
            logo: ""
        },
        client_id: "",
        updated_at: moment().format()
    },

    mutations: {
        "user:set"(state, user) {
            Vue.set(state, "user", user);
            Vue.set(state, "updated_at", moment().format());
        },
        "client_id:set"(state, { client_id }) {
            Vue.set(state, "client_id", client_id);
        },
        "user:clear"(state) {
            Vue.set(state, "user", {});
            Vue.set(state, "client_id", {
                channel_id: "",
                channel_name: "",
                logo: ""
            });
            Vue.set(state, "updated_at", moment().format());
        }
    },

    getters: {
        user(state) {
            return { ...state.user, updated_at: state.updated_at };
        }
    }
};
