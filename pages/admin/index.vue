<template>
  <div class="admin-page">
    <div class="container">
      <admin-nav />
      <posts-list :admin=true :posts="getPosts" />
    </div>
  </div>
</template>

<script>
import PostsList from "@/components/blog/PostsList.vue";
export default {
  components: { PostsList },
  layout: "admin",
  data() {
    return {
      
    };
  },

  mounted() {
    this.$store.dispatch('nuxtServerInit')
  },

  computed: {
    getPosts() {
      return this.$store.getters.getPostsLoaded
    }
  }
};
</script>
