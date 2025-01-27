<script setup lang="ts">
import MovieCardAtom from "@/components/atoms/MovieCard.atom.vue";
import FeaturedMovieMolecul from "@/components/moleculs/FeaturedMovie.molecul.vue";
import GenresCarouselMolecul from "@/components/moleculs/GenresCarousel.molecul.vue";
import MoviesCarouselMolecul from "@/components/moleculs/MoviesCarousel.molecul.vue";
import MoviesGridMolecul from "@/components/moleculs/MoviesGrid.molecul.vue";

import {
  useFetchMoviesGenres,
  useFetchMoviesWithGenre,
  useFetchPopularMovies,
} from "@/infrastructure/queries/movies/useFetchMovies";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const { query } = useRoute();

const genreId = ref(query.genre ?? null);

const { data: popularMovies, isLoading: popularLoading } =
  useFetchPopularMovies();

const { data: movieGenres, isLoading: isMovieGenresLoading } =
  useFetchMoviesGenres();
</script>

<template>
  <FeaturedMovieMolecul
    :popularMovies="popularMovies ?? []"
    :popularLoading="popularLoading"
  />

  <div class="carousels">
    <MoviesCarouselMolecul
      :data="popularMovies!"
      :isLoading="popularLoading"
      title="Popular Movies."
    />
    <GenresCarouselMolecul
      title="Movies Genres."
      :data="movieGenres"
      :isLoading="isMovieGenresLoading"
    />
  </div>
  <MoviesGridMolecul />
</template>

<style lang="scss" scoped>
.carousels {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 2rem;
}
</style>
