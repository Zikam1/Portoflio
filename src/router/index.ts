import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "@/components/Home.vue";
import ExperienceVue from "@/components/Experience.vue";
import ContactVue from "@/components/Contact.vue";
import ProjectsVue from "@/components/Projects.vue";
import BlogVue from "@/components/Blog.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeVue,
    },
    {
      path: "/experience",
      name: "experience",
      component: ExperienceVue,
    },
    {
      path: "/project",
      name: "project",
      component: ProjectsVue,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactVue,
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogVue,
    },
    {
      path: "/about",
      name: "about",
      
      component: () => import("../components/About.vue"),
    },
  ],
});

export default router;