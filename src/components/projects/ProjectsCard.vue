<script>
export default {
    props: { project: Array }
}
</script>
<template>
    <li class="col-6 g-3">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
    </li>
</template>
<style scoped>
li {
    list-style-type: none;
}
</style>