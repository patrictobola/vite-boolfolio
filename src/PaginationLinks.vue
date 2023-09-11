<script>
export default {
    props: { links: Array }
}
</script>
<template>
    <nav class="container">
        <ul class="pagination">
            <li v-for="link in links" :key="link.label" class="page-item"><button class="page-link" v-html="link.label"
                    @click="$emit('change-page', link.url)"></button></li>

        </ul>
    </nav>
</template>
<style scoped></style>