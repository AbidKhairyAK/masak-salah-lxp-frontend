<script setup>
import { Circle, ListIcon } from 'lucide-vue-next';
import { ref, onMounted, onUnmounted } from 'vue';
import VideoPage from './VideoPage.vue';

// Mock data for course sections
const courseSections = [
	{
		number: 1,
		title: "Course Overview",
		completed: 5,
		total: 5,
		duration: "19min",
		topics: [
			{ title: "Introduction", completed: true },
			{ title: "What you'll learn", completed: true },
			{ title: "Course structure", completed: true },
			{ title: "Prerequisites", completed: true },
			{ title: "Getting started", completed: true }
		]
	},
	{
		number: 2,
		title: "Python Setup",
		completed: 5,
		total: 5,
		duration: "54min",
		topics: [
			{ title: "Installing Python", completed: true },
			{ title: "Setting up IDE", completed: true },
			{ title: "First Python program", completed: true },
			{ title: "Python syntax basics", completed: true },
			{ title: "Common errors", completed: true }
		]
	},
	{
		number: 3,
		title: "Python Object and Data Structure Basics",
		completed: 36,
		total: 36,
		duration: "2hr 2min",
		topics: [
			{ title: "Numbers", completed: true },
			{ title: "Strings", completed: true },
			{ title: "Lists", completed: true },
			{ title: "Dictionaries", completed: true },
			{ title: "Tuples", completed: true }
		]
	},
	{
		number: 4,
		title: "Python Comparison Operators",
		completed: 3,
		total: 3,
		duration: "9min",
		topics: [
			{ title: "Equality", completed: true },
			{ title: "Comparison", completed: true },
			{ title: "Logical operators", completed: true }
		]
	},
	{
		number: 5,
		title: "Python Statements",
		completed: 7,
		total: 7,
		duration: "1hr 15min",
		topics: [
			{ title: "If statements", completed: true },
			{ title: "For loops", completed: true },
			{ title: "While loops", completed: true },
			{ title: "List comprehensions", completed: true }
		]
	},
	{
		number: 6,
		title: "Methods and Functions",
		completed: 29,
		total: 29,
		duration: "2hr 54min",
		topics: [
			{ title: "Method basics", completed: true },
			{ title: "Function basics", completed: true },
			{ title: "Advanced functions", completed: true }
		]
	},
	{
		number: 7,
		title: "Milestone Project - 1",
		completed: 9,
		total: 9,
		duration: "1hr 40min",
		topics: [
			{ title: "Project overview", completed: true },
			{ title: "Project setup", completed: true },
			{ title: "Implementation", completed: true }
		]
	},
	{
		number: 8,
		title: "Object Oriented Programming",
		completed: 9,
		total: 9,
		duration: "1hr 21min",
		topics: [
			{ title: "Classes", completed: true },
			{ title: "Objects", completed: true },
			{ title: "Inheritance", completed: true }
		]
	}
];

// Responsive state
const sidebarVisible = ref(true);
const isMobile = ref(false);

const checkMobile = () => {
	isMobile.value = window.innerWidth < 768;
	// Auto-hide sidebar on mobile
	if (isMobile.value) {
		sidebarVisible.value = false;
	} else {
		sidebarVisible.value = true;
	}
};

const toggleSidebar = () => {
	sidebarVisible.value = !sidebarVisible.value;
};

// Add window resize listener
onMounted(() => {
	checkMobile();
	window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
	window.removeEventListener('resize', checkMobile);
});
</script>
<template>
	<div class="flex sticky h-[calc(100vh-80px)]">
		<!-- Main content area -->
		<main :class="[
			'flex-1 overflow-y-auto',
		]">
			<VideoPage/>
		</main>

		<aside :class="[
			'w-96 bg-gray-800 border-l border-gray-600 transition-all duration-300 text-white flex flex-col']">
			<div class="flex items-center p-4 gap-4">
				<ListIcon class="w-6 h-6" />
				<h2 class="text-xl font-bold">Course content</h2>
			</div>

			<div class="flex-1 overflow-y-auto px-2 p-component-dark">
				<Accordion :value="[0]" multiple>
					<AccordionPanel v-for="(chapter, index) in courseSections" :key="index" :value="index">
						<AccordionHeader>{{ chapter.title }}</AccordionHeader>
						<AccordionContent>
							<div>
								<div v-for="(topic, topicIndex) in chapter.topics" :key="topicIndex"
									class="py-2 flex justify-between items-center">
									<div class="flex items-center">
										<Circle class="mr-2 w-5 h-5" stroke-width="1.5" />
										<span>{{ topic.title }}</span>
									</div>
								</div>
							</div>
						</AccordionContent>
					</AccordionPanel>
				</Accordion>
			</div>

		</aside>

	</div>
</template>