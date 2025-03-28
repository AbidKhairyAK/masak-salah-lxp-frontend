<script setup>
import { Home } from 'lucide-vue-next';
import { ref } from 'vue';


const model = ref([
	{ label: 'Home',					items: [
		{ label: 'Dashboard',			icon: Home,			to: '/admin' },        
	]},
])

const item = ref({ label: 'Dashboard',			icon: Home,			to: '/admin' })
</script>

<template>
	<div
        class="config-panel hidden absolute top-[3.25rem] right-0 w-64 p-4 bg-surface-0 dark:bg-surface-900 border border-surface rounded-border origin-top shadow-[0px_3px_5px_rgba(0,0,0,0.02),0px_0px_2px_rgba(0,0,0,0.05),0px_1px_4px_rgba(0,0,0,0.08)]"
    >
        <div class="flex flex-col gap-4">
			<ul class="layout-menu">
				
					<app-menu-item :item="item" :index="i"></app-menu-item>
					
				
			</ul>
        </div>
    </div>
</template>