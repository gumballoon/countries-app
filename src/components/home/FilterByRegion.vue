<template>
  <div class="relative">
    <div
      class="flex items-center justify-between bg-element rounded-element px-8 py-6 w-80 hover:cursor-pointer"
      @click="toggleDropdown"
    >
      <p>Filter by Region</p>
      <IconArrowDown class="icon-sm" />
    </div>
    <div
      v-show="isDropdownVisible"
      class="bg-element rounded-element flex flex-col px-8 py-6 top-20 gap-2 w-80 absolute z-100"
    >
      <router-link
        to="/?region=Africa"
        @click="setSelectedRegion"
        :class="{ 'font-bold': 'Africa' === selectedRegion }"
        >Africa</router-link
      >
      <router-link
        to="/?region=Americas"
        @click="setSelectedRegion"
        :class="{ 'font-bold': 'Americas' === selectedRegion }"
        >Americas</router-link
      >
      <router-link
        to="/?region=Asia"
        @click="setSelectedRegion"
        :class="{ 'font-bold': 'Asia' === selectedRegion }"
        >Asia</router-link
      >
      <router-link
        to="/?region=Europe"
        @click="setSelectedRegion"
        :class="{ 'font-bold': 'Europe' === selectedRegion }"
        >Europe</router-link
      >
      <router-link
        to="/?region=Oceania"
        @click="setSelectedRegion"
        :class="{ 'font-bold': 'Oceania' === selectedRegion }"
        >Oceania</router-link
      >
    </div>
  </div>
</template>

<script setup>
import IconArrowDown from "../../assets/images/icon-arrow-down.svg";

import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
import { useStore } from "vuex";
const store = useStore();

const isDropdownVisible = ref(false);
function toggleDropdown() {
  isDropdownVisible.value = !isDropdownVisible.value;
}

const selectedRegion = ref(route.query.region);
function setSelectedRegion(event) {
  const region = event.target.textContent;
  if (selectedRegion.value === region) {
    selectedRegion.value = null;
    store.dispatch("resetFilter");
    router.replace("/");
  } else {
    selectedRegion.value = region;
  }
}

watch(route, (newRoute, oldRoute) => {
  if (newRoute !== oldRoute) {
    selectedRegion.value = newRoute.query.region;
  }
});
</script>

<style scoped>
a:hover {
  font-weight: 600;
  cursor: pointer;
}
</style>
