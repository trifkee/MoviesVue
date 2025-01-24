<script setup lang="ts">
import type { GenreType } from "@/lib/types/movies";

defineProps<{
  genre: GenreType;
}>();
</script>

<template>
  <article class="genre-card">
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

  &.active {
    outline: 2px solid rgb(110, 172, 218, 0.35);
    background-image: linear-gradient(45deg, #042746, #092136);
  }

  &:hover {
    background: white;
    color: black;
    font-weight: 600;
  }
}
</style>
