<template>
	<teleport to="body">
		<div v-if="show" @click="tryClose" class="backdrop"></div>
		<transition name="dialog">
			<div
				class="fixed top-0 z-20 left-0 w-full h-screen flex items-center justify-items-center"
				v-if="show"
			>
				<dialog
					class="h-full w-full z-20 sm:h-auto sm:w-4/5 sm:max-w-2xl p-0 rounded-lg dark:bg-gray-950"
					open
					v-if="show"
				>
					<header
						class="bg-blue-200 dark:bg-gray-950 p-4 -mb-5 text-center rounded-t-lg"
					>
						<slot name="header">
							<h2
								class="text-gray-700 dark:text-gray-300 text-xl font-semibold"
							>
								{{ title }}
							</h2>
						</slot>
					</header>
					<section>
						<slot></slot>
					</section>
					<menu
						v-if="!fixed"
						class="flex w-full justify-between px-4"
					>
						<slot name="actions"> </slot>
					</menu>
				</dialog>
			</div>
		</transition>
	</teleport>
</template>

<script>
export default {
	props: {
		show: {
			type: Boolean,
			required: true,
		},
		title: {
			type: String,
			required: false,
		},
		fixed: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	emits: ["close"],
	methods: {
		tryClose() {
			if (this.fixed) {
				return;
			}
			this.$emit("close");
		},
	},
};
</script>

<style scoped>
.backdrop {
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.75);
	z-index: 10;
}

.dialog-enter-from,
.dialog-leave-to {
	opacity: 0;
	transform: scale(0.8);
}

.dialog-enter-active {
	transition: all 0.3s ease-out;
}

.dialog-leave-active {
	transition: all 0.3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
	opacity: 1;
	transform: scale(1);
}
</style>
