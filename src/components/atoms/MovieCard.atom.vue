<script setup lang="ts">
defineProps<{
  movie: MovieType;
  isLive?: Boolean;
}>();

import type { MovieType } from "@/lib/types/movies";

import "@/styles/atoms/movieCard.atom.scss";
import { RouterLink } from "vue-router";

const imagePath = import.meta.env.VITE_TMDB_IMAGE_URL;

function getScore(score: number) {
  // @ts-expect-error
  return score.toFixed(1) * 10;
}

function getMovieRatingColor(score: number) {
  if (score >= 7) {
    return "#00A36C";
  } else if (score >= 5) {
    return "#ffa500 ";
  } else {
    return "#C41E3A";
  }
}
</script>

<template>
  <RouterLink :to="`/movies/${movie.id}`" :key="movie.id">
    <article
      class="movie-card"
      :style="`
        --movie-image: url(${imagePath}${movie.poster_path});
        --score-percentage:${getScore(movie.vote_average)}%;
        --border-clr:${getMovieRatingColor(movie.vote_average)}
        `"
    >
      <div
        class="movie-card__score"
        :data-score="movie.vote_average.toFixed(1)"
      ></div>
      <p class="movie-card__title">{{ movie.title }}</p>
    </article>
  </RouterLink>
</template>

<style lang="scss" scoped></style>
