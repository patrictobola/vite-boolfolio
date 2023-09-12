<script>
import PaginationLinks from '../PaginationLinks.vue';
import ProjectsCard from '../components/projects/ProjectsCard.vue';

export default {
    components: {
        ProjectsCard,
        PaginationLinks
    },
    // data: () => ({
    //     projects: []
    // }),
    // methods: {
    //     fetchProjects(endpoint = 'http://127.0.0.1:8000/api/projects') {

    //         axios.get(endpoint).then(res => { this.projects = res.data })
    //     }
    // },
    // created() {
    //     this.fetchProjects();
    // }
}
</script>
<template>
    <div>
        <ul class="d-flex row">
            <!-- <ProjectsCard v-for="project in projects" :project="project" /> -->
            asdasd
        </ul>
    </div>
    <!-- <PaginationLinks :links="projects.links" @change-page="fetchProjects" /> -->
</template>
<style></style>