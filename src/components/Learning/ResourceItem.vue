<template>
	<li class="bg-white rounded-lg p-6 w-full relative mb-5 shadow-lg">
		<div class="flex flex-row justify-between w-full">
			<h2 class="font-bold text-gray-800 mb-4 text-2xl">{{ title }}</h2>
			<button class="w-10 h-10">
				<span class="text-center">x</span>
			</button>
		</div>
		<p class="text-gray-500">
			{{ description }}
		</p>
	</li>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
};
</script>

<style></style>
