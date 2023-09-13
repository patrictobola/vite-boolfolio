<script>
import { RouterLink } from 'vue-router';

export default {
    props: { project: Object, types: Object },
    components: { RouterLink }
}
</script>
<template>
    <li class="col-6 g-3">
        <div class="card">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <div v-for="typee in types">

                        <RouterLink v-if="project.type_id === typee.id" to="/" class="badge rounded-pill me-1 text-dark"
                            :style="{ backgroundColor: typee.color }">{{ typee.label }}</RouterLink>
                    </div>
                    <RouterLink class="btn btn-success" :to="{ name: 'project-show', params: { id: project.id } }">Dettagli
                    </RouterLink>
                </div>
                <h6 class="card-subtitle mb-2 text-body-secondary">{{ project.date }}</h6>
                <p class="card-text">{{ project.description }}</p>
            </div>
        </div>
    </li>
</template>
<style scoped>
li {
    list-style-type: none;
}
</style>