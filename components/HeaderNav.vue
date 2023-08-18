<template>
    <section id="header">
        <div class="w-100 h-12 d-flex items-center justify-between bg-gray-100 border-b border-gray px-4">
            <h1>Q</h1>
            <div class="d-flex">
                <nuxt-link class="no-underline mr-4" aria-current="page" to="/register">PRODUCTS</nuxt-link>
                <a href="javascript:void(0)" @click="logout" class="no-underline" aria-current="page">LOGOUT</a>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['loggedInUser']),
    },
    methods: {
        logout() {
            this.$store.dispatch("logout")
                .then((res) => {
                this.$router.push('/login')
            })
            .catch(e => {
                console.log(e);
            });
        }
    }
};
</script>
