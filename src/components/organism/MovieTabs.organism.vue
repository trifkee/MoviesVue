<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, type Ref } from "vue";

import ActorCardSmallAtom from "../atoms/ActorCardSmall.atom.vue";

import {
  useFetchSingleMovieCredits,
  useFetchSingleMovieImages,
} from "@/infrastructure/queries/movies/useFetchMovies";

const route = useRoute();

const tabs = [
  {
    id: 0,
    name: "gallery",
  },
  {
    id: 1,
    name: "cast",
  },
];

const tab: Ref<TabType> = ref("gallery");

type TabType = "gallery" | "cast";

function handleTabChange(selectedTab: TabType) {
  switch (selectedTab) {
    case "gallery":
      tab.value = "gallery";
      break;
    case "cast":
      tab.value = "cast";
      break;
    default:
      tab.value = "gallery";
      break;
  }
}

const { data: credits } = useFetchSingleMovieCredits(route.params.id as string);
const { data: images } = useFetchSingleMovieImages(route.params.id as string);

const path = import.meta.env.VITE_TMDB_IMAGE_URL;
</script>

<template>
  <div class="container">
    <div class="tabs">
      <div
        :key="ntab.id"
        @click="handleTabChange(ntab.name as TabType)"
        :class="`tabs__tab ${ntab.name === tab && 'active'}`"
        v-for="ntab in tabs"
      >
        {{ ntab.name }}
      </div>
    </div>

    <div v-if="tab === 'gallery'" class="single-movie__more">
      <div class="images">
        <img
          v-for="image in images"
          :key="image.file_path"
          :src="`${path}${image.file_path}`"
          alt=""
        />
      </div>
    </div>

    <div v-else class="actors">
      <div class="actors__container">
        <ActorCardSmallAtom
          v-for="actor in credits"
          :actor="actor"
          :key="actor.id"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin: 2rem 0;
  height: 305px;
}

.images {
  display: flex;
  gap: 1rem;
  overflow-y: auto;
  scroll-snap-type: x mandatory;
  scroll-padding-inline: 2rem;
  padding: 0 2rem;

  & > * {
    border-radius: 0.25rem;
    width: 24rem;
    scroll-snap-align: start;
  }

  &::-webkit-scrollbar {
    display: none;
  }
}

.tabs {
  padding: 0 2rem;
  font-size: clamp(1rem, 4vw, 1.25rem);
  display: flex;
  align-items: center;
  gap: 1rem;

  &__tab {
    cursor: pointer;
    border-radius: 0.25rem;
    min-width: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    background-color: rgb(0, 0, 0, 0.2);
    border: none;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.2s ease;
    transition: all 0.3s;
    //

    color: white;
    background: rgb(0, 0, 0, 0.5);
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

    &.active {
      outline: 2px solid rgb(255, 255, 255, 1);
      //   border-bottom: 2px solid rgb(105, 159, 240);
    }
  }
}

.actors {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &__title {
    color: white;
    font-weight: 600;
    font-size: clamp(1.25rem, 2vw, 1.5rem);
    padding-inline: 2rem;
  }

  &__container {
    display: flex;
    gap: 1rem;
    overflow-y: auto;
    scroll-snap-type: x mandatory;
    scroll-padding-inline: 2rem;
    padding: 2px 2rem;

    & > * {
      scroll-snap-align: start;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
