<script setup lang="ts">
import { RouterLink } from "vue-router";
import { Bookmark, Search, UserCircle } from "lucide-vue-next";

import "@/styles/molecul/navbar.molecul.scss";
import { inject } from "vue";

const scrollY = inject("scrollY", 0);
</script>

<template>
  <nav ref="navRef" :class="`nav ${scrollY > 300 ? 'scrolled' : ''}`">
    <!-- <img class="nav__logo" src="../../assets/images/logo.svg" alt="logo" /> -->

    <div class="nav__links">
      <RouterLink class="link" to="/">Home</RouterLink>
      <RouterLink class="link" to="/">Movies</RouterLink>
      <RouterLink class="link" to="/">TV Series</RouterLink>
      <!-- <RouterLink class="link" to="/"></RouterLink> -->
    </div>

    <div class="ctas">
      <RouterLink to="/search">
        <Search :size="28" stroke-width="1.5" color="white" />
      </RouterLink>
      <button class="bookmar">
        <Bookmark :size="28" stroke-width="1.5" color="white" />
      </button>
      <button class="user">
        <UserCircle :size="28" stroke-width="1.5" color="white" />
      </button>
    </div>

    <div class="nav__search">
      <input class="input" type="text" placeholder="Explore new titles..." />
      <button class="cta"><Search color="white" /></button>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
