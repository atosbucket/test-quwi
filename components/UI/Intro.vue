<template>

    <section class="intro">
        <div class="container">
        <h2>{{ title }}</h2>
    </div>
    </section>
    
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        }
    }
}
</script>

<style lang="scss">
    .intro {
        padding: 1rem 1rem 1rem 1rem;
        background-color: darkgray;
        text-align: center;
        margin: 1rem 0;
        width: 100%;
    }
</style>