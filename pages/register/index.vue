<template>
    <div class="w-full">
        <h3 class="text-center">Register</h3>
        <div class="rouneded bg-gray-300 p-4">
            <div class="w-100 mb-4 d-flex items-center">
                <label for="name" class="col-4">Name</label>
                <input type="text" id="name" class="col-8 h-6" v-model="auth.name" />
            </div>
            <div class="w-100 mb-4 d-flex items-center">
                <label for="email" class="col-4">Email</label>
                <input type="email" id="email" class="col-8 h-6" v-model="auth.email" />
            </div>
            <div class="w-100 mb-4 d-flex items-center">
                <label for="password" class="col-4">Password</label>
                <input type="password" id="password" class="col-8 h-6" v-model="auth.password" />
            </div>
            <button @click="register">Register</button>
            <nuxt-link class="ml-2" aria-current="page" to="/login">Login</nuxt-link>
        </div>
    </div>
</template>

<script>

export default {
    components: {  },
    layout: "auth",
    data() {
        return {
            auth: {
                name: "",
                email: "",
                password: ""
            }
        };
    },
    methods: {
        register() {
            this.$store.dispatch("registerUser", this.auth)
                .then(() => {
                    this.auth.name = "";
                    this.auth.email = "";
                    this.auth.password = "";
                    this.$router.push('/')
                })
                .catch(e => {
                    console.log(e);
                    //   Reset
                    this.auth.name = "";
                    this.auth.email = "";
                    this.auth.password = "";
                });
        }
    },
  };
</script>
