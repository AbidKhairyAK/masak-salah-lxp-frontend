<script setup>
import ICardCourse from '@/components/ICardCourse.vue';
import { Book, BookOpenText, ChevronDown } from 'lucide-vue-next';
import { ref } from 'vue';

const courses = ref([
	{
		id: 1,
		title: 'Hand-Code Your First Website: HTML + CSS Basics',
		image: '/images/course/original_1.webp',
		lessons: '12 lessons',
		practice: '2 practices',
		instructor: 'Rich From TapTapKaboom',
		staffPick: true
	},
	{
		id: 2,
		title: 'The Basics of Web-Design Layout: Learn How To Describe Your Design With HTML & CSS',
		image: '/images/course/original_2.webp',
		lessons: '23 lessons',
		practice: '3 practices',
		instructor: 'Rich From TapTapKaboom',
		staffPick: true
	},
	{
		id: 3,
		title: 'Digital Copywriting Basics: Practical Tactics for Crystal Clear Web Copy',
		image: '/images/course/original_3.webp',
		lessons: '21 lessons',
		practice: '0 practices',
		instructor: 'Ruth Clowes',
		staffPick: true
	},
	{
		id: 4,
		title: 'Web Development Fundamentals: Javascript',
		image: '/images/course/original_4.webp',
		lessons: '32 lessons',
		practice: '5 practices',
		instructor: 'Christopher Dodd',
		staffPick: true
	},
	{
		id: 5,
		title: 'Boost Personal Branding by Coding Your Own Website with HTML & CSS',
		image: '/images/course/original_5.webp',
		lessons: '11 lessons',
		practice: '3 practices',
		instructor: 'Web Design Instructor',
		staffPick: true
	},
	{
		id: 6,
		title: 'Demystifying Parallax: Learn to Create Interactive Webpages with JavaScript',
		image: '/images/course/original_6.webp',
		lessons: '9 lessons',
		practice: '2 practices',
		instructor: 'Rich Armstrong',
		staffPick: true
	},
	{
		id: 7,
		title: 'Art Direction for the Web',
		image: '/images/course/original_7.webp',
		lessons: '7 lessons',
		practice: '8 practices',
		instructor: 'Andy Clarke',
		staffPick: true
	},
]);
</script>

<template>
	<div class="max-w-screen-xl mx-auto px-4 py-16">
		<div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
			<div>
				<h1 class="text-3xl font-bold mb-2">Courses</h1>
				<p class="text-md text-gray-700 flex-grow">Learn skills, tools, and techniques from industry experts and
					creative
					pros.</p>
			</div>
			<BookOpenText class="w-12 h-12" />
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			<div v-for="course in courses" :key="course.id" class="mb-4">
				<RouterLink :to="{ name: 'public.course.detail', params: { id: course.id } }" class="block">
					<ICardCourse 
						:image="course.image" 
						:title="course.title" 
						:instructor="course.instructor"
						:lessons="course.lessons" 
						:practice="course.practice" />
				</RouterLink>
			</div>
		</div>
	</div>
</template>