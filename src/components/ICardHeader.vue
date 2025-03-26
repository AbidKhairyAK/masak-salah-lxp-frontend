<script setup lang="ts">
defineProps<{
	title: 			string,
	subtitle?:		string,
	titleClass?: 	string,
	subtitleClass?:	string,
}>()
</script>

<template>
	<section class="flex justify-between items-center mb-4">
		<div>
			<h1 :class="['text-2xl leading-8 text-color font-[325]', titleClass]">
				{{ title }}
			</h1>
			<p :class="['mt-1 leading-6 text-base font-thin text-muted-color font-normal', subtitleClass]">
				{{ subtitle }}
			</p>
		</div>
		
		<slot></slot>
	</section>
</template>