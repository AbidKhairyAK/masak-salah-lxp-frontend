<script setup lang="ts">
import { Circle, ListIcon } from 'lucide-vue-next';
import { getCourseStructure } from '@/services/CourseService';
import { RouterLink, useRoute } from 'vue-router';


const route = useRoute()
const course_id = Number(route.params.id)

const {
    data: learning
} = getCourseStructure(course_id)

</script>
<template>
	<div class="flex sticky gap-8 p-8">
		<!-- Main content area -->
		<main class="flex-1 max-h-full">
			<RouterView />
		</main>

		<aside class="w-1/4 min-h-screen bg-gray-800 rounded-2xl transition-all duration-300 text-white flex flex-col overflow-y-auto">
			<div class="flex items-center p-4 gap-4">
				<ListIcon class="w-6 h-6" />
				<h2 class="text-2xl font-bold">Course content</h2>
			</div>

			<div class="flex-1 overflow-y-auto">
				<Accordion :value="[0]" multiple class="px-3">
					<AccordionPanel v-for="(chapter, index) in learning" :key="index" :value="index" class="!bg-gray-800 !border-none mt-3">
						<AccordionHeader class="!bg-gray-800 !text-white">{{ chapter.title }}</AccordionHeader>
						<AccordionContent class="mx-2 !border-b !border-gray-600" >
							<div class="bg-gray-800 text-white">
								<div v-for="(topic, topicIndex) in chapter.topics" :key="topicIndex"
									class="py-2 flex justify-between items-center">
									<RouterLink :to="{ name: 'public.course.lesson', params: { lesson_id: topic.id}}" class="flex items-center cursor-pointer hover:bg-gray-700 p-2 rounded-xl w-full">
										<Circle class="mr-2 w-5 h-5" stroke-width="1.5" />
										<span>{{ topic.title }}</span>
									</RouterLink>
								</div>
							</div>
						</AccordionContent>
					</AccordionPanel>
				</Accordion>
			</div>

		</aside>

	</div>
</template>
<style scoped>
:deep(.p-accordioncontent-content) {
	background-color: #1f2937 !important;
	color: #ffffff !important;
}
</style>