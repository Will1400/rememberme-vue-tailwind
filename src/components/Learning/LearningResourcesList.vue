<template>
	<ul v-if="resources.length > 0">
		<resource-item
			v-for="resource in resources"
			:key="resource.id"
			:resource="resource"
			@remove-resource="removeResource"
		></resource-item>
	</ul>
</template>
<script>
import ResourceItem from "./ResourceItem.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
	components: { ResourceItem },
	setup() {
		const store = useStore();

		const resources = computed(() => store.getters["getResources"]);
		console.log(resources);

		function removeResource(id) {
			store.dispatch("removeResource", id);
		}

		return { resources, removeResource };
	},
};
</script>

<style></style>
