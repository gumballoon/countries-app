const mutations = {
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
};

export default mutations;
