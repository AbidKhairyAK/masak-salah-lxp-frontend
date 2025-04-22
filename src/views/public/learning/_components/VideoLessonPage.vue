<script setup lang="ts">
defineProps<{
	url: string;
	title: string;
}>();  
</script>
  
<template>
	<div>
	  <!-- Video Player Section -->
	  <div class="relative bg-gray-900 overflow-hidden rounded-2xl mb-8">
		<iframe
		  class="w-full aspect-video"
		  :src="url"
		  title="YouTube video player"
		  frameborder="0"
		  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		  referrerpolicy="strict-origin-when-cross-origin"
		  allowfullscreen
		></iframe>
	  </div>
	  
	  <Card class="!shadow-none">
		<template #content>
		  <Tabs value="0">
			  <TabList>
				  <Tab value="0">Overview</Tab>
			  </TabList>
			  <TabPanels>
				  <TabPanel value="0">
				  <!-- Course Content -->
				  <div class="p-4">
					  <h1 class="text-2xl font-bold">{{ title }}</h1>
					  <p class="text-lg mt-2">
					  Learn Python like a Professional. Start from the basics and go all the way to creating your own applications and games.
					  </p>
				  </div>				
					  
				  </TabPanel>
			  </TabPanels>
		  </Tabs>
	  </template>
	  </Card>
	</div>
</template>