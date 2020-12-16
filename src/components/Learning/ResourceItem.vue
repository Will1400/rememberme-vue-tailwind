<template>
	<li
		v-if="resource"
		class="bg-white dark:bg-gray-900 rounded-lg p-6 w-full relative mb-5 shadow-md transition transform-gpu sm:hover:scale-105 hover:shadow-xl cursor-pointer"
	>
		<div class="flex flex-row justify-between w-full">
			<h2
				class="font-bold text-gray-800 dark:text-gray-100 mb-4 text-2xl"
			>
				{{ resource.title }}
			</h2>
			<button class="w-10 h-10" @click="removeItem">
				<span
					class="text-gray-400 hover:text-red-500 dark:hover:text-red-600"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						width="24"
						height="24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
				></span>
			</button>
		</div>
		<p class="text-gray-500">
			{{ resource.description }}
		</p>
	</li>
</template>

<script>
export default {
	emits: ["remove-resource"],
	props: {
		resource: {
			type: Object,
			required: true,
		},
	},
	setup(props, context) {
		function removeItem() {
			context.emit("remove-resource", props.resource.id);
		}

		return { removeItem };
	},
};
</script>

<style></style>
