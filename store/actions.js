import router from "../src/router";
import axios from "axios";

const actions = {
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
        console.log(e);
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
        console.log(e);
        router.push("/error");
      });
  },
  fetchMode(context) {
    const mode = localStorage.getItem("mode");
    if (mode) {
      context.commit("setMode", { mode });
    } else {
      context.commit("setMode", { mode: "dark" });
    }
  },
};

export default actions;
