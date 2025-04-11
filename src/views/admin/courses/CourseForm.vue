<script setup lang="ts">
import { CheckIcon, ChevronLeftIcon } from 'lucide-vue-next'
import { reactive } from 'vue'

import IButton from '@/components/IButton.vue'

const users_options = [
	{ email: 'bambang@gmail.com', 	id: 1 },
	{ email: 'siska@gmail.com', 	id: 2 },
]
const publish_options = [
	{ label: 'Publish', value: 'publish' },
	{ label: 'Draft', 	value: 'draft' },
]


const form = reactive({
	title: '',
	userId: '',
	is_published: ''
})

interface ValidationError {
	message: string
	errors: Record<string, string[]>
}


const testError: ValidationError = {
	message: "coba string",
	errors: {
		test: [
			'yolo',
			'yolo',
		]
	}
}

async function onSubmit () {
	console.log(form)
	alert('bambang')
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
					@submit.prevent="onSubmit"
				>
					<section class="flex gap-4 items-center">
						<label class="font-medium text-muted-color">Publish Status:</label>
						<SelectButton
							v-model="form.is_published"
							:options="publish_options" 
							option-label="label" 
							option-value="value" />
					</section>

					<FloatLabel variant="in">
						<InputText
							v-model="form.title"
							class="w-full" />
						<label>Course Title</label>
					</FloatLabel>

					<FloatLabel variant="in">
						<Select
							v-model="form.userId"
							class="w-full" 
							:options="users_options" 
							option-label="email" 
							option-value="id" />
						<label>Author</label>
					</FloatLabel>

					<IButton type="submit" label="Submit" :lucide="CheckIcon" size="large" class="w-48 shadow" />
				</form>
			</template>
		</Card>

	</main>
</template>