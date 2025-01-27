<script setup lang="ts">
// Imports
import { onMounted, onUnmounted, ref, watch } from "vue";

import FeaturedMovie from "@/components/moleculs/FeaturedMovie.molecul.vue";
import MoviesCarousel from "@/components/moleculs/MoviesCarousel.molecul.vue";
import GenresCarousel from "@/components/moleculs/GenresCarousel.molecul.vue";
import ShowCarousel from "@/components/moleculs/ShowCarousel.molecul.vue";
import TrendingMoviesMolecul from "@/components/moleculs/TrendingMovies.molecul.vue";

import {
  useFetchMoviesGenres,
  useFetchPopularMovies,
} from "@/infrastructure/queries/movies/useFetchMovies";
import {
  useFetchCurrentlyOnAirShows,
  useFetchTopRatedShows,
} from "@/infrastructure/queries/shows/useFetchShows";

import type { MovieType } from "@/lib/types/movies";

// Logic
const { data: topRatedShows, isLoading: topShowsLoading } =
  useFetchTopRatedShows();

const { data: popularMovies, isLoading: popularLoading } =
  useFetchPopularMovies();

const { data: onAirShows, isLoading: isLoadingOnAir } =
  useFetchCurrentlyOnAirShows();

const { data: movieGenres, isLoading: isMovieGenresLoading } =
  useFetchMoviesGenres();
</script>

<template>
  <FeaturedMovie
    :popularLoading="popularLoading"
    :popularMovies="popularMovies ?? []"
  />

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

    <TrendingMoviesMolecul />

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
  gap: 2rem;
  padding-bottom: 2rem;
}
</style>
