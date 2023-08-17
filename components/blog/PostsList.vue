<template>
    <!-- Posts -->
    <div class="row row-cols-1 row-cols-md-2 g-4 mb-4">
      <post-preview v-for="post in posts" :key="post.id" :admin="admin" :post="post" />
    </div>
    <!-- # Posts -->
</template>

<script>
import PostPreview from './PostPreview.vue'


export default {
  components: { PostPreview },
    props: {
        posts: {
            type: Array,
            required: true,
        },
        admin: {
          type: Boolean,
          required: false
        }
    }
}
</script>

<style scoped>

</style>