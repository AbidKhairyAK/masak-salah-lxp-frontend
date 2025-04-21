<script setup lang="ts">
import { computed, ref } from 'vue'
import { Link } from 'lucide-vue-next'
import Button from 'primevue/button'
import { useAuthStore } from '@/stores/auth-store'
import { getCourseList } from '@/services/CourseService';
import IButton from '@/components/IButton.vue';

const { data: courses } = getCourseList();

const copyURL = () => {
	const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
}

</script>

<template>
	<div class="max-w-screen-xl mx-auto px-4 py-8">
		<!-- Profile Header -->
		<Card class="mb-6 p-6 !shadow-none">
			<template #content>
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-4">
					<Avatar size="xlarge" label="A" shape="circle"
						class="!bg-primary-100 !text-primary-500 font-bold" />
					<div>
						<h1 class="text-2xl font-bold">Unknown Name</h1>
						<p class="text-gray-600">Software Developer</p>
					</div>
				</div>
				<IButton severity="secondary" outlined :lucide="Link" label="Copy Link" @click="copyURL()" />
			</div>
			</template>
		</Card>

		<!-- Certificates Section -->
		<div class="mb-8">
			<Card class="my-4 !shadow-none">
				<template #content>
					<h2 class="text-xl font-semibold">Certificate</h2>
				</template>
			</Card>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			<div v-for="course in courses" :key="course.id" class="mb-4">
				<RouterLink :to="{ name: 'public.course.detail', params: { id: course.id } }">
					<ICardCourse 
						:image="course.image" 
						:title="course.title" 
						:instructor="course.instructor?.name"
						:lessons="course.lesson_count" 
						:practice="course.practice_count" />
				</RouterLink>
			</div>
		</div>
		</div>
	</div>
</template>