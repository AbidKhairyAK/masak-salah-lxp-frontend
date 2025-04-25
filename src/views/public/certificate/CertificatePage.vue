<script setup>
import { ICardHeader, ICardCourse, IButton } from '@/components'
import { getCourseDetail } from '@/services/CourseService';
import { useAuthStore } from '@/stores/auth-store';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const course_id = route.params.id

const authStore = useAuthStore()
const user = computed(() => authStore.currentUser)

const {
  data: course
} = getCourseDetail(course_id)

</script>

<template>
  <div class="px-8 py-8">
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Left side: Certificate Image -->
      <Card class="lg:w-2/3 !shadow-none">
        <template #content>
          <img src="/public/images/certificate-template.jpg" alt="Certificate" class="w-full h-auto object-contain" />
        </template>
      </Card>
      <!-- Right side: Course Info -->
      <div class="lg:w-1/3 space-y-6">
        <!-- Recipient Info -->
        <ICardHeader :title="user.name" subtitle="Certificate Recipient" titleClass="text-2xl font-bold text-gray-800"
          subtitleClass="text-sm text-gray-600" class="border border-gray-300 rounded-2xl p-6" />

        <div>
          <RouterLink :to="{ name: 'public.course.detail', params: { id: course_id } }">
            <ICardCourse 
						:image="''" 
						:title="course?.title" 
						:instructor="course?.instructor.name"
						:lessons="course?.lesson_count" 
						:practice="course?.practice_count" />
          </RouterLink>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-4">
          <Button variant="primary" label="Download Certificate" size="large" />

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Any additional custom styles can go here */
</style>