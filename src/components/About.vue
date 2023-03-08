<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
 <div
 id="about"
      class="w-full bg-gradient-to-b from-gray-800 to-black text-white lg:h-screen"
    >
    
      <div class="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div class="lg:pb-2">
          <p class="text-4xl font-bold inline  border-gray-500">
            About
          </p>
        </div>

        <p class="text-xl mt-5 lg:mt-20">
          <span class=" font-bold">Hi,</span> My name is <span class=" font-bold">Bruno Gibson Stephen.</span>
        </p>
        <p class="text-x lg:text-xl">Willingness to contribute my best to any organisations' can also be demonstrated through a strong work ethic, a positive attitude, and a collaborative approach to work.👨‍💻
          <br/>
          <br/>
          I'm highly passionate about designing and developing clean and user-centered interfaces.
          <br/>
          Constantly learning about and improving on web development skills. Building projects to apply theory of new technologies, best practices, or methods.
          <br/>
          <br/>
          Looking forward to learning and collaborating with the best and brightest  team in cyphercrescent Limited
        </p>
        <br/>
        <div class="lg:flex gap-32">
          <p>Full Name: Bruno Gibson Stephen
            <br/>
            <br/>
            DOB: 07-September-2023
            <br/>
            <br/>
            Degree: Sta
          </p>
          <br/>
          <p>
            Address: 20 SOlomon Abek woji Porthcourt.
            <br/>
            <br/>
            Email: brunogibson@cyphercrescent.com
            <br/>
            <br/>
            Phone\whatsapp: +2348104233630
          </p>
          <br/>
        </div>
        <br/>
        <router-link to="/about"
              class="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
                from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-500">About</router-link>
      </div>
    </div>
</template>

<style>
</style>
