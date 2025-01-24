<script setup lang="ts">
import { RouterLink } from "vue-router";

defineProps({
  to: String,
});
</script>

<template>
  <RouterLink :to="`${to ?? '#'}`" class="button">
    <slot></slot>
  </RouterLink>
</template>

<style lang="scss" scoped>
a {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
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
  transform: translate(0);
  font-weight: 600;

  &:is(.movie) {
    background: rgb(255, 255, 255, 0.1);
  }

  &:hover {
    & > svg {
      display: block;
      transform: translateX(42px);
    }

    &:is(.movie) {
      background: rgb(255, 255, 255, 0.3);
    }

    outline: 2px solid rgb(255, 255, 255, 0.5);
    background: rgb(0, 0, 0, 0.2);
  }
}
</style>
