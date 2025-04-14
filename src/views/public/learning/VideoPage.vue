<template>
	<div>
	  <!-- Video Player Section -->
	  <div class="relative bg-gray-900 overflow-hidden">
		<iframe
		  class="w-full aspect-video"
		  :src="videoUrl"
		  title="YouTube video player"
		  frameborder="0"
		  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		  referrerpolicy="strict-origin-when-cross-origin"
		  allowfullscreen
		></iframe>
	  </div>
  
		<Tabs value="0">
			<TabList>
				<Tab value="0">Overview</Tab>
			</TabList>
			<TabPanels>
				<TabPanel value="0">
				<!-- Course Content -->
				<div class="p-4">
					<h1 class="text-2xl font-bold">{{ topic.title }}</h1>
					<p class="text-lg mt-2">
					Learn Python like a Professional. Start from the basics and go all the way to creating your own applications and games.
					</p>
				</div>				
					
				</TabPanel>
			</TabPanels>
		</Tabs>
	</div>
</template>
  
<script setup>
  import { ref, onMounted, computed } from 'vue';
  
  const props = defineProps({
	lessonVideoUrl: {
	  type: String,
	  required: true
	},
	topicTitle: {
	  type: String,
	  default: 'Learn Python like a Professional'
	},
	cindyBaseUrl: {
	  type: String,
	  required: true
	}
  });
  
  // State
  const chatVisible = ref(false);
  const topic = ref({ title: props.topicTitle });
  
  // Navigation Tabs
  const navigationItems = ref([
	{ label: 'Overview', icon: 'pi pi-search' },
	{ label: 'Q&A', icon: 'pi pi-comments' },
	{ label: 'Notes', icon: 'pi pi-file' },
	{ label: 'Announcements', icon: 'pi pi-bell' },
	{ label: 'Reviews', icon: 'pi pi-star' },
	{ label: 'Learning tools', icon: 'pi pi-book' }
  ]);
  
  // Computed video URL from prop
  const videoUrl = computed(() => "https://www.youtube.com/embed/8jF2quSwkjg");
  
  // Toggle chat visibility
  function toggleChat(event) {
	chatVisible.value = !chatVisible.value;
	event.stopPropagation();
  }
  
  // Lifecycle - close chat when clicking outside
  onMounted(() => {
	document.addEventListener('click', (event) => {
	  const toggleBtn = document.getElementById('toggle-btn');
	  const chatIframe = document.getElementById('chat-iframe');
	  if (toggleBtn && chatIframe) {
		if (!toggleBtn.contains(event.target) && !chatIframe.contains(event.target)) {
		  chatVisible.value = false;
		}
	  }
	});
  
	const chatIframe = document.getElementById('chat-iframe');
	if (chatIframe) {
	  chatIframe.addEventListener('click', (event) => {
		event.stopPropagation();
	  });
	}
  });
</script>
  