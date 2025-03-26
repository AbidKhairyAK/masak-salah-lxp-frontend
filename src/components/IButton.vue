<script setup>
import Button from "primevue/button"

defineProps({
	lucide: Object
})

</script>

<template>
	<Button>
		<template #icon>
			<component :is="lucide" class="w-4 h-4" />
		</template>
	</Button>
</template>