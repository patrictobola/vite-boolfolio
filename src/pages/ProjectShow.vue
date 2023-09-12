<script>
import axios from 'axios';
import DetailCard from '../components/projects/DetailCard.vue';
export default {
    components: {
        DetailCard
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
                    console.log(this.project)
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
        <DetailCard :project="project" />
    </div>
</template>
<style></style>