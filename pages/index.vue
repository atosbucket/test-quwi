<template>
    <div class="w-full">
        <h3 class="text-center">Projects</h3>
        <div class="w-full d-flex mt-4 flex-col">
            <project-card v-for="(project, index) in getProjects" :key="index" :project="project" @edit="editProject(project)" />
            <span v-if="getProjects.length == 0">No project.</span>
        </div>
        <edit-project-modal v-if="isEditing" :project="selectedProject" @close="isEditing = false" @submit="UpdateProject" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    components: {},
    layout: "default",
    data() {
        return {
            products: [],
            isEditing: false,
            selectedProject: null
        };
    },
    computed: {
        ...mapGetters(['loggedInUser']),
        getProjects() {
            return this.$store.getters.getProjects;
        },
    },
    mounted() {
        this.$store.dispatch("getProjects");
    },
    methods: {
        editProject(project) {
            this.isEditing = true;
            this.selectedProject = project;
        },
        UpdateProject(name) {
            if (name) {
                this.$store.dispatch("updateProject", {
                    id: this.selectedProject.id,
                    name: name
                });
                this.isEditing = false;
            }
        }
    },
};
</script>

<style scoped></style>
