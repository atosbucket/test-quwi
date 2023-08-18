<template>
    <div class="bg-gray-200 h-100vh">
        <header-nav />
        <div class="container">
            <Nuxt />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    middleware: ['auth'],
    computed: {
        ...mapGetters(['loggedInUser']),
    }
};
</script>
