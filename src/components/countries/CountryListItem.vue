<template>
  <router-link :to="countryLink">
    <section
      class="bg-element rounded-element overflow-hidden hover:cursor-pointer hover:scale-105 transition-all duration-100"
    >
      <div :style="flag" class="w-90 h-55 flag" :aria-label="flags.alt"></div>
      <div class="px-6 pt-6 pb-10">
        <h2 class="text-xl font-extrabold mb-3">{{ name.common }}</h2>
        <p><span>Population:</span> {{ population.toLocaleString("en-US") }}</p>
        <p><span>Region:</span> {{ region }}</p>
        <p><span>Capital:</span> {{ capital[0] }}</p>
      </div>
    </section>
  </router-link>
</template>

<script>
export default {
  props: ["flags", "name", "population", "region", "capital", "cca2"],
  computed: {
    flag() {
      return { backgroundImage: `url(${this.flags.svg})` };
    },
    countryLink() {
      return "/" + this.cca2;
    },
  },
};
</script>

<style scoped>
span {
  font-weight: 600;
}
p {
  font-size: 1rem;
}
.flag {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
