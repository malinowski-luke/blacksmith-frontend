<template>
    <div class="panel">
        <h1>Panel!</h1>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

const { log } = window.Twitch.ext.rig;

export default {
    name: "Panel",

    computed: {
        ...mapGetters(["user", "products"])
    },

    created() {
        this.fetchProducts();
    },

    methods: {
        async fetchProducts() {
            try {
                const response = await axios.post(
                    "http://localhost:3000/product",
                    {
                        channel_id: this.user.channel_id
                    }
                );
                // work here
                log(response.data);
            } catch (err) {
                log(err);
                console.log(err);
            }
        }
    }
};
</script>

<style>
.panel {
    text-align: center;
}
</style>
