import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createPinia } from "pinia";
import VCalendar from "v-calendar";
import "v-calendar/style.css";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";



const app = createApp(App);

app.use(VCalendar);
app.use(createPinia());
app.use(router);

app.mount("#app");

