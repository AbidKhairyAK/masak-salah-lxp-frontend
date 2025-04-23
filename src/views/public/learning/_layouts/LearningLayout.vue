<script setup>
import { BotIcon, Circle, ListIcon, Menu, X } from 'lucide-vue-next';
import { getCourseStructure, getTopicNav } from '@/services/CourseService';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { computed, ref } from 'vue';
import IButton from '@/components/IButton.vue';
import { useLessonStore } from '@/stores/lesson-store';

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

</script>

<template>
    <div class="relative flex gap-8 p-8">
        <!-- Mobile menu button -->
        <button @click="toggleSidebar"
            class="fixed top-20 right-0 z-50 lg:hidden bg-gray-800 text-white p-3 rounded-l-full shadow-lg">
            <ListIcon v-if="!is_sidebar_open" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
        </button>

        <!-- Main content area -->
        <main class="flex-1 max-h-full">
            <Card class="mb-6 !shadow-none">
                <template #content>
                    <div class="flex gap-2">
                        <IButton label="Prev" severity="contrast" class="!bg-gray-800" v-if="nav?.prev_topic_id"
                            @click="router.push({ name: 'public.course.lesson', params: { lesson_id: nav?.prev_topic_id } })" />
                        <IButton label="Next" severity="contrast" class="!bg-gray-800" v-if="nav?.next_topic_id"
                            @click="router.push({ name: 'public.course.lesson', params: { lesson_id: nav?.next_topic_id } })" />
                        <IButton label="Complete" severity="contrast" />
                    </div>
                </template>
            </Card>
            <RouterView />
        </main>

        <!-- Sidebar -->
        <aside :class="[
            'fixed lg:relative right-0 top-20 lg:top-0 w-3/4 lg:w-1/4 min-h-screen bg-gray-800 rounded-none lg:rounded-2xl transition-all duration-300 text-white flex flex-col overflow-y-auto',
            'lg:transform-none',
            is_sidebar_open ? 'transform translate-x-0' : 'transform translate-x-full lg:translate-x-0',
            'z-40'
        ]">
            <div class="flex items-center p-4 gap-4">
                <ListIcon class="w-6 h-6" />
                <h2 class="text-2xl font-bold">Course content</h2>
            </div>

            <div class="flex-1 overflow-y-auto">
                <Accordion :value="[0]" multiple class="px-3">
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

        <!-- Overlay -->
        <div v-if="is_sidebar_open" @click="toggleSidebar" class="fixed inset-0 bg-gray-800/50 z-30 lg:hidden">
        </div>

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