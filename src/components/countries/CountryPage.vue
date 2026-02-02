<template>
  <loading-state v-if="isLoading"></loading-state>
  <div v-else-if="country" class="w-full py-12 px-8">
    <base-button @click="router.back()">
      <IconArrowLeft class="icon" />
      <span>Back</span>
    </base-button>
    <div class="mt-20 flex flex-col gap-16 xl:grid xl:grid-cols-2 xl:gap-24">
      <img
        :src="country.flags.svg"
        :alt="country.flags.alt"
        class="max-w-full max-h-110 mx-auto lg:col-span-1"
      />
      <div class="text-left lg:col-span-1">
        <h1 class="font-bold text-3xl mb-10">{{ country.name.common }}</h1>
        <div class="md:flex gap-16">
          <div class="flex flex-col gap-4 mb-12">
            <p class="font-normal">
              Native Name:
              <span class="font-extralight">{{ nativeName }}</span>
            </p>
            <p class="font-normal">
              Population:
              <span class="font-extralight">{{
                country.population.toLocaleString("en-US")
              }}</span>
            </p>
            <p class="font-normal">
              Region:
              <span class="font-extralight">{{ country.region }}</span>
            </p>
            <p class="font-normal">
              Sub Region:
              <span class="font-extralight">{{ country.subregion }}</span>
            </p>
            <p class="font-normal">
              Capital:
              <span class="font-extralight">{{ country.capital[0] }}</span>
            </p>
          </div>
          <div class="flex flex-col gap-4 mb-12">
            <p class="font-normal">
              Top Level Domain:
              <span class="font-extralight">{{ country.tld[0] }}</span>
            </p>
            <p class="font-normal">
              Currencies:
              <span class="font-extralight">{{ currencies }}</span>
            </p>
            <p class="font-normal">
              Languages:
              <span class="font-extralight">{{ languages }}</span>
            </p>
          </div>
        </div>
        <h2 class="font-semibold text-xl mb-6">Border Countries:</h2>
        <div class="w-full flex flex-wrap gap-4 justify-around">
          <router-link v-for="border in country.borders" :to="`${border}`">
            <base-button>
              <span class="text-sm">{{ border }}</span>
            </base-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconArrowLeft from "../../assets/images/icon-arrow-left.svg";

import { ref, computed, watch } from "vue";
import { useStore } from "vuex";
const store = useStore();
import { useRouter, useRoute } from "vue-router";
const router = useRouter();

const props = defineProps(["code"]);
const isLoading = ref("false");
const country = ref(null);

async function fetchCountry(code) {
  isLoading.value = true;
  await store.dispatch("fetchCountry", code);
  country.value = store.getters.selectedCountry;
  isLoading.value = false;
}

fetchCountry(props.code);

watch(
  () => props.code,
  async (newCode, oldCode) => {
    if (newCode !== oldCode) {
      await fetchCountry(newCode);
    }
  },
);

const nativeName = computed(() => {
  if (country.value) {
    const firstKey = Object.keys(country.value.name.nativeName)[0];
    return country.value.name.nativeName[firstKey].common;
  }
});

const currencies = computed(() => {
  if (country.value) {
    const allCurrencies = [];
    for (let key in country.value.currencies) {
      allCurrencies.push(country.value.currencies[key].name);
    }
    return allCurrencies.join(", ");
  }
});

const languages = computed(() => {
  if (country.value) {
    const allLanguages = [];
    for (let key in country.value.languages) {
      allLanguages.push(country.value.languages[key]);
    }
    return allLanguages.join(", ");
  }
});
</script>

<style scoped>
@keyframes slide-to-left {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-15px);
  }
  100% {
    transform: translateX(0px);
  }
}

button:hover .icon {
  animation-name: slide-to-left;
  animation-duration: 1.25s;
  animation-timing-function: ease-in-out;
}
</style>
