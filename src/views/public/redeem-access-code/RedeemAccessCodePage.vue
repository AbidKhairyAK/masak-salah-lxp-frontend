<script setup lang="ts">
import useForm from '@/composables/useForm';
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getCourseDetail } from '@/services/CourseService';
import { ArrowLeft } from 'lucide-vue-next';

const router = useRouter();
const route = useRoute();
const course_id = route.params.id;

const { data: course } = getCourseDetail(Number(course_id));

const { form, errors, submitForm, isLoading } = useForm({
    accessCode: '',
});

const handleRedeem = async () => {
    // TODO: Implement redeem access code logic here
    console.log('Redeeming access code:', form.accessCode);
	router.push({ name: 'public.course.lesson', params: { id: course_id, lesson_id: 2 }});
};
</script>

<template>
    <div
        class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
        <div class="flex flex-col items-center justify-center">
            <div class="p-2 rounded-4xl">
                <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                    <div>
						<div class="flex justify-end pb-12">
							<img src="/logo.png" alt="logo" class="h-14 w-auto" />
						</div>
                        <h1 class="text-2xl font-semibold mt-6 mb-2">Redeem Access Code</h1>
                        <p class="text-muted-color font-medium mb-2">Enter your access code to unlock</p>
                        <h1 class="text-3xl font-bold mt-4 mb-6 text-primary">{{ course?.title }}</h1>
                        <p class="text-muted-color font-medium mb-6">Course</p>
                    </div>

                    <form @submit.prevent="submitForm(handleRedeem)">
                        <IftaLabel>
                            <InputText
                                v-model="form.accessCode"
                                :invalid="!!errors?.accessCode"
                                class="w-[30rem]"
                                placeholder="Enter your access code (e.g., COURSE-123-XYZ)"
                            />
                            <IErrorMessage :value="errors?.accessCode" />
                            <label>Access Code</label>
                        </IftaLabel>

                        <IButton 
                            type="submit" 
                            label="Redeem Access Code" 
                            size="large" 
                            class="w-full mt-8"
                            :loading="isLoading" 
                        />
						<IButton
                            label="Back to Course" 
                            size="large" 
							severity="secondary"
							variant="outlined"
                            class="w-full mt-2"
							:lucide="ArrowLeft"
                            :loading="isLoading" 
							@click="router.push({ name: 'public.course.detail', params: { id: course_id }})"
                        />
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>