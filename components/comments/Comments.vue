<template>
    <div class="comments my-3">
        <h4>All comments</h4>
        <p v-if="comments.length === 0">Comments - 0</p>
        <div v-for="comment in comments" :key="comment.id" class="comment mb-3">
            <p><strong>{{ comment.name }}</strong></p>
            <p>{{ comment.text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        comments: {
            type: Array,
            default: null
        }
    },
    data(){
        return {

        }
    }
}
</script>

<style scoped>
 .comment > p {
     margin-bottom: 0.25rem;
 }
</style>