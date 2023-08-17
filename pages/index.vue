<template>
  <div class="main-wrapper">
    <div class="container">
      <promo />
      <posts-list :posts="getPosts" />
    </div>
    <contact-form />
  </div>
</template>

<script>
import PostsList from "@/components/blog/PostsList.vue";

export default {
  name: "IndexPage",
  components: {
    PostsList,
  },
  data() {
    return {
      // posts: [],
    };
  },

  head() {
    return {
      title: "My SSR Blog with nuxt.js 2",
      meta: [
        {hid: 'description', name: 'description', content: 'This is description my SSR Blog with nuxt.js 2'},
        {hid: 'og:description', name: 'og:description', content: 'This is description my SSR Blog with nuxt.js 2'}
        ],
    };
  },

  computed: {
    getPosts() {
      return this.$store.getters.getPostsLoaded;
    },
  },
};
</script>

<style scoped></style>
