import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

document.addEventListener('contextmenu', event => event.preventDefault());

createApp(App).mount("#app");
