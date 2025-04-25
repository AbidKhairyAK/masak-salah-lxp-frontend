<script setup>
import ISidebar from '@/components/ISidebar.vue'
import { LayoutGrid, ListIcon } from 'lucide-vue-next'
import { ref } from 'vue'

const quantQuestions = Array.from({ length: 20 }, (_, i) => ({
	number: i + 1,
	status: i === 7 ? 'current' : i < 7 ? 'answered' : 'notAttempted'
}))
const verbalQuestions = Array.from({ length: 20 }, (_, i) => ({
	number: i + 1,
	status: i < 10 ? 'answered' : i < 17 ? 'notAnswered' : i === 17 ? 'current' : 'notAttempted'
}))

const timer = ref({ hours: 0, minutes: 42, seconds: 39 })

const legend = [
	{ color: 'bg-blue-500', label: 'Current' },
	{ color: 'bg-green-500', label: 'Answered' },
	{ color: 'bg-orange-400', label: 'Not Answered' },
]
</script>
<template>
	<div class="min-h-screen flex flex-col">
		<!-- Header -->
		<header class="bg-white px-8 shadow-md sticky top-0 h-20 flex items-center">
			<h1 class="text-xl font-semibold">Online Test - CAT Preparation</h1>
		</header>

		<div class="flex flex-1 gap-8 p-8">
			<!-- Main Content -->
			<main class="flex-1 flex flex-col">
				<Card class="mb-6 !shadow-none">
					<template #content>
						<div class="flex justify-between gap-2">
							<div class="flex gap-2">
								<Button label="Previous" severity="secondary" outlined />
								<Button label="Next" severity="secondary" outlined />
							</div>
							<div>
								<Button label="Submit" severity="contrast" />
							</div>
						</div>
					</template>
				</Card>
				<RouterView />

			</main>

			<ISidebar title="Practice Questions" :titleIcon="LayoutGrid">
				<div class="px-12 py-8">
					<!-- Question Palette -->
					<div class="inline-block relative left-[50%] -translate-x-[50%]">
						<div class="grid grid-cols-4 gap-4 mb-16">
							<template v-for="q in quantQuestions" :key="'q' + q.number">
								<button class="w-10 h-10 rounded flex items-center justify-center text-xs font-bold"
									:class="{
										'bg-blue-500 text-white': q.status === 'current',
										'bg-green-500 text-white': q.status === 'answered',
										'bg-orange-400 text-white': q.status === 'notAnswered',
										'bg-gray-800 text-white': q.status === 'review',
										'bg-white border border-gray-400': q.status === 'notAttempted'
									}">
									{{ q.number }}
								</button>
							</template>
						</div>
					</div>

					<!-- Legend -->
					<div>
						<div class="flex flex-wrap gap-3">
							<div v-for="item in legend" :key="item.label" class="flex items-center gap-2">
								<span :class="['inline-block w-4 h-4 rounded', item.color]"></span>
								<span class="text-xs">{{ item.label }}</span>
							</div>
						</div>
					</div>

				</div>
			</ISidebar>
		</div>
	</div>
</template>