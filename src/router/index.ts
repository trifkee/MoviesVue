import HomePage from "@/views/Home.page.vue";
import SingleMovie from "@/views/SingleMovie.page.vue";
import Movies from "@/views/Movies.page.vue";
import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    children: [],
  },
  {
    path: "/search",
    name: "search",
    component: null,
    children: [],
  },
  {
    path: "/movies",
    name: "movies",
    component: Movies,
  },
  {
    path: "/movies/:id",
    name: "single-movie",
    component: SingleMovie,
  },
  {
    path: "/about",
    name: "about",
    component: null,
    children: [],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
