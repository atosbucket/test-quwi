<template>
    <div class="border cursor-pointer rounded border-gray mb-2 d-flex items-center justify-between px-4 h-100px" v-if="project" @click="editProject">
        <img :src="project.logo_url" class="project-logo" />
        <span class="text-bold flex-1 ml-4">{{ project.name }}</span>
        <span v-if="project.users.length == 0">No Workers</span>
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
    methods: {
        editProject() {
            this.$emit("edit", this.project);
        }
    },
};
</script>
