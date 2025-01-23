<script setup lang="ts">
import { RouterLink } from "vue-router";
import { Home, Search } from "lucide-vue-next";

import "@/styles/molecul/navbar.molecul.scss";
</script>

<template>
  <nav class="nav">
    <!-- <img class="nav__logo" src="../../assets/images/logo.svg" alt="logo" /> -->

    <div class="nav__links">
      <RouterLink class="link" to="/"><Home />Home</RouterLink>
      <RouterLink class="link" to="/"><Home />Home</RouterLink>
      <RouterLink class="link" to="/"><Home />Home</RouterLink>
    </div>

    <div class="nav__search">
      <input class="input" type="text" placeholder="Explore new titles..." />
      <button class="cta"><Search color="white" /></button>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
