<template>
  <div class="comment py-5">
    <h3>Add new commet</h3>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label class="form-label">Name</label>
        <app-input v-model="comment.name" />
      </div>
      <div class="mb-3">
        <label class="form-label">Comment</label>
        <app-text-area v-model="comment.text" />
      </div>
      <app-button type="btn-primary">Submit</app-button>
    </form>
  </div>
</template>

<script>
import AppButton from '@/components/UI/Controls/Button.vue'
import AppInput from '@/components/UI/Controls/Input.vue'
import AppTextArea from '@/components/UI/Controls/TextArea.vue'

// import axios from 'axios'

export default {
  components: {
    AppButton,
    AppInput,
    AppTextArea,
  },
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      comment: {
        name: "",
        text: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch('addComment', {
        postId: this.postId,
        publish: false,
        ...this.comment
      })
        .then(() => {
          this.comment.name = ''
          this.comment.text = ''
        })
        .catch(e => consoloe.log(e))
    },
  },
};
</script>
