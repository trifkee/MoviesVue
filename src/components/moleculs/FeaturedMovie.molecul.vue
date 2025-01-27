<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from "vue";

import type { MovieType } from "@/lib/types/movies";

import { ChevronLeft, ChevronRight } from "lucide-vue-next";

import "@/styles/molecul/featuredMovie.molecul.scss";

const props = defineProps<{
  popularMovies: MovieType[];
  popularLoading: boolean;
}>();

const path = import.meta.env.VITE_TMDB_IMAGE_URL;
let interval: number;

const featuredMovie = ref<MovieType | null>(null);
const shouldUpdate = ref(false);
const currIndex = ref(0);

const slicedMovies = computed(() => props.popularMovies?.slice(0, 7));
const bgImageStyle = computed(() => {
  return `--bg-image:url(${path}${
    featuredMovie.value?.backdrop_path
  }); opacity: ${featuredMovie.value ? 1 : 0};`;
});

function handleChangeFeaturedMovie() {
  if (featuredMovie.value === null) {
    featuredMovie.value = slicedMovies.value[0];
  }

  interval = setInterval(() => {
    if (slicedMovies.value) {
      const nextIndex = (currIndex.value + 1) % slicedMovies.value.length;
      featuredMovie.value = slicedMovies.value[nextIndex];
      currIndex.value = nextIndex;
    }
  }, 5000);
}

function handleChangeMovieLeft() {
  if (!slicedMovies.value) return;

  if (currIndex.value > 0) {
    const prevIndex = currIndex.value - 1;
    featuredMovie.value = slicedMovies.value?.[prevIndex];
    currIndex.value = prevIndex;
    clearInterval(interval);
    handleChangeFeaturedMovie();
  } else {
    const lastIndex = slicedMovies.value.length - 1;
    featuredMovie.value = slicedMovies.value[lastIndex];
    currIndex.value = lastIndex;
    clearInterval(interval);
    handleChangeFeaturedMovie();
  }
}

function handleChangeMovieRight() {
  if (!slicedMovies.value) return;

  if (currIndex.value < slicedMovies.value.length - 1) {
    const nextIndex = currIndex.value + 1;
    featuredMovie.value = slicedMovies.value?.[nextIndex];
    currIndex.value = nextIndex;
    clearInterval(interval);
    handleChangeFeaturedMovie();
  } else {
    currIndex.value = 0;
    featuredMovie.value = slicedMovies.value?.[0];
    clearInterval(interval);
    handleChangeFeaturedMovie();
  }
}

watch(() => props.popularMovies, handleChangeFeaturedMovie);

onMounted(() => {
  handleChangeFeaturedMovie();
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <article :style="bgImageStyle" class="featured-movie">
    <div class="featured-movie__chevrons">
      <div class="left" @click="handleChangeMovieLeft">
        <ChevronLeft />
      </div>
      <div class="right" @click="handleChangeMovieRight">
        <ChevronRight />
      </div>
    </div>

    <div :class="`featured-movie__info ${shouldUpdate ? 'fade' : ''}`">
      <img
        class="poster"
        :src="`${path}${featuredMovie?.poster_path}`"
        alt=""
      />

      <div class="info">
        <h2>{{ featuredMovie?.title }}</h2>
        <p>{{ featuredMovie?.overview }}</p>
      </div>
    </div>

    <div class="dots">
      <div
        v-for="movie in slicedMovies"
        :key="movie.id"
        :class="movie.id === featuredMovie?.id ? 'active' : ''"
      ></div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.featured-movie {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
