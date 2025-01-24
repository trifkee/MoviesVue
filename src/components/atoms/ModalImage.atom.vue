<script setup lang="ts">
defineProps({
  img: {
    type: String,
    default: "https://image.tmdb.org/t/p/w500//bNlA8L2yQ7e9BKsL8AiB30nAiBc.jpg",
    required: true,
  },
  alt: String,
});
</script>

<template>
  <div>
    <img :src="img" :alt="alt" />
  </div>
</template>

<style lang="scss" scoped></style>
