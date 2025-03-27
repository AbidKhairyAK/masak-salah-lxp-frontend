<script setup lang="ts">
import { ChevronLeftIcon } from 'lucide-vue-next'
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
			</template>

			<template #content>
				<h3>Hai Bambang 😀</h3>
			</template>
		</Card>

	</main>
</template>