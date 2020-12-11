<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
const Twitch = window.Twitch.ext;

export default {
    name: "App",

    components: {},

    computed: { ...mapGetters(["user", "updated_at"]) },

    mounted() {
        if (!this.user.channel_id) {
            console.log("hit");
            this.fetchTwitchUserData();
        }
        console.log("user store", this.user);
    },

    methods: {
        fetchTwitchUserData() {
            Twitch.onAuthorized(async auth => {
                const channel_id = auth.channelId,
                    client_id = auth.clientId;

                // console.log(auth.token, auth.userId);

                let user;
                user = await this.authenticateUser(channel_id);
                if (!user) user = await this.createUser(channel_id, client_id);

                if (user)
                    this.setUserToStore({ ...user, channel_id, client_id });
            });
        },

        async authenticateUser(channel_id) {
            try {
                const { data } = await axios.get(`/user/${channel_id}`);
                return data;
            } catch (err) {
                console.error(err.message);
                return;
            }
        },

        async createUser(channel_id, client_id) {
            try {
                const { data } = await axios.post(`/user/${channel_id}`, {
                    client_id
                });
                return data;
            } catch (err) {
                console.error(err.message);
                return;
            }
        },

        setUserToStore(user) {
            const { channel_id, channel_name, logo, client_id } = user;
            this.$store.commit("user:set", {
                channel_id,
                channel_name,
                logo
            });
            this.$store.commit("client_id:set", { client_id });
        }
    }
};
</script>

<style>
/* #app {
  } */
</style>
