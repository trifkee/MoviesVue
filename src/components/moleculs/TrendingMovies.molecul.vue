<script setup lang="ts">
// import ButtonAtom from "@/components/atoms/Button.atom.vue";

import { useFetchTrendingMovies } from "@/infrastructure/queries/movies/useFetchMovies";

import { ChevronRight } from "lucide-vue-next";

import "@/styles/molecul/trendingMovie.molecul.scss";
import ButtonAtom from "@/components/atoms/Button.atom.vue";

const path = import.meta.env.VITE_TMDB_IMAGE_URL;

const { data: trendingMovies } = useFetchTrendingMovies();

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
      class="trending-movie"
      :key="singleMovie.id"
      :style="`--bg-image:url(${path}${singleMovie?.backdrop_path})`"
    >
      <div class="trending-movie__info">
        <h2>{{ singleMovie.title }}</h2>
        <p>{{ singleMovie.overview }}</p>

        <div class="links">
          <ButtonAtom class="movie" :to="`/movies/${singleMovie.id}`"
            >Go to movie <ChevronRight class="svg" />
          </ButtonAtom>
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
