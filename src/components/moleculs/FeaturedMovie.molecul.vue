<script setup lang="ts">
import { computed } from "vue";

import type { MovieType } from "@/lib/types/movies";

import "@/styles/molecul/featuredMovie.molecul.scss";
import ButtonAtom from "../atoms/button.atom.vue";

const props = defineProps<{
  movie: MovieType | null;
  isLoading: Boolean;
}>();

const path = import.meta.env.VITE_TMDB_IMAGE_URL;

const bgImageStyle = computed(() => {
  return `--bg-image:url(${path}${props.movie?.backdrop_path}); opacity: ${
    props.movie ? 1 : 0
  };`;
});
</script>

<template>
  <Transition name="fade">
    <article :style="bgImageStyle" class="featured-movie">
      <div class="featured-movie__info">
        <img class="poster" :src="`${path}${movie?.poster_path}`" alt="" />

        <div class="info">
          <h2>{{ movie?.title }}</h2>
          <p>{{ movie?.overview }}</p>

          <!-- <ButtonAtom>See More</ButtonAtom> -->
        </div>
      </div>
    </article>
  </Transition>
</template>

<style lang="scss" scoped>
.featured-movie {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
