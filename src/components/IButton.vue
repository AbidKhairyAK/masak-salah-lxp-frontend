<script setup>
import Button from "primevue/button"

defineProps({
	yolo: Object
})

</script>

<template>
	<Button>
		<template #icon>
			<component :is="yolo" class="w-4 h-4" />
		</template>
	</Button>
</template>