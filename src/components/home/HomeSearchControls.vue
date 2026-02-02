<template>
  <div
    class="px-6 my-8 flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center"
  >
    <search-bar></search-bar>
    <filter-by-region></filter-by-region>
  </div>
</template>

<script>
import FilterByRegion from "./FilterByRegion.vue";
import SearchBar from "./SearchBar.vue";

export default {
  components: { FilterByRegion, SearchBar },
};
</script>
