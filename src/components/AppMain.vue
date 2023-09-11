<script>
import ProjectsCard from './projects/ProjectsCard.vue';
export default {
    components: {
        ProjectsCard
    },
    props: { projects: Array }
}
</script>
<template>
    <main class="container mt-5">
        <h1>Projects</h1>
        <div>
            <ul class="d-flex row">
                <ProjectsCard v-for="project in projects" :project="project" />
            </ul>
        </div>
    </main>
</template>
<style scoped>
ul {
    padding: 0;
}
</style>