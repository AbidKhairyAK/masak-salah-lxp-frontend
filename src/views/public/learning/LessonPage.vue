<script setup lang="ts">
import { getTopicContent } from '@/services/CourseService';
import { useRoute } from 'vue-router';
import PdfLessonPage from './_components/PdfLessonPage.vue';
import ArticleLessonPage from './_components/ArticleLessonPage.vue';
import VideoLessonPage from './_components/VideoLessonPage.vue';
import { computed, watch } from 'vue';


const route = useRoute()

const {
  data: topic
} = getTopicContent(computed(() => Number(route.params.lesson_id)));

</script>
<template>
	<div>
		<PdfLessonPage :url="topic?.lesson?.pdf.pdf_url" v-if="topic?.lesson?.pdf" />
		<ArticleLessonPage :content="topic?.lesson?.article.content" v-if="topic?.lesson?.article" />
		<VideoLessonPage :url="topic?.lesson?.video.video_url" :title="topic?.title" v-if="topic?.lesson?.video" />
	</div>
</template>