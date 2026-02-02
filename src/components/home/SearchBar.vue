<template>
  <form
    @submit.prevent="submitForm"
    class="bg-element rounded-element flex px-10 py-6 lg:w-150"
  >
    <IconSearch class="icon mr-8" />
    <div>
      <label for="search" class="hidden">Search for a country</label>
      <input
        type="text"
        id="search"
        v-model.trim="search"
        placeholder="Search for a country..."
        autocomplete="off"
        class="appearance-none outline-0"
        @input="searchName"
      />
    </div>
  </form>
</template>

<script setup>
import IconSearch from "../../assets/images/icon-search.svg";

import { useStore } from "vuex";
const store = useStore();

import { ref } from "vue";
const search = ref("");

function searchName() {
  store.dispatch("filterCountriesByName", search.value);
}
</script>
