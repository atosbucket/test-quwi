<template>
    <div class="col">
        <nuxt-link :to="getLink" class="card h-100">
          <img :src="post.imgUrl" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">
              {{ post.descr }}
            </p>
          </div>
        </nuxt-link>
      </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        },
        admin: {
          type: Boolean,
          required: false
        }
    },
    computed: {
      getLink() {
        return this.admin ? `/admin/${this.post.id}` : `/blog/${this.post.id}`
      }
    }
}
</script>

<style scoped>
 .card img {
    height: 14rem;
    object-fit: cover;
 }

 .card{
   color: rgba(0,0,0,.9);
   text-decoration: none;
 }

 .card-text {
   color: rgba(0,0,0,.5);
 }
</style>