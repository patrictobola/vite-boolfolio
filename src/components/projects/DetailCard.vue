<script>
export default {
    props: { project: Object }
}
</script>
<template>
    <div class="card mt-5">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
                <h1 class="card-title">{{ project.title }}</h1>
                <div v-if="project.technologies?.length">
                    <span v-for="tech in project.technologies" class="badge rounded-pill me-1"
                        :style="{ backgroundColor: tech.color }">{{ tech.label }}</span>
                </div>
            </div>
            <div class="d-flex justify-content-between mt-3">
                <div>
                    <figure><input type="image" :src="project.thumb" alt=""></figure>
                </div>
                <div>
                    <h6 class="card-subtitle mb-2 text-body-secondary">{{ project.date }}</h6>
                    <p class="card-text">{{ project.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style></style>