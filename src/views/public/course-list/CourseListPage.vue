<script setup>
import ICardCourse from '@/components/ICardCourse.vue';
import { getCourseList } from '@/services/CourseService';
import { Book, BookOpenText, ChevronDown } from 'lucide-vue-next';
import { ref } from 'vue';

const { data: courses } = getCourseList();

</script>

<template>
	<div class="max-w-screen-xl mx-auto px-4 py-16">
		<div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
			<div>
				<h1 class="text-3xl font-bold mb-2">Courses</h1>
				<p class="text-md text-gray-700 flex-grow">Learn skills, tools, and techniques from industry experts</p>
			</div>
			<BookOpenText class="w-12 h-12" />
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			<div v-for="course in courses" :key="course.id" class="mb-4">
				<RouterLink :to="{ name: 'public.course.detail', params: { id: course.id } }">
					<ICardCourse 
						:image="course.image" 
						:title="course.title" 
						:instructor="course.instructor.name"
						:lessons="course.lesson_count" 
						:practice="course.practice_count" />
				</RouterLink>
			</div>
		</div>
	</div>
</template>