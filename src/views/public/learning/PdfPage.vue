<script setup lang="ts">
defineProps<{
	url: string;
}>()
</script>

<template>
	<div>
	  <!-- PDF Section -->
	  <div class="relative bg-white overflow-hidden rounded-2xl p-4">
		<object
		  class="w-full min-h-screen rounded-xl"
		  data={{ url}}
		  type="application/pdf"
		>
		  <p class="text-white">
			Your browser does not support PDFs.
			<a
			  href={{ url }}
			  target="_blank"
			  rel="noopener noreferrer"
			  class="underline text-blue-400"
			>
			  Click here to download the PDF.
			</a>
		  </p>
		</object>
	  </div>
	</div>
  </template>
  