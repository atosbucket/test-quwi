<template>
    <div class="container">
        <h1 class="mb-5">Blog</h1>
        <posts-list :posts="getPosts" /> 
    </div>
</template>

<script>
import PostsList from '@/components/blog/PostsList.vue';
export default {
    components: {
        PostsList
    },
    data() {
    return {
      
    };
  },
  computed: {
    getPosts() {
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>
        PostsList