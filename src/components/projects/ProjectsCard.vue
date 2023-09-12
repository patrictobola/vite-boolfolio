<script>
export default {
    props: { project: Object }
}
</script>
<template>
    <li class="col-6 g-3">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
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