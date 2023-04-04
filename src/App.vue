<script setup>
import { RouterView, RouterLink } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <router-view />
  </main>
 
  <!-- <router-link /> -->

  <footer>
    <Footer />
  </footer>
</template>

<style scoped></style>
