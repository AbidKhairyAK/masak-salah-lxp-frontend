<script setup lang="ts">
import Button from "primevue/button"
import type { LucideIcon } from "lucide-vue-next";

defineProps<{
	lucide: LucideIcon
	severity?: string
}>()

</script>

<template>
	<Button :severity="severity">
		<template #icon>
			<component :is="lucide" :class="['w-4 h-4', (severity === undefined || severity === 'primary' ? 'text-primary-contrast' : 'text-primary')]" />
		</template>
	</Button>
</template>