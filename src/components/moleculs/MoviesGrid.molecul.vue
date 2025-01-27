<script setup lang="ts">
import {
  useFetchMoviesWithGenre,
  useFetchMoviesWithGenresInf,
} from "@/infrastructure/queries/movies/useFetchMovies";
import { useRoute } from "vue-router";
import MovieCardAtom from "../atoms/MovieCard.atom.vue";
import { computed, onBeforeMount, onMounted, ref, watch } from "vue";
import MovieCardSkeletonAtom from "../atoms/MovieCardSkeleton.atom.vue";

const route = useRoute();
const genreId = ref(route.query.genre as string);

let observer: IntersectionObserver | null;

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

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        console.log("Uso...");
        fetchNextPage();
      }
    },
    {
      rootMargin: "-45% 0px 0px 0px",
    }
  );

  observer.observe(loaderRef.value);
});

onBeforeMount(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <div class="card-grid" :style="`${isFetching ? 'max-height:20vh;' : ''}`">
    <MovieCardSkeletonAtom v-if="isFetching" v-for="i in 16" />
    <MovieCardAtom v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
  <div ref="loaderRef" class="loading">
    <span class="loader"></span>
  </div>
</template>

<style lang="scss" scoped>
.card-grid {
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
