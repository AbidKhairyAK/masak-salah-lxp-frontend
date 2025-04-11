<script setup lang="ts">
import { CheckIcon, ChevronLeftIcon } from 'lucide-vue-next'

import IButton from '@/components/IButton.vue'
import useForm from '@/composables/useForm'
import { createCourse } from '@/services/CourseService'

const instructor_options = [
	{ name: 'yudhoyono',	id: 1 },
]

const { form, errors, submitForm } = useForm ({
	title			: '',
	instructor_id	: '',
	caption			: '',
	description		: ''
})

async function onSubmit () {
	await createCourse(form)
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
					<FloatLabel variant="in">
						<InputText
							v-model="form.title"
							class="w-full" />
						<label>
							Course Title
						</label>
						<Message v-if="errors?.title" size="small" severity="error" variant="simple">
							{{ errors?.title }}
						</Message>
					</FloatLabel>

					<FloatLabel variant="in">
						<Select
							v-model="form.instructor_id"
							class="w-full" 
							:options="instructor_options" 
							option-label="name" 
							option-value="id" />
						<label>
							Instructor
						</label>
						<Message v-if="errors?.instructor_id" size="small" severity="error" variant="simple">
							{{ errors?.instructor_id }}
						</Message>
					</FloatLabel>
					
					<FloatLabel variant="in">
						<InputText
							v-model="form.caption"
							class="w-full" />
						<label>
							Caption
						</label>
						<Message v-if="errors?.caption" size="small" severity="error" variant="simple">
							{{ errors?.caption }}
						</Message>
					</FloatLabel>

					<FloatLabel variant="in">
						<Textarea
							v-model="form.description"
							class="w-full"
							:rows="5" />
						<label>
							Description
						</label>
						<Message v-if="errors?.description" size="small" severity="error" variant="simple">
							{{ errors?.description }}
						</Message>
					</FloatLabel>

					<IButton type="submit" label="Submit" :lucide="CheckIcon" size="large" class="w-48 shadow" />
				</form>
			</template>
		</Card>

	</main>
</template>

<style>
.p-message {
	margin-top: 0.5rem;
}
</style>