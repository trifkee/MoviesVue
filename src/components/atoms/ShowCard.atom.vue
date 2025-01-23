<script setup lang="ts">
import CardScoreAtom from "./CardScore.atom.vue";

defineProps<{
  show: ShowType;
  isLive?: Boolean;
}>();

import type { ShowType } from "@/lib/types/movies";

import "@/styles/atoms/movieCard.atom.scss";

const imagePath = import.meta.env.VITE_TMDB_IMAGE_URL;
</script>

<template>
  <article
    class="movie-card"
    :style="`--movie-image: url(${imagePath}${show.poster_path});
     `"
  >
    <CardScoreAtom :voteCount="show?.vote_average" />

    <p v-if="isLive" class="movie-card__live">LIVE</p>
    <p class="movie-card__title">{{ show?.name }}</p>
  </article>
</template>

<style lang="scss" scoped></style>
