<template>
  <loading-state v-if="isLoading"></loading-state>
  <div
    v-else
    class="w-full flex flex-wrap gap-12 items-center justify-around px-8"
  >
    <country-list-item
      v-for="country in displayedCountries"
      v-bind="country"
    ></country-list-item>
  </div>
</template>

<script setup>
import CountryListItem from "./CountryListItem.vue";

import { useStore } from "vuex";
const store = useStore();

import { ref, computed, watch } from "vue";
const isLoading = ref(true);
const displayedCountries = computed(() => {
  if (store.getters.filteredCountries) {
    return store.getters.filteredCountries;
  } else {
    return store.getters.countries;
  }
});

async function fetchAllCountries() {
  isLoading.value = true;
  await store.dispatch("fetchAllCountries");
  isLoading.value = false;
}

import { useRoute } from "vue-router";
import LoadingState from "../layout/LoadingState.vue";
const route = useRoute();

async function getCountries() {
  await fetchAllCountries();
  const region = route.query.region;
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  if (region && regions.includes(region)) {
    store.dispatch("filterCountriesByRegion", region);
  }
}

watch(
  () => route.query.region,
  async () => {
    await getCountries();
  },
);

getCountries();
</script>
