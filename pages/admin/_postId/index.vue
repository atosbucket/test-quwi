<template>
  <div class="container">
    <edit-post-form :postEdit="post" @submit="onSubmit" />
  </div>
</template>

<script>
import EditPostForm from "@/components/admin/NewPostForm.vue";
import axios from 'axios'

export default {
  layout: "admin",
  components: { EditPostForm },
  data() {
    return {
     
    };
  },
  asyncData(context){
      return axios.get(`https://blog-nuxtjs-c3952-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${context.params.postId}.json`)
        .then(res => {
          return {
            post: {...res.data, id:context.params.postId}
            }
        })
        .catch(e => {
          return context.error(e)
        })
  },

  methods: {

    // Сохранение отредактированного поста
    onSubmit(post) {
      // console.log("Post editing");
      // console.log(post);
      this.$store.dispatch('editPost', post)
        .then(() => {
                this.$router.push('/admin')
            })

    },
  },
};
</script>
