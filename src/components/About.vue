<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
 <div
 id="about"
      class="w-full bg-gradient-to-b from-gray-800 to-black text-white lg:h-screen"
    >
      <div class="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div class="lg:pb-8">
          <p class="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p class="text-xl mt-5 lg:mt-20">
          <span class=" font-bold">Hi,</span> My name is <span class=" font-bold">My name.</span>
        </p>
        <p class="text-x lg:text-xl">A self-taught Front-end Web Developer👨‍💻 based in Nigeria.
          <br/>
          <br/>
          I'm highly passionate about designing and developing clean and user-centered interfaces.
          <br/>
          Constantly learning about and improving on web development skills. Building projects to apply theory of new technologies, best practices, or methods.
          <br/>
          <br/>
          Looking forward to learning and collaborating with the best and brightest in this field!
        </p>
        <br/>
        <div class="lg:flex gap-32">
          <p>Full Name: Aku Isaac Chibuzor
            <br/>
            <br/>
            DOB: 07-September-1999
            <br/>
            <br/>
            Degree: Computer Science And Engineering
          </p>
          <br/>
          <p>
            Address: 20 SOlomon Abek woji Porthcourt.
            <br/>
            <br/>
            Email: isaac.aku@cyphercrescent.com
            <br/>
            <br/>
            Phone\whatsapp: +2348104233630
          </p>
          <br/>
        </div>
        <br/>
        <a href='#contact' class=" bg-cyan-600 w-fit px-10 py-3 rounded-md cursor-pointer">Contact</a >
      </div>
    </div>
</template>

<style>
</style>
