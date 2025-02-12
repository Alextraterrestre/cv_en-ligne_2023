<script setup>
import { RouterView, RouterLink } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

// new Vue({
//   el: '#app',
//   methods: {
//     handleScroll: function (evt, el) {
//       if (window.scrollY > 50) {
//         el.setClassName(
//           'active'
//         )
//       }
//       return window.scrollY > 100
//     }
//   }
// })
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

<style scoped>
</style>
