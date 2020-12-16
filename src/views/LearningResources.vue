<template>
	<div class="bg-blue-50 min-h-screen md:p-20">
		<div class="container mx-auto">
			<div class="mb-10 flex justify-between items-center">
				<h1 class="uppercase text-gray-500">Remember me</h1>
				<button
					class="bg-blue-200 shadow-md hover:shadow-lg px-5 py-2 rounded-lg text-center hover:border-solid border-solid border-4 border-transparent transition hover:border-blue-200 hover:bg-blue-50 focus:outline-none"
				>
					<span class="mr-1 font-bold text-xl text-center">+</span>
					<span>Add</span>
				</button>
			</div>
			<learning-resources-list></learning-resources-list>

			<button
				class="transform-gpu hover:scale-105 w-full h-20 rounded-lg border-dashed border-4 border-light-blue-500 hover:shadow-xl transition hover:bg-blue-200 hover:border-blue-200 focus:outline-none text-center p-2 text-gray-400 hover:text-gray-800"
			>
				Add Resource
			</button>
		</div>
	</div>
</template>

<script>
import LearningResourcesList from "../components/Learning/LearningResourcesList.vue";
export default {
	components: { LearningResourcesList },
};
</script>

<style></style>
