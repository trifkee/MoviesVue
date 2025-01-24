<script setup lang="ts">
type CarouseType = {
  data: ShowType[] | undefined;
  isLoading: boolean;
  title: string;
  isLive?: boolean;
};

defineProps<CarouseType>();

import ShowCard from "@/components/atoms/ShowCard.atom.vue";
import MovieCardSkeleton from "../atoms/MovieCardSkeleton.atom.vue";

import type { ShowType } from "@/lib/types/movies";

import "@/styles/molecul/movieCarousel.molecul.scss";
</script>

<template>
  <article class="movie-carousel">
    <h2 class="movie-carousel__title">{{ title }}</h2>

    <div v-if="isLoading || !data" class="movie-carousel__container">
      <MovieCardSkeleton v-for="index in 10" :key="index" />
    </div>
    <div v-else class="movie-carousel__container">
      <ShowCard
        v-for="show in data"
        :key="show.id"
        :isLive="isLive"
        :show="show"
      />
    </div>
  </article>
</template>

<style lang="scss" scoped></style>
