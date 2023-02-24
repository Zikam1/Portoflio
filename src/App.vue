<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Experience from "./components/Experience.vue";
import Contact from "./components/Contact.vue";
import Social from "./components/Social.vue";
</script>

<template>
  <header>
    <div class="w-full">
      <Navbar title="Cc" />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Social />
    </div>
  </header>

  <RouterView />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
</style>
