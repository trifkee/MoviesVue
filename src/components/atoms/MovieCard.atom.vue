<script setup lang="ts">
defineProps<{
  movie: MovieType;
  isLive?: boolean;
}>();

import type { MovieType } from "@/lib/types/movies";

import { RouterLink } from "vue-router";
import CardScoreAtom from "./CardScore.atom.vue";

import "@/styles/atoms/movieCard.atom.scss";

const imagePath = import.meta.env.VITE_TMDB_IMAGE_URL;
</script>

<template>
  <RouterLink :to="`/movies/${movie.id}`" :key="movie.id">
    <article
      class="movie-card"
      :style="`
        --movie-image: url(${imagePath}${movie.poster_path});      `"
    >
      <CardScoreAtom :voteCount="movie?.vote_average" />
      <p class="movie-card__title">{{ movie.title }}</p>
    </article>
  </RouterLink>
</template>

<style lang="scss" scoped></style>
