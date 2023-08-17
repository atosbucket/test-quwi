<template>
  <input v-bind="$attrs" :value="value" :type="type" :required="required" class="form-control" @input="$emit('input', $event.target.value)" id="" />
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'text'
        },
        required: {
            type: Boolean,
            default: true
        }
    }
};
</script>
