export default {
	state() {
		return {
			resources: [
				{
					id: "official-guide",
					title: "Official Guide",
					description: "The official Vue.js documentation.",
					link: "https://vuejs.org",
				},
				{
					id: "google",
					title: "Google",
					description: "Learn go google...",
					link: "https://google.com",
				},
			],
		};
	},
	mutations: {
		removeResource(state, payload) {
			state.resources = state.resources.filter((x) => x.id !== payload);
		},
	},
	actions: {
		removeResource(context, payload) {
			context.commit("removeResource", payload);
		},
	},
	getters: {
		getResources(state) {
			return state.resources;
		},
	},
};
