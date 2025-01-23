<script setup lang="ts">
defineProps<{
  show: ShowType;
  isLive?: Boolean;
}>();

import type { ShowType } from "@/lib/types/movies";

import "@/styles/atoms/movieCard.atom.scss";

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
  <article
    class="movie-card"
    :style="`--movie-image: url(${imagePath}${show.poster_path});
     --score-percentage:${getScore(show.vote_average)}%;
     --border-clr:${getMovieRatingColor(show.vote_average)}
     `"
  >
    <div
      class="movie-card__score"
      :data-score="show.vote_average.toFixed(1)"
    ></div>

    <p v-if="isLive" class="movie-card__live">LIVE</p>
    <p class="movie-card__title">{{ show?.name }}</p>
  </article>
</template>

<style lang="scss" scoped></style>
