<script>
import axios from 'axios';

export default {
    components: {
    },
    data: () => ({
        project: []

    }),
    methods: {
        fetchProject() {
            const baseUri = 'http://127.0.0.1:8000/api/projects/';
            const endpoint = baseUri + this.$route.params.id;
            axios.get(endpoint)
                .then(res => {
                    this.project = res.data
                }).catch(err => { console.log(err) })

        }
    },
    created() {
        this.fetchProject();
    }
}
</script>
<template>
    <div class="container">
        <h1>{{ project.title }}</h1>
    </div>
</template>
<style></style>