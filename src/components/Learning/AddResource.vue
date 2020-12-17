<template>
	<form @submit.prevent="submitForm" class="p-4">
		<div class="mb-4">
			<label for="title" class="dark:text-gray-300">Title</label>
			<input
				required
				type="text"
				name="title"
				v-model="resource.title"
				class="block dark:bg-gray-900 dark:border-transparent dark:text-gray-300 w-full rounded-sm border-solid border-b-2 px-1 py-1 text-md focus:border-blue-300 dark:focus:border-gray-600 focus:outline-none transition-colors"
			/>
		</div>
		<div class="my-10">
			<label for="description" class="dark:text-gray-300"
				>Description</label
			>
			<textarea
				required
				name="description"
				v-model="resource.description"
				cols="5"
				class="block dark:bg-gray-900 dark:border-transparent dark:text-gray-300 w-full rounded-sm border-solid border-2 px-1 py-1 text-md focus:border-blue-300 dark:focus:border-gray-600 focus:outline-none transition-colors"
			></textarea>
		</div>
		<div class="mb-4">
			<label for="Link" class="dark:text-gray-300">Link</label>
			<input
				type="text"
				name="Link"
				v-model="resource.link"
				class="block dark:bg-gray-900 dark:border-transparent dark:text-gray-300 w-full rounded-sm border-solid border-b-2 px-1 py-1 text-md focus:border-blue-300 dark:focus:border-gray-600 focus:outline-none transition-colors"
			/>
		</div>
		<div class="flex w-full justify-between mt-10 -mb-8">
			<button
				type="submit"
				class="bg-blue-200 dark:text-gray-300 dark:bg-transparent border-solid border-2 flex-grow sm:flex-grow-0 mr-3 px-5 py-3 rounded-md shadow-md transform-gpu transition hover:scale-105 hover:shadow-lg focus:outline-none focus:shadow-xl focus:scale-100 dark:border-green-500 dark:hover:bg-green-500"
			>
				Add resource
			</button>
			<button
				class="border-solid border-2 dark:text-gray-300 border-blue-200 dark:border-gray-500 px-5 py-3 rounded-md transition shadow-md hover:shadow-lg hover:border-red-500 dark:hover:border-red-500 focus:outline-none transform-gpu focus:scale-95"
				@click.prevent="cancel"
			>
				Cancel
			</button>
		</div>
	</form>
</template>

<script>
import { reactive } from "vue";
export default {
	emits: ["create-resource", "cancel"],
	setup(props, context) {
		const resource = reactive({
			id: "",
			title: "",
			description: "",
			link: "",
		});
		function submitForm() {
			resource.id = new Date().toISOString();
			context.emit("create-resource", resource);
		}
		function cancel() {
			context.emit("cancel");
		}

		return { submitForm, resource, cancel };
	},
};
</script>
