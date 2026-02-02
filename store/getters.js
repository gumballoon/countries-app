const getters = {
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
};

export default getters;
