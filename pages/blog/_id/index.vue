<template>
  <div class="container">
    <post :post="post" />
    <no-ssr>
    <new-comment :postId="$route.params.id" />
    <comments :comments="comments" />
    </no-ssr>
  </div>
</template>

<script>
import Post from "@/components/blog/Post.vue";
import NewComment from "@/components/comments/NewComment.vue";
import Comments from "@/components/comments/Comments.vue";

import axios from "axios";

export default {
  components: {
    Post,
    NewComment,
    Comments,
  },

  head() {
    return {
      title: this.post.title,
      meta: [
        {hid: 'description', name: 'description', content: this.post.descr},
        {hid: 'og:description', name: 'og:description', content: this.post.descr}
        ],
    };
  },

  async asyncData(context) {
    // когда нужно сделать несколько запросов
    let [post, comments] = await Promise.all([
      axios.get(
        `https://blog-nuxtjs-c3952-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${context.params.id}.json`
      ),
      axios.get(
        `https://blog-nuxtjs-c3952-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json`
      ),
    ]);
    let commetsArray = [];
    let commetsArrayRes = [];
    if (comments.data) {
      Object.keys(comments.data).forEach((key) => {
        commetsArray.push(comments.data[key]);
      });

      commetsArrayRes = commetsArray.filter(
        (c) => c.postId === context.params.id && c.publish
      );
    }

    return {
      post: post.data,
      comments: commetsArrayRes,
    };
  },
};
</script>
