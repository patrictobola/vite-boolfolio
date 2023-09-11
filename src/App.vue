<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import PaginationLinks from './PaginationLinks.vue'
export default {
  components: {
    AppHeader, AppMain, PaginationLinks
  },
  data: () => ({
    projects: []
  }),
  methods: {
    fetchProjects() {
      const endpoint = 'http://127.0.0.1:8000/api/projects';

      axios.get(endpoint).then(res => { this.projects = res.data })
    }
  },
  created() {
    this.fetchProjects();
  }
}
</script>

<template>
  <AppHeader />
  <AppMain :projects="projects.data" />
  <PaginationLinks :links="projects.links" />
</template>

<style ></style>
