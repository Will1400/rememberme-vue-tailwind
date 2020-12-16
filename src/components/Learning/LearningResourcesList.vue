<template>
	<ul>
		<resource-item v-bind="item"></resource-item>
		<resource-item v-bind="item"></resource-item>
		<resource-item v-bind="item"></resource-item>
		<resource-item v-bind="item"></resource-item>
		<resource-item v-bind="item"></resource-item>
		<resource-item v-bind="item"></resource-item>
	</ul>
</template>
<script>
import ResourceItem from "./ResourceItem.vue";
export default {
	components: { ResourceItem },
	data() {
		return {
			item: {
				title: "Title",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, quos",
			},
		};
	},
};
</script>

<style></style>
