<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
export default {
  components: {
    AppHeader, AppMain
  },
  methods: {
    fetchProjects() {
      const endpoint = 'http://127.0.0.1:8000/api/projects';
      axios.get(endpoint).then(res => { console.log(res.data) })
    }
  },
  created() {
    this.fetchProjects();
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style ></style>
