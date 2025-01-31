<script setup lang="ts">
import { computed, inject } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { Bookmark, Search, UserCircle } from "lucide-vue-next";

import "@/styles/molecul/navbar.molecul.scss";
import { routes } from "@/lib/constants/mainRoutes";

const scrollY = inject("scrollY", 0);

const route = useRoute();

const currentRoute = computed(() =>
  routes.findIndex((n) => n.name.toLowerCase() === route.name)
);
</script>

<template>
  <nav ref="navRef" :class="`nav ${scrollY > 300 ? 'scrolled' : ''}`">
    <!-- <img class="nav__logo" src="../../assets/images/logo.svg" alt="logo" /> -->

    <div class="nav__links">
      <RouterLink
        v-for="link in routes"
        :key="link.path"
        :class="`link  ${link.id === currentRoute ? 'active' : ''}`"
        :to="link.path"
        >{{ link.name }}</RouterLink
      >
      <!-- <RouterLink class="link" to="/"></RouterLink> -->
    </div>

    <div class="ctas">
      <RouterLink to="/search">
        <Search :size="28" stroke-width="1.5" color="white" />
      </RouterLink>
      <button class="bookmar">
        <Bookmark :size="28" stroke-width="1.5" color="white" />
      </button>

      <RouterLink class="user" to="/login">
        <UserCircle :size="28" stroke-width="1.5" color="white" />
      </RouterLink>
    </div>

    <div class="nav__search">
      <input class="input" type="text" placeholder="Explore new titles..." />
      <button class="cta"><Search color="white" /></button>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
