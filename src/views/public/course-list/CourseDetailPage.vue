<script setup>
import Button from 'primevue/button';
import Accordion from 'primevue/accordion';
import { NotebookTextIcon } from 'lucide-vue-next';
import { useRoute } from 'vue-router';
import { getCourseDetail } from '@/services/CourseService';

const route = useRoute();
const course_id = route.params.id

const {
    data: course
} = getCourseDetail(course_id)

</script>

<template>
    <div class="bg-gray-900 text-white">
        <div class="container mx-auto py-14">
            <div class="flex flex-col md:flex-row mt-8 gap-12">
                <div class="flex-2 flex flex-col justify-between">
                    <div>
                        <div class="uppercase text-primary font-medium mb-2">COURSE</div>
                        <h1 class="text-5xl font-bold mb-6 leading-tight">
                            {{ course?.title }}
                        </h1>

                        <p class="text-lg mb-8">
                            {{ course?.caption }}
                        </p>
                    </div>
                    <div>
                        <!-- <router-link :to="{name: 'public.course.lesson', params: { id: course_id, lesson_id: course.chapters[0].topics[0].id }}" class="p-button text-lg font-bold !px-4">
                            Start Course
                        </router-link> -->
                        <router-link :to="{name: 'public.redeem_access_code', params: { id: course_id }}" class="p-button text-lg font-bold !px-4">
                            Enroll Course
                        </router-link>
                    </div>

                </div>

                <div class="flex-1">
                    <div class="relative w-full aspect-[3/2] rounded-lg shadow-lg overflow-hidden">
                        <img src="/images/course/original_1.webp" alt="Azure Course"
                            class="absolute w-full h-full object-cover object-center" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-gray-700 h-12"></div>
    <div class="container mx-auto py-12">
        <h2 class="text-3xl font-bold mb-6">Course Description</h2>
        <p class="mb-8">
            {{ course?.description }}
        </p>
        <div v-for="(chapter, chapterIndex) in course?.chapters" :key="chapterIndex" class="mb-4">
            <Accordion>
                <AccordionPanel>
                    <AccordionHeader>{{ chapter.title }}</AccordionHeader>
                    <AccordionContent>                        
                        <div>
                            <div v-for="(topic, topicIndex) in chapter.topics" :key="topicIndex"
                                class="py-2 flex justify-between items-center">
                                <div class="flex items-center">
                                    <NotebookTextIcon class="mr-2" stroke-width="1.5" />
                                    <span>{{ topic.title }}</span>
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
        </div>
    </div>
</template>