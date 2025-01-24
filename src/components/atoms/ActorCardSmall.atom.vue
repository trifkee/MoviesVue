<script setup lang="ts">
import type { SingleMovieCastType } from "@/lib/types/movies";

import "@/styles/atoms/actorCard.atom.scss";

defineProps<{
  actor: SingleMovieCastType;
}>();

const path = import.meta.env.VITE_TMDB_IMAGE_URL;
</script>

<template>
  <article
    class="actor-card small"
    :style="`
    --bg-image: url(${path}${actor.profile_path})
  `"
  >
    <p class="actor-card__name">
      {{ actor.name }}
    </p>
    <p class="actor-card__character">{{ actor.character }}</p>
  </article>
</template>

<style lang="scss" scoped></style>
