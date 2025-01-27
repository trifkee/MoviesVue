<script setup lang="ts">
import "@/styles/atoms/movieCard.atom.scss";
</script>

<template>
  <article class="movie-card">
    <div class="movie-card__score"></div>
    <div class="movie-card__title"></div>
  </article>
</template>

<style lang="scss" scoped>
.movie-card {
  height: clamp(18rem, 10vw, 24rem);
  aspect-ratio: 3/4;
  border-radius: 0.5rem;
  background: rgb(110, 172, 218, 0.05);
  animation: skeletonPulse 1s both infinite;
  position: relative;

  &__score {
    position: absolute;
    height: 3.5rem;
    width: 3.5rem !important;
    border-radius: 100%;
    top: 0.5rem;
    right: 0.5rem;
    background: rgb(110, 172, 218, 0.05);
    animation: skeletonPulse 1s both infinite;
    animation-delay: 0.1s;

    &::after {
      display: none;
    }
  }
}

@keyframes skeletonPulse {
  0% {
    background-color: rgb(110, 172, 218, 0.05);
  }
  50% {
    background-color: rgb(110, 172, 218, 0.1);
  }
  100% {
    background-color: rgb(110, 172, 218, 0.05);
  }
}
</style>
