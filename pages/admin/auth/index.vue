<template>
  <div class="container">
    <login-form @submit="onSubmit" :user="user" />
  </div>
</template>

<script>
import LoginForm from "@/components/admin/LoginForm.vue";

export default {
  components: { LoginForm },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  middleware: ['auth-check'],
  methods: {
    onSubmit() {
      this.$store.dispatch("authUser", this.user)
        .then((res) => {
          this.$router.push('/admin')
          this.user.email = "";
          this.user.password = "";
      })
      .catch(e => {
          console.log(e)
        //   Reset
          this.user.email = "";
          this.user.password = "";
      })
    },
  },
};
</script>
