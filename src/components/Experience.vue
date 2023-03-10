<script lang="ts">
import { defineComponent } from "vue";
import bootstrap from "../assets/skills/bootstrap.png";
import css from "../assets/skills/css.png";
import git from "../assets/skills/git.png";
import github from "../assets/skills/github.png";
import html from "../assets/skills/html.png";
import javascript from "../assets/skills/javascript.png";
import netlify from "../assets/skills/netlify.png";
import next from "../assets/skills/nextjs.png";
import node from "../assets/skills/node.png";
import npm from "../assets/skills/npm.png";
import photoshop from "../assets/skills/photoshop.png";
import react from "../assets/skills/react.png";
import tailwind from "../assets/skills/tailwind.png";
import vscode from "../assets/skills/vscode.png";

interface Item {
  id: number;
  src: string;
  title: string;
  style: string;
}

export default defineComponent({
  name: "ItemList",
  data() {
    return {
        bootstrap:bootstrap,
        css:css,git:git,github:github,html:html,javascript:javascript,netlify:netlify,next:next,node:node,npm:npm,photoshop:photoshop,react:react,tailwind:tailwind,vscode:vscode,
         techs :[
    {
      id: 1,
      src: react,
      title: "React",
      style: "shadow-sky-400",
    },
    {
      id: 2,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: html,
      title: "HTML",
      style: "shadow-orange-400",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-indigo-500/50",
    },
    {
      id: 7,
      src: git,
      title: "Git",
      style: "shadow-orange-600",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: npm,
      title: "Npm",
      style: "shadow-red-500",
    },
    {
      id: 10,
      src: vscode,
      title: "VS Code",
      style: "shadow-blue-400",
    },
    {
      id: 11,
      src: netlify,
      title: "Netlify",
      style: "shadow-blue-300",
    },
    {
      id: 12,
      src: photoshop,
      title: "Photoshop",
      style: "shadow-blue-500",
    },
  ]as Item[],
    };
  },
});
</script>
<template>

<div id="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white lg:h-screen">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">Currently working with the most used Front-end techs and tool<br/>available for Web Development</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

            <div v-for="tech in techs"
              :key= tech.id
              class='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'
              :class="tech.style"
            >
              <img :src= tech.src alt="" className="w-20 mx-auto" />
              <p className="mt-4">{{tech.title}}</p>
            </div>
         
        </div>
      </div>
    </div>
</template>