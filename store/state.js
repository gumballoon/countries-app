import { createStore } from "vuex";

import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

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
  getters,
  mutations,
  actions,
});

export default store;
