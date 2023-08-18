<template>
    <div class="modal-overlay">
        <div class="modal">
            <div class="px-4">
                <div class="w-full d-flex">
                    <label class="col-4">Name</label>
                    <input type="text" class="col-8" v-model="name" />
                </div>
                <button @click="$emit('submit', name)" class="mt-4">Submit</button>
            </div>
        </div>
        <div @click="$emit('close')" class="close">&times;</div>
    </div>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            default: () => null
        },
    },
    data() {
        return {
            name: this.project ? this.project.name : ""
        }
    },
}
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
  }

  .modal {
    text-align: center;
    background-color: white;
    height: 100px;
    width: 500px;
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 20px;
  }
  .close {
    margin: 10% 0 0 16px;
    cursor: pointer;
    font-size: 36px;
    margin-left: -36px;
  }
</style>
