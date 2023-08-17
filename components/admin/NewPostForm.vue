<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-3">
      <label for="name" class="form-label">Title</label>
      <app-input v-model="post.title" />
    </div>
    <div class="mb-3">
      <label for="name" class="form-label">Image Url</label>
      <app-input v-model="post.imgUrl" />
    </div>
    <div class="mb-3">
      <label for="name" class="form-label">Description</label>
      <app-text-area v-model="post.descr" />
    </div>
    <div class="mb-3">
      <label for="name" class="form-label">Content</label>
      <app-text-area v-model="post.content" />
    </div>
    <app-button type="btn-primary">Save</app-button>
    <a @click="cancel" class="btn btn-link">Cancel</a>
  </form>
</template>

<script>
import AppInput from "@/components/UI/Controls/Input.vue";
import AppTextArea from "@/components/UI/Controls/TextArea.vue";
import AppButton from "@/components/UI/Controls/Button.vue";
export default {
  components: {
    AppInput,
    AppTextArea,
    AppButton,
  },
  props: {
    postEdit: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      post: this.postEdit
        ? {
            ...this.postEdit,
          }
        : {
            title: "",
            imgUrl: "",
            descr: "",
            content: "",
          },
    };
  },
  methods: {
    cancel() {
      this.$router.push("/admin");
    },
    onSubmit() {
      this.$emit("submit", this.post);
    },
  },
};
</script>
