<template>
    <h3>index page {{ loggedInUser ? JSON.stringify(loggedInUser) : "" }}</h3>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    components: {},
    layout: "default",
    data() {
        return {
        };
    },
    computed: {
        ...mapGetters(['loggedInUser']),
        getProjects() {
            return this.$store.getters.getProjects;
        },
    },
};
</script>

<style scoped></style>
