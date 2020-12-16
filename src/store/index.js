import { createStore } from "vuex";

import resourceModule from "./modules/resources";

const store = createStore({
	modules: { resources: resourceModule },
});

export default store;
