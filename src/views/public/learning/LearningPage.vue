<script setup lang="ts">
import { Circle, ListIcon } from 'lucide-vue-next';
import { ref, onMounted, onUnmounted } from 'vue';
import VideoPage from './VideoPage.vue';
import PdfPage from './PdfPage.vue';
import ArticlePage from './ArticlePage.vue';
import { getLearning } from '@/services/LearningService';
import IButton from '@/components/IButton.vue';

const {
    data: learning
} = getLearning()


</script>
<template>
	<div class="flex sticky gap-8 p-8">
		<!-- Main content area -->
		<main class="flex-1 max-h-full">
			<PdfPage :url="learning?.lesson.pdf.pdf_url" v-if="learning?.lesson.pdf"/>
			<ArticlePage :content="learning?.lesson.article.content" v-if="learning?.lesson.article"/>
			<VideoPage :url="learning?.lesson.video.video_url" :title="learning?.topic.title" v-if="learning?.lesson.video"/>
		</main>

		<aside class="w-1/4 min-h-screen bg-gray-800 rounded-2xl transition-all duration-300 text-white flex flex-col overflow-y-auto">
			<div class="flex items-center p-4 gap-4">
				<ListIcon class="w-6 h-6" />
				<h2 class="text-2xl font-bold">Course content</h2>
			</div>

			<div class="flex-1 overflow-y-auto">
				<Accordion :value="[0]" multiple class="px-3">
					<AccordionPanel v-for="(chapter, index) in learning?.course.chapters" :key="index" :value="index" class="!bg-gray-800 !border-none mt-3">
						<AccordionHeader class="!bg-gray-800 !text-white">{{ chapter.title }}</AccordionHeader>
						<AccordionContent class="mx-2 !border-b !border-gray-600" >
							<div class="bg-gray-800 text-white">
								<div v-for="(topic, topicIndex) in chapter.topics" :key="topicIndex"
									class="py-2 flex justify-between items-center">
									<a class="flex items-center cursor-pointer hover:bg-gray-700 p-2 rounded-xl w-full">
										<Circle class="mr-2 w-5 h-5" stroke-width="1.5" />
										<span>{{ topic.title }}</span>
									</a>
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