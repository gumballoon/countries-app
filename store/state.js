import { createStore } from "vuex";
import router from "../src/router";
import axios from "axios";

const store = createStore({
  state() {
    return {
      mode: "dark",
      searchValue: "",
      countries: null,
      filteredCountries: null,
      selectedCountry: null,
    };
  },
  getters: {
    mode(state) {
      return state.mode;
    },
    searchValue(state) {
      return state.searchValue;
    },
    countries(state) {
      return state.countries;
    },
    filteredCountries(state) {
      return state.filteredCountries;
    },
    selectedCountry(state) {
      return state.selectedCountry;
    },
  },
  mutations: {
    toggleMode(state) {
      if (state.mode === "light") {
        state.mode = "dark";
        localStorage.setItem("mode", "dark");
      } else {
        state.mode = "light";
        localStorage.setItem("mode", "light");
      }
    },
    setMode(state, payload) {
      state.mode = payload.mode;
    },
    setCountries(state, payload) {
      state.countries = payload.countries.sort((a, b) => {
        if (a.name.common < b.name.common) return -1;
        if (a.name.common > b.name.common) return 1;
        return 0;
      });
    },
    setFilteredCountries(state, payload) {
      if (state.countries && payload.type === "region") {
        state.filteredCountries = state.countries.filter((c) => {
          return c.region === payload.region;
        });
      } else if (state.countries && payload.type === "name") {
        state.filteredCountries = state.countries.filter((c) => {
          return c.name.common.toLowerCase().includes(payload.name);
        });
      }
    },
    setSelectedCountry(state, payload) {
      state.selectedCountry = payload.country;
    },
    resetFilter(state) {
      state.filteredCountries = null;
    },
  },
  actions: {
    toggleMode(context) {
      context.commit("toggleMode");
    },
    async fetchAllCountries(context) {
      return axios
        .get(
          "https://restcountries.com/v3.1/all?fields=name,cca2,cca3,region,flags,population,capital",
        )
        .then((res) => {
          context.commit("setCountries", { countries: res.data });
        })
        .catch((e) => {
          router.push("/error");
        });
    },
    filterCountriesByRegion(context, region) {
      context.commit("setFilteredCountries", { type: "region", region });
    },
    filterCountriesByName(context, name) {
      context.commit("setFilteredCountries", { type: "name", name });
    },
    resetFilter(context) {
      context.commit("resetFilter");
    },
    async fetchCountry(context, code) {
      return axios
        .get(`https://restcountries.com/v3.1/alpha/${code}`)
        .then((res) => {
          context.commit("setSelectedCountry", { country: res.data[0] });
        })
        .catch((e) => {
          router.push("/error");
        });
    },
    fetchMode(context) {
      const mode = localStorage.getItem("mode");
      if (mode) {
        context.commit("setMode", { mode });
      }
    },
  },
});

export default store;
