<template>
  <div class="alert" :class="classMess" role="alert">
    {{ text }}
  </div>
</template>

<script>
export default {

    props: {
        classMess: {
            type: String,
            default: 'alert-primary'
        },
        text: {
            type: String,
            default: 'This is messege'
        }
    }

};
</script>
