<template>
    <div class="w-full">
        <h3 class="text-center">Login</h3>
        <div class="rouneded bg-gray-300 p-4">
            <div class="w-100 mb-4 d-flex items-center">
                <label for="email" class="col-4">Email</label>
                <input type="email" id="email" class="col-8 h-6" v-model="auth.email" />
            </div>
            <div class="w-100 mb-4 d-flex items-center">
                <label for="password" class="col-4">Password</label>
                <input type="password" id="password" class="col-8 h-6" v-model="auth.password" />
            </div>
            <button @click="login">Login</button>
            <nuxt-link class="ml-2" aria-current="page" to="/register">Register</nuxt-link>
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
                email: "",
                password: ""
            }
        };
    },
    methods: {
        login() {
            this.$store.dispatch("loginUser", this.auth)
                .then((res) => {
                this.$router.push('/')
                this.auth.email = "";
                this.auth.password = "";
            })
            .catch(e => {
                console.log(e);
                this.auth.email = "";
                this.auth.password = "";
            });
        }
    },
  };
</script>
