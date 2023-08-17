<template>
    <button type="submit" :class="[type, size]" v-on="$listeners" v-bind="$attrs" class="btn"><slot /></button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'btn-primary'
        },
        size: {
            type: String,
            default: ''
        }
    }
}
</script>