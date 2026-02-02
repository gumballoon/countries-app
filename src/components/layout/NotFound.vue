<template>
  <h1 class="text-center my-12 text-2xl">{{ errorMessage }}</h1>
  <router-link to="/">
    <base-button class="mx-auto">Try Again</base-button>
  </router-link>
</template>

<script>
const errorMessages = [
  "No such country has been found… yet.",
  "Our cartographer fell asleep. Try another country.",
  "This country is so secret even Google doesn’t know it.",
  "404: Country not found on this planet.",
  "We searched the globe twice. Still nothing.",
  "That country might exist in an alternate universe.",
  "Our map says: ‘Nice try.’",
  "Either you misspelled it, or it doesn’t exist.",
  "The UN checked. They’re confused too.",
  "This place is still under construction.",
  "Explorers returned empty-handed.",
  "That flag has not been unlocked yet.",
  "Country not found. Have you tried Earth?",
  "Our satellites report… absolutely nothing.",
  "This sounds more like a vacation dream than a real country.",
];

export default {
  computed: {
    errorMessage() {
      const randomIndex = Math.floor(Math.random() * errorMessages.length);
      return errorMessages[randomIndex];
    },
  },
};
</script>
