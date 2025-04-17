<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
	image: string;
	title: string;
	lessons: number;
	practice: number;
	instructor: string;
}>();
</script>

<template>
	<Card
		class="h-full transition-all duration-200 transform hover:-translate-y-1 !rounded-xl">
		<template #header>
			<div class="relative">
				<img :src="image" :alt="title" class="w-full h-48 object-cover rounded-t-xl" />
			</div>
		</template>
		<template #title>
			<div class="flex justify-between text-sm text-gray-500 mb-2">
				<span>{{ lessons }} lessons</span>
				<span>{{ practice }} practices</span>
			</div>
			<h3 class="text-xl font-bold mt-3">{{ title }}</h3>
		</template>
		<template #footer>
			<div class="flex justify-between items-center mt-4 pt-2 border-t border-gray-100">
				<div class="text-md text-gray-600">{{ instructor }}</div>
			</div>
		</template>
	</Card>
</template>

<style scoped>
:deep(.p-card-body) {
	height: 100%;
}

:deep(.p-card-content) {
	flex-grow: 1;
}
</style>