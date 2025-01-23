<script setup lang="ts">
import { RouterView } from "vue-router";
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";
import Nabvar from "./components/moleculs/Nabvar.molecul.vue";
</script>

<template>
  <Nabvar />
  <VueQueryDevtools />
  <RouterView />
</template>

<style lang="scss" scoped></style>
