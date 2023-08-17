<template>
  
    
      <table class="table">

        <!-- thead -->
        <thead>
          <tr><th v-for="(th, index) in thead" :key="index">{{ th }}</th></tr>
        </thead>
        <!-- tbody -->
        <slot name="tbody"> </slot>

      </table>
    
  
</template>

<script>
export default {
  props: {
    thead: {
      type: Array,
      required: true
    }
  }
}
</script>