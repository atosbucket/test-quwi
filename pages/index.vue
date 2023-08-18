<template>
    <h3>index page</h3>
</template>

<script>
export default {
    components: {},
    layout: "default",
    data() {
        return {
        };
    },
    computed: {
        getProjects() {
        return this.$store.getters.getProjects;
        },
    },
};
</script>

<style scoped></style>
