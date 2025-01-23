<script setup lang="ts">
import dayjs from "dayjs";
import { onMounted, onUnmounted, ref } from "vue";
import { useRoute } from "vue-router";

import MoviesCarousel from "@/components/moleculs/MoviesCarousel.molecul.vue";

import {
  useFetchSingleMovie,
  useFetchSingleMovieRecommendations,
  // useFetchSingleMovieVideos,
} from "@/infrastructure/queries/movies/useFetchMovies";

const route = useRoute();

let id = ref(route.params.id);

const { data: movie } = useFetchSingleMovie(id.value as string);
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
  <div>
    <main
      class="single-movie"
      :style="`--bg-image:url(${path}${movie?.backdrop_path})`"
    >
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

      <div :class="`single-movie__info ${shouldDisplayVideo}`">
        <div class="heading">
          <p>{{ movie?.tagline }}</p>
          <h1>{{ movie?.title }}</h1>
        </div>

        <div class="additional-info">
          <div>
            <p>
              {{ date }}
            </p>
            <p>{{ movie?.vote_average }}</p>
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
    <MoviesCarousel
      :data="recommendations!"
      :isLoading="recommendationsLoading"
      title="You may also like"
    />
  </div>
</template>

<style lang="scss" scoped>
.single-movie {
  padding: 2rem;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(0deg, #021526 25%, transparent),
    var(--bg-image);
  min-height: 50dvh;
  align-items: end;
  display: flex;
  position: relative;
  isolation: isolate;

  &__video {
    // display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-image: linear-gradient(0deg, #021526 25%, transparent);
    // z-index: -1;

    & > iframe {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: -1;
    }

    &::after {
      content: "";
    }
  }

  &__link {
    color: white;
    background: rgb(0, 0, 0, 0.5);
    padding: 1rem 1.5rem;
    border-radius: 0.25rem;
    width: fit-content;
    text-align: center;
    text-decoration: none;
    font-weight: 600;
    font-size: clamp(1rem, 4vw, 1.25rem);
    transition: all 0.3s;
    margin-top: 1rem;
    outline: 2px solid rgb(255, 255, 255, 0.1);
    border: 5px solid (255, 255, 255, 1);
    border-radius: 0.25rem;
    background: rgb(0, 0, 0, 0.1);
    backdrop-filter: blur(6px);
    color: white;
    font-weight: 600;

    &:hover {
      outline: 2px solid rgb(255, 255, 255, 0.5);
      background: rgb(0, 0, 0, 0.2);
    }
  }

  &__desc {
    font-size: clamp(1rem, 4vw, 1.25rem);
    z-index: 2;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 100ch;
    z-index: 2;
    transition: 0.2s ease opacity;

    &.true {
      // opacity: 0.1;
    }

    .heading {
      p {
        color: #f4f4f4;
        font-size: clamp(1rem, 3vw, 1.5rem);
        font-weight: 300;
        font-style: italic;
      }

      h1 {
        color: #f4f4f4;
        font-size: clamp(2.5rem, 6vw, 3rem);
        font-weight: 700;
      }
    }

    .additional-info {
      display: flex;
      align-items: center;
      gap: 2rem;
      font-size: clamp(1rem, 2vw, 1.25rem);

      & > div {
        display: flex;
        gap: 0.5rem;
      }

      &__genres {
        display: flex;

        & > p {
          outline: 1px solid rgb(255, 255, 255, 0.15);
          border-radius: 0.25rem;
          padding: 0.25rem 1rem;
          font-size: 1rem;
          background: rgb(0, 0, 0, 0.1);
          backdrop-filter: blur(6px);
          color: white;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
