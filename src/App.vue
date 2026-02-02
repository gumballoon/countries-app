<template>
  <main :class="mode">
    <the-header></the-header>
    <router-view name="home"></router-view>
    <router-view name="default"></router-view>
  </main>
</template>

<script setup>
import { computed, onBeforeMount } from "vue";
import { useStore } from "vuex";
const store = useStore();

import TheHeader from "./components/layout/TheHeader.vue";

const mode = computed(() => {
  return store.getters.mode;
});

onBeforeMount(() => {
  store.dispatch("fetchMode");
});
</script>
