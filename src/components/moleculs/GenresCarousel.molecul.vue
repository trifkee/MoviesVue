<script setup lang="ts">
type CarouselType = {
  data: GenreListType | undefined;
  isLoading: boolean;
  title: string;
};

const props = defineProps<CarouselType>();

import GenreCard from "@/components/atoms/GenreCard.atom.vue";
import type { GenreListType } from "@/lib/types/movies";

import "@/styles/molecul/movieCarousel.molecul.scss";
</script>

<template>
  <article class="movie-carousel">
    <!-- <h2 class="movie-carousel__title">{{ title }}</h2> -->

    <div class="movie-carousel__container">
      <GenreCard :key="genre.id" v-for="genre in data" :genre="genre" />
    </div>
  </article>
</template>

<style lang="scss" scoped>
.movie-carousel {
  margin-bottom: 1rem !important;
}
</style>
