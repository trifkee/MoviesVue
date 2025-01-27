<script setup lang="ts">
import type { GenreType } from "@/lib/types/movies";
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

// Props
defineProps<{
  genre: GenreType;
}>();

// Router and route
const router = useRouter();
const route = useRoute();

const genreId = ref(route.query.genre ?? null);

watch(
  () => route.query.genre,
  (newGenreId, _oldGenreId) => {
    genreId.value = newGenreId;
  }
);

// Function to update the genre query parameter
function handleQueryGenreParam(genre: string) {
  router.push({ query: { genre } });
}
</script>

<template>
  <article
    @click="handleQueryGenreParam(genre.id)"
    :class="`genre-card 
      ${genre.id == genreId ? 'active' : ''}`"
  >
    <p class="genre-card__title">{{ genre.name }}</p>
  </article>
</template>

<style lang="scss" scoped>
.genre-card {
  min-width: 12rem;
  border-radius: 100rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1rem;
  color: white;
  cursor: pointer;
  outline: 1px solid rgb(255, 255, 255, 0.1);
  &.active {
    outline: 1px solid white;
    // background-image: linear-gradient(45deg, #042746, #092136);
  }

  &:hover {
    background: white;
    color: black;
    font-weight: 600;
  }
}
</style>
