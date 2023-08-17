<template>
  <div class="contact-form">
    <div class="container">
      <h2>Contact me!</h2>

      <message v-if="message" />

      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="name" class="form-label"
            >Name</label
          >
          <app-input v-model="user.name" />
        </div>
        <div class="mb-3">
          <label for="name" class="form-label"
            >Email</label
          >
           <app-input type="email" v-model="user.email" />
        </div>
        <div class="mb-3">
          <label for="text" class="form-label"
            >Comment</label
          >
          <app-text-area v-model="user.text" />
        </div>
        <app-button type="btn-primary">Submit</app-button>
      </form>
    </div>
  </div>
</template>

<script>
import Message from '@/components/UI/Message.vue'

import AppButton from '@/components/UI/Controls/Button.vue'
import AppInput from '@/components/UI/Controls/Input.vue'
import AppTextArea from '@/components/UI/Controls/TextArea.vue'


export default {
    components: {
        AppButton,
        AppInput,
        AppTextArea,
        Message
    },
    data() {
        return{
            message: null,
            user: {
                name: '',
                email: '',
                text: '',
            }
        }
    },
    methods: {
        handleSubmit() {
            console.log(this.user)
        }
    }
};
</script>

<style>
.contact-form {
  background-color: rgb(248, 249, 250);
  padding: 3rem 0;
}
</style>
