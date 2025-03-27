<script setup lang="ts">

// FIXME - Perlu cara untuk passthrough props, event, dan slots ke component Button dari primevue
// FIXME - sekalian bisa modif atau nambahin props selagi passthrough

import Button from "primevue/button"
import type { LucideIcon } from "lucide-vue-next";

defineProps<{
	lucide?: LucideIcon
	severity?: string
}>()

</script>

<template>
	<Button :severity="severity">
		<template v-if="lucide" #icon>
			<component :is="lucide" :class="['w-4 h-4', (severity === undefined || severity === 'primary' ? 'text-primary-contrast' : 'text-primary')]" />
		</template>
	</Button>
</template>