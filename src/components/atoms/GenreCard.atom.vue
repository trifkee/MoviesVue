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
  min-height: 4rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  outline: 2px solid rgb(110, 172, 218, 0.35);
  box-shadow: 0 12px 150px -2px rgb(110, 172, 218, 0);
  background-image: linear-gradient(45deg, #042746, #092136);
  color: white;
  font-weight: 800;
  transition: 0.6s ease all;
  cursor: pointer;

  &:hover {
    box-shadow: 0 12px 20px 10px rgb(110, 172, 218, 0.2);
    background-image: linear-gradient(
      45deg,
      rgb(4, 39, 70, 0.5),
      rgb(9, 33, 54, 0.2)
    );
  }
}
</style>
