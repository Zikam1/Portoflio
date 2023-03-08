<script lang="ts">

import { defineComponent, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

import Social from "./components/Social.vue";
export default defineComponent({
  components: {
    Navbar,
    Social,
  },
});
</script>
<template>
  <div class="w-full">
      <header>
      <Navbar title="BG" />
     </header>
  <div class="pt-20">
  <RouterView />

</div>
    <Social />
    </div>

</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
</style>