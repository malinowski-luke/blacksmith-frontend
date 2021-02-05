<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
    name: "App",

    components: {},

    computed: { ...mapGetters(["user", "updated_at"]) },

    mounted() {
        if (!this.user.channel_id) this.fetchTwitchUserData();
    },

    methods: {
        fetchTwitchUserData() {
            window.Twitch.ext.onAuthorized(async auth => {
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
                const { data } = await axios.post(`/user/new`, {
                    channel_id,
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
#app {
    /* reset */
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    width: 100%;
    height: 100vh;
    background: linear-gradient(
        149deg,
        rgba(56, 39, 106, 1) 5%,
        rgba(36, 49, 63, 1) 90%
    );
}
</style>
