import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import "./index.css";

createApp(App)
  .use(createPinia())
  .use(router)
  .mount("#app")
  .$nextTick(window.removeLoading);

console.log("fs", window.fs);
console.log("ipcRenderer", window.ipcRenderer);
