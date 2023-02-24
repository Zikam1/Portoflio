<script lang="ts">
import { defineComponent } from "vue";
import {IMAGE} from '../assets/Image'
interface Item {
  id: number;
  name: string;
  src: string;
  hrefCode: string;
  hrefLive: string;
}

export default defineComponent({
  name: "ItemList",
  data() {
    return {
      items: [
        {
          id: 1,
          name: "E-Commerce Website",
          src: IMAGE,
          hrefLive: "https://ecom-estore.netlify.app/",
          hrefCode: "https://github.com/Rahmathirshad/E-Commerce---Website",
        },
        {
          id: 1,
          name: "E-Commerce Website",
          src: IMAGE,
          hrefLive: "https://ecom-estore.netlify.app/",
          hrefCode: "https://github.com/Rahmathirshad/E-Commerce---Website",
        },
        {
          id: 1,
          name: "E-Commerce Website",
          src: IMAGE,
          hrefLive: "https://ecom-estore.netlify.app/",
          hrefCode: "https://github.com/Rahmathirshad/E-Commerce---Website",
        },
        {
          id: 1,
          name: "E-Commerce Website",
          src: IMAGE,
          hrefLive: "https://ecom-estore.netlify.app/",
          hrefCode: "https://github.com/Rahmathirshad/E-Commerce---Website",
        },
        {
          id: 1,
          name: "E-Commerce Website",
          src: IMAGE,
          hrefLive: "https://ecom-estore.netlify.app/",
          hrefCode: "https://github.com/Rahmathirshad/E-Commerce---Website",
        },
        {
          id: 1,
          name: "E-Commerce Website",
          src: IMAGE,
          hrefLive: "https://ecom-estore.netlify.app/",
          hrefCode: "https://github.com/Rahmathirshad/E-Commerce---Website",
        },
      ] as Item[],
    };
  },
});
</script>
<template>
  <div

    id="project"
    class="bg-gradient-to-b from-black to-gray-800 w-full text-white "
  >
    <div
      class="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full lg:p-24"
    >
      <div class="pb-2">
        <p class="text-4xl font-bold inline border-b-4 border-gray-500">
          Projects
        </p>
        <p class="py-6">Check out some of my work right here</p>
      </div>

      <div
        class="grid text-center sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
      >
        <li v-for="item in items" :key="item.id">
            <div class="shadow-xl rounded-b-md duration-300 hover:scale-150">
              <div class="">
              <img
                :src=item.src
                alt=""
                class="rounded-t-md "
              />
              <p class="bg-gray-900  font-semibold">{{ item.name }}</p>
              </div>
              <div class="flex items-center justify-center bg-zinc-900 rounded-b-md">
                <button className="w-1/2 px-6 py-2 m-1 duration-200 hover:scale-110 text-sky-400">
                  <a :href=item.hrefCode target="_blank" rel="noreferrer">Live</a>
                </button>
                <button class="w-1/2 px-6 py-2 m-1 duration-200 hover:scale-110 text-sky-400">
                <a :href=item.hrefCode target="_blank" rel="noreferrer">Code</a>
                </button>
              </div>
            </div></li>
      </div>
    </div>
  </div>
</template>
