<script setup lang="ts">
import {
  useFetchMoviesWithGenre,
  useFetchMoviesWithGenresInf,
} from "@/infrastructure/queries/movies/useFetchMovies";
import { useRoute } from "vue-router";
import MovieCardAtom from "../atoms/MovieCard.atom.vue";
import { computed, onMounted, ref, watch } from "vue";

const route = useRoute();
const genreId = ref(route.query.genre as string);

const {
  data: genreMoviesInf,
  fetchNextPage,
  isFetching,
} = useFetchMoviesWithGenresInf(genreId);

watch(
  () => route.query.genre,
  (newGenre) => {
    genreId.value = newGenre as string;
  },
  { immediate: true }
);

const movies = computed(() =>
  genreMoviesInf.value?.pages.flatMap((n) => n.data.results)
);

const loaderRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!loaderRef.value) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !isFetching.value) {
        fetchNextPage();
      }
    },
    {
      rootMargin: "45% 0px 0px 0px",
    }
  );

  observer.observe(loaderRef.value);
});
</script>

<template>
  <div class="movie-grid">
    <MovieCardAtom v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
  <div ref="loaderRef" class="loading"><span class="loader"></span></div>
  <RouterView :key="$route.fullPath" />
</template>

<style lang="scss" scoped>
.movie-grid {
  padding: 0 2rem;
  padding-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: 1rem;

  & > * {
    width: 100% !important;

    & > * {
      width: inherit;
    }
  }
}

.loading {
  display: flex;
  place-content: center;
  padding-bottom: 2rem;
}
.loader {
  width: 32px;
  aspect-ratio: 1;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid #fff;
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
