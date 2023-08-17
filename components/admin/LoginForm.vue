<template>
  <form @submit.prevent="$emit('submit')">
    <div class="mb-3">
      <label for="login" class="form-label">Login</label>
      <app-input type="email" v-model="user.email" />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <app-input type="password" v-model="user.password" />
    </div>
    <app-button type="btn-primary">Login</app-button>
  </form>
</template>

<script>
import appInput from '@/components/UI/Controls/Input.vue'
import appButton from '@/components/UI/Controls/Button.vue'

export default {
  props: {
    user: {
      type: Object,
    },
  },
  components: {
      appInput,
      appButton
  },
  
};
</script>
