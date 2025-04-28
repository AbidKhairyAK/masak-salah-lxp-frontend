<script setup>
import { BotIcon, Circle, FileText, ListIcon, Menu, Square, X } from 'lucide-vue-next';
import { getCourseStructure, getTopicNav } from '@/services/CourseService';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { computed, ref } from 'vue';
import IButton from '@/components/IButton.vue';
import { useLessonStore } from '@/stores/lesson-store';
import ISidebar from '@/components/ISidebar.vue';

const lessonStore = useLessonStore()
const router = useRouter()
//=== Sidebar ===
const route = useRoute()
const course_id = Number(route.params.id)
const curr_topic_id = computed(() => route.params.lesson_id)

const is_sidebar_open = ref(false)
const toggleSidebar = () => {
    is_sidebar_open.value = !is_sidebar_open.value
}

const {
    data: learning
} = getCourseStructure(course_id)
//================


//=== Cindy Popover ===
const getIframeSrc = (video_url) => {
    const youtubeRegex = /(?:youtube(?:-nocookie)?\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/i;
    const match = video_url.match(youtubeRegex);
    const youtube_id = match ? match[1] : null;

    return youtube_id
        ? `https://cindy.prodemy.id?video_id=${youtube_id}`
        : '';
}

const iframe_src = computed(() => {
    return getIframeSrc(lessonStore.video_url)
})

const is_cindy_open = ref(false);
const toggleCindy = () => {
    is_cindy_open.value = !is_cindy_open.value
}
//=====================

//=== Nav Button ===
const { data: nav } = getTopicNav(curr_topic_id)

const openPanels = computed(() => {
    if (!learning.value) return [0];
    // Find all chapters that contain the current topic
    const openIndexes = [];
    learning.value.forEach((chapter, idx) => {
        if (chapter.topics.some(topic => Number(curr_topic_id.value) === topic.id)) {
            openIndexes.push(idx);
        }
    });
    // Fallback to first panel if nothing matches
    return openIndexes.length ? openIndexes : [0];
});

</script>

<template>
    <div class="relative flex gap-8 p-8">
        <!-- Main content area -->
        <main class="flex-1 max-h-full">
            <Card class="mb-6 !shadow-none">
                <template #content>
                    <div class="flex justify-between gap-2">
                        <div class="flex gap-2">
                            <Button label="Previous" severity="secondary" outlined v-if="nav?.prev_topic_id"
                                @click="router.push({ name: 'public.course.lesson', params: { lesson_id: nav?.prev_topic_id } })" />
                            <Button label="Next" severity="secondary" outlined v-if="nav?.next_topic_id"
                                @click="router.push({ name: 'public.course.lesson', params: { lesson_id: nav?.next_topic_id } })" />
                        </div>
                        <div class="flex gap-2">
                            <Button label="Complete" severity="contrast" />
                            <Button label="Get Certificate" severity="contrast"
                                @click="router.push({ name: 'public.course.certificate' })" />
                        </div>
                    </div>
                </template>
            </Card>
            <RouterView />
        </main>

        <!-- Sidebar -->
        <ISidebar :title-icon="ListIcon" :title="`Course Content`">
            <div class="flex-1 overflow-y-auto">
                <Accordion :value="openPanels" multiple class="px-3">
                    <AccordionPanel v-for="(chapter, index) in learning" :key="index" :value="index"
                        class="!bg-gray-800 !border-none mt-3">
                        <AccordionHeader class="!bg-gray-800 !text-white">{{ chapter.title }}</AccordionHeader>
                        <AccordionContent class="mx-2 !border-b !border-gray-600">
                            <div class="bg-gray-800 text-white">
                                <div v-for="(topic, topicIndex) in chapter.topics" :key="topicIndex"
                                    class="py-2 flex justify-between items-center">
                                    <RouterLink :to="{ name: 'public.course.lesson', params: { lesson_id: topic.id } }"
                                        :class="['flex items-center cursor-pointer hover:bg-gray-700 p-2 rounded-xl w-full', Number(curr_topic_id) == topic.id ? 'bg-gray-700' : '']"
                                        @click="is_sidebar_open = false">
                                        <Square class="mr-2 w-4 h-4 shrink-0" stroke-width="3" />
                                        <div>
                                            <p>{{ topic.title }}</p>
                                            <p class="text-xs font-extralight capitalize text-gray-400">{{ topic?.lesson?.type ?? 'practice'}}</p>
                                        </div>
                                    </RouterLink>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </div>
        </ISidebar>

        <!-- Cindy Popover -->
        <div class="fixed z-50 bottom-6 right-4 md:right-8 lg:right-12">
            <div class="flex flex-col items-end gap-2">
                <div :class="['bg-white rounded-lg w-screen md:w-96 lg:w-[500px] h-[420px] lg:h-[500px] overflow-hidden p-4',
                    'transition-all duration-300 ease-in-out transform shadow-2xl',
                    is_cindy_open ? 'block' : 'hidden']">
                    <iframe :src="iframe_src" class="w-full h-full"></iframe>
                </div>

                <IButton @click="toggleCindy" class="!w-15 !h-15" v-tooltip="'Ask Cindy'" :lucide="BotIcon" rounded
                    lucideClass="h-8 w-8" raised />
            </div>
        </div>
    </div>
</template>
<style scoped>
:deep(.p-accordioncontent-content) {
    background-color: #1f2937 !important;
    color: #ffffff !important;
}
</style>