import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "../store/state";
import "./assets/main.css";
import vClickOutside from "click-outside-vue3";
import LoadingState from "./components/layout/LoadingState.vue";
import BaseButton from "./components/UI/BaseButton.vue";

const app = createApp(App);

app.component("loading-state", LoadingState);
app.component("base-button", BaseButton);

app.use(router);
app.use(store);
app.use(vClickOutside);

app.mount("#app");
