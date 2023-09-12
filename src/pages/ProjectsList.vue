<script>
import axios from 'axios';
import PaginationLinks from '../PaginationLinks.vue';
import ProjectsCard from '../components/projects/ProjectsCard.vue';

export default {
    components: {
        ProjectsCard,
        PaginationLinks
    },
    data: () => ({
        projects: {
            data: [],
            links: [],
        }
    }),
    methods: {
        fetchProjects(endpoint = 'http://127.0.0.1:8000/api/projects') {
            axios.get(endpoint)
                .then(res => {
                    const { data, links } = res.data;
                    this.projects = { data, links }
                })

        }
    },
    created() {
        this.fetchProjects();
    }
}
</script>
<template>
    <div class="container">
        <ul class="d-flex row">
            <ProjectsCard v-for="project in projects.data" :project="project" />
        </ul>
        <PaginationLinks :links="projects.links" @change-page="fetchProjects" />
    </div>
</template>
<style>
ul {
    padding-left: 0;
}
</style>