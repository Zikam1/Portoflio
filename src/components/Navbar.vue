<template>
    <header
      class="flex justify-between items-center w-full h-20 px-10 text-white bg-stone-900/80 backdrop-blur fixed drop-shadow-[0px_7px_5px_rgba(8,145,178,0.1)]"
    >
      <h1
        class="text-7xl text-slate-300 font-signature cursor-pointer italic hover:text-sky-400 hover:scale-110 duration-200"
      >
        {{ title }}
      </h1>
      <nav>
        <ul class="hidden md:flex">
          <li
            class="px-4 cursor-pointer capitalize font-semibold text-slate-300 hover:scale-110 hover:text-sky-400 duration-200"
          >
            <a href='#home'>Home</a >
          </li>
          <li
            class="px-4 cursor-pointer capitalize font-semibold text-slate-300 hover:scale-110 hover:text-sky-400 duration-200"
          >
            <a href='#about'>About</a >
          </li>
          <li
            class="px-4 cursor-pointer capitalize font-semibold text-slate-300 hover:scale-110 hover:text-sky-400 duration-200"
          >
            <a href='#project'>Projects</a >
          </li>
          <li
            class="px-4 cursor-pointer capitalize font-semibold text-slate-300 hover:scale-110 hover:text-sky-400 duration-200"
          >
            <a href='#experience'>Experience</a >
          </li>
          <li
            class="px-4 cursor-pointer capitalize font-semibold text-slate-300 hover:scale-110 hover:text-sky-400 duration-200"
          >
            <a href='#contact'>Contact</a >
          </li>
          <li
            class="px-4 cursor-pointer capitalize font-semibold text-slate-300 hover:scale-110 hover:text-sky-400 duration-200"
          >
            <a href='#contact'>Blog</a >
          </li>
        </ul>
        <div class="cursor-pointer z-50 text-gray-500 md:hidden" @click="togglenav()">
      
          <i class="fas fa-bars"></i>
        </div>
        <ul v-if="showNav"
          class="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 md:hidden"
        >
        <div class="cursor-pointer z-50 text-gray-500 md:hidden absolute top-8 right-8 " @click="togglenav()">
          <i class="fas fa-times"></i>
        </div>
          <li @click="togglenav()" class="px-4 cursor-pointer capitalize py-6 text-4xl">
            <a href='#home'>Home</a >
          </li>
  
          <li @click="togglenav()" class="px-4 cursor-pointer capitalize py-6 text-4xl">
            <a href='#about'>About</a >
          </li>
          <li @click="togglenav()" class="px-4 cursor-pointer capitalize py-6 text-4xl">
            <a href='#project'>Projects</a >
          </li>
          <li @click="togglenav()" class="px-4 cursor-pointer capitalize py-6 text-4xl">
            <a href='#experience'>Experience</a >
          </li>
          <li @click="togglenav()" class="px-4 cursor-pointer capitalize py-6 text-4xl">
            <a href='#contact'>Contact</a >
          </li>
          <li @click="togglenav()" class="px-4 cursor-pointer capitalize py-6 text-4xl">
            <a href='#blog'>Blog</a >
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  interface State {
    showNav: boolean;
  }
  export default defineComponent({
    name: "Header",
    props: {
      title: {
        type: String,
        required: true,
      },
    },
    data(): State {
      return {
        showNav:false ,
      };
    },
    methods: {
     togglenav(){
      this.showNav = !this.showNav
     }
    },
  });
  </script>
  
  <style>
  /* CSS for the header component */
  </style>
  