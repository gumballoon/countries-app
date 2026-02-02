import { createRouter, createWebHistory } from "vue-router";
import HomeSearchControls from "./components/home/HomeSearchControls.vue";
import CountryList from "./components/countries/CountryList.vue";
import CountryPage from "./components/countries/CountryPage.vue";
import NotFound from "./components/layout/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "all",
      components: {
        home: HomeSearchControls,
        default: CountryList,
      },
    },
    {
      path: "/:code",
      name: "country",
      props: true,
      components: {
        default: CountryPage,
      },
    },
    {
      path: "/:notFound(.*)",
      redirect: "/error",
    },
    {
      path: "/error",
      name: "error",
      components: {
        "home-search-controls": HomeSearchControls,
        default: NotFound,
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // to return to the previous scroll position if the user clicks to return
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0 };
    }
  },
});

export default router;
