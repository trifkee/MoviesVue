<script setup lang="ts">
type CarouseType = {
  data: MovieType[] | undefined;
  isLoading: Boolean;
  title: string;
  isLive?: Boolean;
};

defineProps<CarouseType>();

import MovieCard from "@/components/atoms/MovieCard.atom.vue";
import MovieCardSkeleton from "../atoms/MovieCardSkeleton.atom.vue";

import type { MovieType } from "@/lib/types/movies";

import "@/styles/molecul/movieCarousel.molecul.scss";
</script>

<template>
  <article class="movie-carousel">
    <h2 class="movie-carousel__title">{{ title }}</h2>

    <div v-if="isLoading || !data" class="movie-carousel__container">
      <MovieCardSkeleton v-for="index in 10" :key="index" />
    </div>
    <div v-else class="movie-carousel__container">
      <MovieCard
        v-for="movie in data"
        :key="movie.id"
        :isLive="isLive"
        :movie="movie"
      />
    </div>
  </article>
</template>

<style lang="scss" scoped></style>
