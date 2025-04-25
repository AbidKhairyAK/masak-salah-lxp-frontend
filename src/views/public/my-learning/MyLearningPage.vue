<script setup lang="ts">
import IButton from '@/components/IButton.vue';
import { getCourseList } from '@/services/CourseService';
import { useAuthStore } from '@/stores/auth-store';
import { ArrowRight, BookOpenCheck } from 'lucide-vue-next';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore()
const router = useRouter()
const user = computed(() => authStore.currentUser)

const { data: courses } = getCourseList();


</script>
<template>
	<div class="max-w-screen-xl mx-auto px-4 py-16">
		<div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
			<div>
				<h1 class="text-3xl font-bold mb-2">My Learning</h1>
				<p class="text-md text-gray-700 flex-grow"></p>
			</div>
			<BookOpenCheck class="w-12 h-12" />
		</div>
		<!-- Main Grid Layout -->
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
			<!-- Course Cards Column -->
			<div class="lg:col-span-2 space-y-6">
				<div v-for="course in courses" :key="course.id" class="mb-4">
					<Card class="transition-all duration-200 transform hover:-translate-y-1 !rounded-xl">
						<template #content>
							<div class="flex flex-col md:flex-row">
								<div class="flex-1 mb-6 md:mr-6">
									<span class="text-gray-600 text-base font-light">{{ course.instructor?.name
										}}</span>
									<h2 class="text-lg font-bold mt-2">{{ course.title }}</h2>
									<div class="text-sm text-gray-500 mt-1 mb-4">
										<span>Course</span>
										<span class="mx-2">•</span>
										<span>34% selesai</span>
									</div>

									<ProgressBar :value="50" :showValue="false" class="max-h-2 !text-amber-200">
									</ProgressBar>
								</div>
								<div class="md:border-l border-gray-200 md:w-1/3 md:px-6 flex items-center">
									<div class="flex flex-col gap-2">
										<router-link
											:to="{ name: 'public.course.lesson', params: { id: course.id, lesson_id: 6 } }"
											class="p-button text-lg font-bold w-full !px-4">
											View
											<ArrowRight class="w-4 h-4 ml-2" />
										</router-link>
										<IButton label="Get Certificate" severity="contrast"
											@click="router.push({ name: 'public.course.certificate', params: {id: course.id} })" />
									</div>

								</div>
							</div>
						</template>
					</Card>
				</div>
			</div>

			<!-- Right Sidebar -->
			<div class="lg:col-span-1 space-y-6">
				<Card>
					<template #title>
						<div class="flex items-center space-x-4">
							<Avatar :label="user?.name[0]" shape="circle"
								class="!bg-primary-100 !text-primary-500 font-bold" size="xlarge" />
							<p class="font-semibold text-md">Hai,<br> {{ user?.name }}</p>
						</div>
					</template>
					<template #content>
						<p class="text-base mt-2">Investasi terbaik adalah investasi pada diri sendiri. Teruskan
							perjalanan belajarmu, karena setiap pengetahuan hari ini membentuk kesuksesan esok hari</p>
					</template>

				</Card>
			</div>
		</div>
	</div>
</template>