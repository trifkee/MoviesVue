<script setup lang="ts">
import dayjs from "dayjs";
import { onMounted, onUnmounted, ref } from "vue";
import { useRoute } from "vue-router";

import MoviesCarousel from "@/components/moleculs/MoviesCarousel.molecul.vue";
import CardScoreAtom from "@/components/atoms/CardScore.atom.vue";

import {
  useFetchSingleMovie,
  useFetchSingleMovieCredits,
  useFetchSingleMovieImages,
  useFetchSingleMovieRecommendations,
  // useFetchSingleMovieVideos,
} from "@/infrastructure/queries/movies/useFetchMovies";

import "@/styles/views/singleMovie.view.scss";
import SingleMovieSkeletonAtom from "@/components/atoms/SingleMovieSkeleton.atom.vue";
import type { SingleMovieCastType } from "@/lib/types/movies";
import ActorCardSmallAtom from "@/components/atoms/ActorCardSmall.atom.vue";
import MovieTabsOrganism from "@/components/organism/MovieTabs.organism.vue";

const route = useRoute();

let id = ref(route.params.id);

const { data: movie, isLoading: isMovieLoading } = useFetchSingleMovie(
  id.value as string
);
const { data: recommendations, isLoading: recommendationsLoading } =
  useFetchSingleMovieRecommendations(id.value as string);
// const { data: videos } = useFetchSingleMovieVideos(id.value as string);

const shouldDisplayVideo = ref(false);

let timeout: number;

onMounted(() => {
  if (movie?.value) {
    document.title = movie.value.title;
  }

  timeout = setTimeout(() => {
    shouldDisplayVideo.value = true;
  }, 2000);
});

onUnmounted(() => {
  clearTimeout(timeout);
});

const path = import.meta.env.VITE_TMDB_IMAGE_URL;

const date = dayjs(movie?.value?.release_date).format("DD.MM.YYYY");
</script>

<template>
  <SingleMovieSkeletonAtom v-if="isMovieLoading" />
  <main
    v-else
    class="single-movie"
    :style="`--bg-image:url(${path}${movie?.backdrop_path})`"
  >
    <div :class="`single-movie__info ${shouldDisplayVideo}`">
      <div class="heading">
        <p>{{ movie?.tagline }}</p>
        <h1>{{ movie?.title }}</h1>
      </div>

      <div class="additional-info">
        <div class="additional-info__info">
          <p>
            {{ date }}
          </p>
          <CardScoreAtom :voteCount="movie?.vote_average" />
        </div>
        <div class="additional-info__genres">
          <p v-for="genre in movie?.genres" :key="genre.id">
            {{ genre.name }}
          </p>
        </div>
      </div>

      <p class="single-movie__desc">{{ movie?.overview }}</p>

      <a
        class="single-movie__link"
        v-if="movie?.homepage"
        :href="movie?.homepage"
        >Check out</a
      >
    </div>
  </main>
  <MovieTabsOrganism />

  <MoviesCarousel
    :data="recommendations!"
    :isLoading="recommendationsLoading"
    title="You may also like"
  />
</template>

<!-- <div v-if="!videos?.[videos.length - 2]?.key" class="single-movie__video">
        <iframe
          id="ytplayer"
          type="text/html"
          :src="`https://www.youtube.com/embed/${
            videos?.[videos.length - 2]?.key
          }?autoplay=1&controls=0&disablekb=1&modestbranding=1&color=white`"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div> -->
