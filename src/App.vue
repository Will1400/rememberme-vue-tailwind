<template>
	<div>
		<learning-resources></learning-resources>
	</div>
</template>

<script>
import LearningResources from "./views/LearningResources.vue";

export default {
	name: "App",
	components: {
		LearningResources,
	},
	mounted() {
		document.body.classList.add("dark");
	},
};
</script>
