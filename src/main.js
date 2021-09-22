import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import masonry from "vue-next-masonry";

createApp(App).use(router).use(masonry).mount("#app");
