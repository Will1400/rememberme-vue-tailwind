import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

import store from "./store";

import dialog from "./components/base/BaseDialog.vue";

const app = createApp(App);
app.use(store);

app.component("base-dialog", dialog);

app.mount("#app");
