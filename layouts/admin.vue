<template>
<no-ssr>
  <div id="admin-layout">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <div class="container-fluid">
        <nuxt-link class="navbar-brand" to="/admin">Dashboard</nuxt-link>
        <div class="" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <nuxt-link class="nav-link active" aria-current="page" to="/"
                >Back to site</nuxt-link
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" @click.prevent="logoutUser" href="#">Exit</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Nuxt />
  </div>
</no-ssr>
</template>

<script>
export default {
  middleware: ['auth-check','auth'],
  methods: {
    logoutUser() {
      this.$store.dispatch('logoutUser')
        .then(res => {
          this.$router.push('/admin/auth')
        })
        .catch(e => console.log(e))
    }
  }
};
</script>
