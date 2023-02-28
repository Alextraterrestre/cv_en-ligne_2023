<script setup>
import {RouterView, RouterLink} from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header>
  <NavBar />
  </header>

  <main>
  </main>
  <router-view />
  <router-link />
</template>

<style scoped>
</style>
