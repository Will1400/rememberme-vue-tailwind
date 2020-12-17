<template>
	<teleport to="body">
		<base-dialog :show="isResourceDialogOpen" title="Add Resource">
			<slot name="default">
				<add-resource
					@create-resource="createResource"
					@cancel="closeResourceDialog"
				></add-resource>
			</slot>
		</base-dialog>
	</teleport>
	<div class="bg-blue-50 dark:bg-gray-950 min-h-screen md:p-20">
		<div class="container mx-auto">
			<div class="mb-10 flex justify-between items-center p-5 md:p-0">
				<h1 class="uppercase text-gray-500 dark:text-gray-300">
					Remember me
				</h1>
				<button
					@click="openResourceDialog"
					class="bg-blue-200 dark:bg-gray-600 shadow-md hover:shadow-lg px-5 py-2 rounded-lg text-center border-solid border-4 border-transparent transition hover:border-blue-200 hover:bg-blue-50 dark:hover:border-gray-600 dark:hover:text-gray-300 dark:hover:bg-gray-950 focus:outline-none"
				>
					<span class="mr-1 font-bold text-xl text-center">+</span>
					<span>Add</span>
				</button>
			</div>
			<learning-resources-list></learning-resources-list>

			<button
				@click="openResourceDialog"
				class="transform-gpu sm:hover:scale-105 w-full h-20 rounded-lg border-dashed border-4 border-light-blue-500 dark:border-gray-600 hover:shadow-xl transition hover:bg-blue-200 hover:border-blue-200 dark:hover:bg-gray-600 focus:outline-none text-center p-2 text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
			>
				Add Resource
			</button>
		</div>
	</div>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";
import AddResource from "../components/Learning/AddResource.vue";
import LearningResourcesList from "../components/Learning/LearningResourcesList.vue";
export default {
	components: { LearningResourcesList, AddResource },
	setup() {
		let isResourceDialogOpen = ref(false);

		const store = useStore();

		function createResource(resource) {
			store.dispatch("addResource", resource);
			closeResourceDialog();
		}
		function closeResourceDialog() {
			isResourceDialogOpen.value = false;
		}

		function openResourceDialog() {
			isResourceDialogOpen.value = true;
		}

		return {
			isResourceDialogOpen,
			openResourceDialog,
			closeResourceDialog,
			createResource,
		};
	},
};
</script>
<style></style>
