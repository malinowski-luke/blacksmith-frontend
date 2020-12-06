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
        "user:set"(state, { channel_id, channel_name, logo }) {
            Vue.set(state.user, "channel_id", channel_id);
            Vue.set(state.user, "channel_name", channel_name);
            Vue.set(state.user, "logo", logo);
            Vue.set(state, "updated_at", moment().format());
        },
        "client_id:set"(state, { client_id }) {
            Vue.set(state, "client_id", client_id);
            // Vue.set(state, "updated_at", moment().format());
        },
        "user:clear"(state) {
            Vue.set(state.user, "channel_id", "");
            Vue.set(state.user, "channel_name", "");
            Vue.set(state.user, "logo", "");
            Vue.set(state, "client_id", "");
            Vue.set(state, "updated_at", moment().format());
        }
    },

    getters: {
        user(state) {
            return state;
        },
        updated_at(state) {
            return state.updated_at;
        }
    }
};
