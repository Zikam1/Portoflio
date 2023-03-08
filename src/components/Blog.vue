<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
 <div
 id="blog"
      class="w-full bg-gradient-to-b from-gray-800 to-black text-white lg:h-screen"
    >
      <div class="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <!-- <div class="lg:pb-8">
          <p class="text-4xl font-bold inline border-b-4 border-gray-500">
             News
          </p>
        </div> -->
        <a href='#blog' class=" bg-cyan-600 w-fit px-10 py-3 rounded-md cursor-pointer">Blog News</a >
        <p class="text-xl mt-1 lg:mt-20">
          <span class=" font-semi-bold"> In this blog post,</span> I would like to share my experience learning three popular front-end technologies: <span class=" font-bold">Vue.js, Tailwind CSS, and TypeScript.</span>
        </p>
        <p class="text-x lg:text-xl">These ideas are great for  blogs,👨‍💻 expect based in Nigeria.
          <br/>
          <br/>
          First, let's start with Vue.js. Vue.js is a progressive JavaScript framework for building user interfaces. I was initially drawn to Vue.js because of its simplicity and ease of use.
          <br/>
          After spending some time learning the basics, I was impressed with its reactivity system and the ability to create reusable components. 
          <br/>
          <br/>
          Next, I learned about Tailwind CSS. Tailwind CSS is a utility-first CSS framework that provides a set of 
          pre-defined CSS classes that you can use to style your HTML elements. 
          <br/>
          <br/>
        </p>
        <br/>
        <br/>
      </div>
    </div>
</template>

<style>
</style>
