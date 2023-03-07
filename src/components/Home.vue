<script setup lang="ts"></script>

<template>
    <div
        id="home"
        class="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
      >
        <div class="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
          <div class="flex flex-col justify-center h-full">
            <p class="text-gray-500 text-2xl py-4 max-w-md">Hi, I'm</p>
            <h2 class="text-4xl sm:text-7xl font-bold text-white">
              Bruno Gibson
            </h2>
            <h2 class="text-4xl sm:text-7xl  text-white">
                Stephen
            </h2>
            <p class="text-gray-500 text-lg py-8 max-w-md md:text-2xl">I'm a software engineer specializing in building
               (and occassionally designing) expectional digital experiences.👨‍💻</p>
            <div class="flex">
              <router-link to="/project"
              class="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
                from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-500">Projects</router-link>
            </div>
          </div>
          <div>
            <img
              src='../assets/SG.jpg'
              alt="my profile"
              class="h-60 md:h-80"
            /> 
          </div>
        </div>
      </div>
      <div class="w-full bg-gradient-to-b from-gray-800 to-black text-white lg:mt-0">
      <div class="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div class="lg:pb-2">
          <p class="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p class="text-xl mt-5 lg:mt-10">
          <!-- <span class=" font-bold">Hi,</span> My name is <span class=" font-bold">Bruno Stephen.</span> -->
        </p>
        <p class="text-x lg:text-xl">My passion lies in creating clean and user-centered interfaces through designing and developing.👨‍💻
          <br/>
          <br/>
          I'm highly passionate about designing and developing clean and user-centered interfaces.
          <br/>
          I enjoy building projects that allow me to apply theoretical knowledge in practical ways.
          <br/>
          <br/>
          I am excited about the opportunity to learn from and collaborate with the exceptional team at Cyphercrescent Limited.
        </p>
        <br/>
        <div>
            <img
              src='../assets/webdev.png'
              alt="my profile"
              class="h-80 md:h-100"
            /> 
            
            uuuu
          </div>
        </div>

        
    </div>
      
</template>

<style></style>
