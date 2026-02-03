<template>
  <header class="bg-element px-6 py-10 flex justify-between items-center">
    <router-link to="/" @click="resetFilter">
      <h1 class="text-[1.5rem] font-bold hover:cursor-pointer">
        Where in the world?
      </h1>
    </router-link>
    <div class="flex items-center cursor-pointer" @click="toggleMode">
      <IconDarkMode v-if="mode === 'light'" class="icon" />
      <IconLightMode v-else class="icon icon-dark" />
      <span class="text-lg capitalize font-semibold ml-4"
        >{{ switchToMode }} Mode</span
      >
    </div>
  </header>
</template>

<script setup>
import IconDarkMode from "../../assets/images/icon-dark-mode.svg";
import IconLightMode from "../../assets/images/icon-light-mode.svg";

import { useStore } from "vuex";
const store = useStore();

import { computed } from "vue";
const mode = computed(() => {
  return store.getters.mode;
});
const switchToMode = computed(() => {
  if (store.getters.mode === "dark") return "light";
  else return "dark";
});
function toggleMode() {
  store.dispatch("toggleMode");
}
function resetFilter() {
  store.dispatch("resetFilter");
}
</script>
