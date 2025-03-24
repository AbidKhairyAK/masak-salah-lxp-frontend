<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<nav class="p-4 flex gap-4">
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/about">About</RouterLink>
	</nav>

	<hr class="mb-8">

	<RouterView />
</template>