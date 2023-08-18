<template>
    <div class="w-full">
        <h3 class="text-center">Projects</h3>
        <div class="w-full d-flex mt-4">
            <div class=""></div>
        </div>
    </div>
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
