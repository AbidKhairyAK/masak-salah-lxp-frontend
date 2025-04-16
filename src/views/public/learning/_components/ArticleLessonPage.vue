<script setup lang="ts">
defineProps<{
	content: string;
}>();
</script>
<template>
	<div>
	  <!-- Article Section -->
	  <div class="relative bg-white overflow-hidden rounded-2xl p-16 min-h-screen">
		<article class="prose lg:prose-lg max-w-none" v-html="content"></article>
	  </div>
	</div>
  </template>
  