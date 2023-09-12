<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>

<template>
  <AppHeader />
  <RouterView />
</template>

<style >
@import './styles/main.css';
</style>
