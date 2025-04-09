<script setup lang="ts">
import type { CourseCard } from '@/types/course';
import { defineProps } from 'vue';

const props = defineProps<{
	course: CourseCard;
}>();
</script>

<template>
	<Card
		class="h-full shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 !rounded-xl flex flex-col">
		<template #header>
			<div class="relative">
				<img :src="course.image" :alt="course.title" class="w-full h-48 object-cover rounded-t-xl" />
			</div>
		</template>
		<template #title>
			<div class="flex justify-between text-sm text-gray-500 mb-2">
				<span>{{ course.lessons }}</span>
				<span>{{ course.practice }}</span>
			</div>
			<h3 class="text-xl font-bold mt-3">{{ course.title }}</h3>
		</template>
		<template #footer>
			<div class="flex justify-between items-center mt-4 pt-2 border-t border-gray-100">
				<div class="text-md text-gray-600">{{ course.instructor }}</div>
			</div>
		</template>
	</Card>
</template>

<style scoped>
::v-deep .p-card-body {
	height: 100%;
}

::v-deep .p-card-content {
	flex-grow: 1;
}
</style>