<script setup lang="ts">
import { RouterView } from "vue-router";
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";
import Nabvar from "./components/moleculs/Nabvar.molecul.vue";

import Lenis from "lenis";
import { onBeforeMount, onMounted, provide, ref, watch } from "vue";

const scrollY = ref(0);

function handleScroll() {
  scrollY.value = window.scrollY;
}

onMounted(() => {
  const lenis = new Lenis({
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
    smoothWheel: true,
  });

  window.addEventListener("scroll", handleScroll);

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});

onBeforeMount(() => {
  window.removeEventListener("scroll", handleScroll);
});

provide("scrollY", scrollY);
</script>

<template>
  <Nabvar />
  <VueQueryDevtools />
  <RouterView />
</template>

<style lang="scss" scoped></style>
