<script>
import axios from 'axios';
import PaginationLinks from '../components/PaginationLinks.vue';
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
        },
        types: []
    }),
    methods: {
        fetchProjects(endpoint = 'http://127.0.0.1:8000/api/projects') {
            axios.get(endpoint)
                .then(res => {
                    const { data, links } = res.data[0];
                    this.projects = { data, links }
                }).catch(err => { console.log(err) })

        },
        fetchTypes(endpoint = 'http://127.0.0.1:8000/api/projects') {
            axios.get(endpoint)
                .then(res => {
                    this.types = res.data[1]
                }).catch(err => { console.log(err) })

        }
    },
    created() {
        this.fetchProjects();
        this.fetchTypes();
    }
}
</script>
<template>
    <div class="container">
        <ul class="d-flex row">
            <ProjectsCard v-for="project in projects.data" :project="project" :types="types" :key="project.id" />
        </ul>
        <PaginationLinks :links="projects.links" @change-page="fetchProjects" />
    </div>
</template>
<style>
ul {
    padding-left: 0;
}
</style>