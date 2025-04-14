<script setup lang="ts">
import { useRouter } from 'vue-router'
import { CheckIcon, ChevronLeftIcon } from 'lucide-vue-next'

import useForm from '@/composables/useForm'
import { createCourse } from '@/services/CourseService'
import { IErrorMessage, IButton } from '@/components'

const instructor_options = [
	{ name: 'yudhoyono', id: 1 },
]

const { form, errors, submitForm, isLoading } = useForm ({
	title			: '',
	instructor_id	: '',
	caption			: '',
	description		: ''
})

const router = useRouter()

async function onSubmit () {
	await createCourse(form)
	router.push('/admin/courses')
}
</script>

<template>
	<main>
		<Card>
			<template #title>
				<ICardHeader
					title="Course Form"
					subtitle="Create new or edit the selected course."
				>
					<IButton label="Back" :lucide="ChevronLeftIcon" severity="secondary" />
				</ICardHeader>
				<hr class="mb-4 border-surface">
			</template>
			
			<template #content>
				<form 
					class="w-full max-w-4xl grid gap-5"
					@submit.prevent="submitForm(onSubmit)"
				>
					<IftaLabel>
						<InputText
							v-model="form.title"
							:invalid="!!errors?.title"
							class="w-full"
						/>
						<IErrorMessage :value="errors?.title" />
						<label>Course Title</label>
					</IftaLabel>

					<IftaLabel>
						<Select
							v-model="form.instructor_id"
							class="w-full" 
							:invalid="!!errors?.instructor_id"
							:options="instructor_options" 
							option-label="name" 
							option-value="id" 
						/>
						<IErrorMessage :value="errors?.instructor_id" />
						<label>Instructor</label>
					</IftaLabel>
					
					<IftaLabel>
						<InputText
							v-model="form.caption"
							:invalid="!!errors?.caption"
							class="w-full" 
						/>
						<IErrorMessage :value="errors?.caption" />
						<label>Caption</label>
					</IftaLabel>

					<IftaLabel>
						<Textarea
							v-model="form.description"
							:invalid="!!errors?.description"
							:rows="5" 
							class="w-full"
						/>
						<IErrorMessage :value="errors?.description" />
						<label>Description</label>
					</IftaLabel>

					<IButton 
						type="submit" 
						label="Submit" 
						size="large" 
						class="w-48 shadow" 
						:lucide="CheckIcon"
						:loading="isLoading"
					/>
				</form>
			</template>
		</Card>

	</main>
</template>