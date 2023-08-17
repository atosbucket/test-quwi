<template>
    <div class="container">
        <new-post-form @submit="onSubmit" />
    </div>
</template>

<script>
import NewPostForm from '@/components/admin/NewPostForm.vue'

export default {
  layout: 'admin',  
  components: { NewPostForm },
  methods:{
      onSubmit(post) {
        //   console.log('Post added')
        //   console.log(post)
        this.$store.dispatch('addPost', post)
            .then(() => {
                this.$router.push('/admin')
            })
      }
  }
    
}
</script>