import HomePage from "@/views/Home.page.vue";
import SingleMovie from "@/views/SingleMovie.page.vue";
import Movies from "@/views/Movies.page.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      children: [
        {
          path: ":id",
          name: "single-movie",
          component: SingleMovie,
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      component: null,
      children: [],
    },
  ],
});

export default router;
