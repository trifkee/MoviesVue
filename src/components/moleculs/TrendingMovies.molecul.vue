<script setup lang="ts">
import { ref, watch } from "vue";
import { RouterLink } from "vue-router";

import type { MovieType } from "@/lib/types/movies";

import "@/styles/molecul/trendingMovie.molecul.scss";
import { useFetchTrendingMovies } from "@/infrastructure/queries/movies/useFetchMovies";

const path = import.meta.env.VITE_TMDB_IMAGE_URL;

const { data: trendingMovies, isLoading: isLoadingTrending } =
  useFetchTrendingMovies();

// let singleMovie = ref<MovieType>({
//   adult: false,
//   backdrop_path: "",
//   genre_ids: [],
//   id: 0,
//   original_language: "",
//   original_title: "",
//   overview: "",
//   popularity: 0,
//   poster_path: "",
//   release_date: "",
//   title: "",
//   video: false,
//   vote_average: 0,
//   vote_count: 0,
// });

// watch(trendingMovies, () => {
//   if (trendingMovies.value) {
//     singleMovie.value =
//       trendingMovies?.value?.[
//         Math.floor(Math.random() * trendingMovies.value?.length - 1)
//       ];
//   }
// });
</script>

<template>
  <div class="trending-carousel">
    <article
      v-for="singleMovie in trendingMovies"
      v
      class="trending-movie"
      :style="`--bg-image:url(${path}${singleMovie?.backdrop_path})`"
    >
      <div class="trending-movie__info">
        <h2>{{ singleMovie.title }}</h2>
        <p>{{ singleMovie.overview }}</p>

        <div class="links">
          <RouterLink :to="`/movies/${singleMovie.id}`" class="movie"
            >Go to Movie</RouterLink
          >
          <!-- <RouterLink to="#" class="website">Check original page</RouterLink> -->
        </div>
      </div>

      <img
        class="trending-movie__poster"
        :src="`${path}${singleMovie.poster_path}`"
        :alt="singleMovie.title"
      />
    </article>
  </div>
</template>

<style lang="scss" scoped></style>
