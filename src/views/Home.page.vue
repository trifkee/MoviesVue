<script setup lang="ts">
import { onUnmounted, ref, watch } from "vue";

import FeaturedMovie from "@/components/moleculs/FeaturedMovie.molecul.vue";
import MoviesCarousel from "@/components/moleculs/MoviesCarousel.molecul.vue";

import {
  useFetchMoviesGenres,
  useFetchPopularMovies,
} from "@/infrastructure/queries/movies/useFetchMovies";

import type { MovieType } from "@/lib/types/movies";
import {
  useFetchCurrentlyOnAirShows,
  useFetchTopRatedShows,
} from "@/infrastructure/queries/shows/useFetchShows";
import GenresCarousel from "@/components/moleculs/GenresCarousel.molecul.vue";
import ShowCarousel from "@/components/moleculs/ShowCarousel.molecul.vue";

const featuredMovie = ref<MovieType | null>(null);

const { data: popularMovies, isLoading: popularLoading } =
  useFetchPopularMovies();

const { data: topRatedShows, isLoading: topShowsLoading } =
  useFetchTopRatedShows();

const { data: onAirShows, isLoading: isLoadingOnAir } =
  useFetchCurrentlyOnAirShows();

const { data: movieGenres, isLoading: isMovieGenresLoading } =
  useFetchMoviesGenres();

watch(popularMovies, handleChangeFeaturedMovie);

let interval: number;

function handleChangeFeaturedMovie() {
  if (!featuredMovie.value) {
    featuredMovie.value = popularMovies.value![0];
    return handleChangeFeaturedMovie();
  }

  return (interval = setInterval(() => {
    if (popularMovies.value) {
      const randInt = Math.floor(Math.random() * popularMovies.value.length);

      featuredMovie.value = popularMovies.value[randInt];
    }
  }, 5000));
}

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <FeaturedMovie :movie="featuredMovie" :isLoading="popularLoading" />

  <div class="carousels">
    <MoviesCarousel
      :data="popularMovies!"
      :isLoading="popularLoading"
      title="Popular Movies."
    />
    <GenresCarousel
      title="Movies Genres."
      :data="movieGenres"
      :isLoading="isMovieGenresLoading"
    />

    <ShowCarousel
      :data="topRatedShows!"
      :isLoading="topShowsLoading"
      title="Top Shows Now."
    />

    <ShowCarousel
      :data="onAirShows!"
      :isLoading="isLoadingOnAir"
      title="Now on Air."
      :is-live="true"
    />
  </div>
</template>

<style lang="scss" scoped>
.carousels {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-bottom: 2rem;
}
</style>
