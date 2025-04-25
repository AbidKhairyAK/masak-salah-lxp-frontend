<script setup>
import { ref, watch } from 'vue';
import { X, ListIcon } from 'lucide-vue-next';

const props = defineProps({
	isOpen: {
		type: Boolean,
		default: false
	},
	title: {
		type: String,
		default: 'Sidebar'
	},
	titleIcon: {
		type: Object,
		default: () => ListIcon
	},
	width: {
		type: String,
		default: 'w-100'
	},
	position: {
		type: String,
		default: 'right'
	}
});

const emit = defineEmits(['update:isOpen']);

const internalIsOpen = ref(props.isOpen);

watch(() => props.isOpen, (newValue) => {
	internalIsOpen.value = newValue;
});

watch(internalIsOpen, (newValue) => {
	emit('update:isOpen', newValue);
});

const toggleSidebar = () => {
	internalIsOpen.value = !internalIsOpen.value;
};

const getPositionClasses = () => {
	if (props.position === 'right') {
		return {
			sidebar: 'right-0',
			transform: internalIsOpen.value ? 'translate-x-0' : 'translate-x-full lg:translate-x-0',
			toggleButton: 'right-0 rounded-l-full'
		};
	} else {
		return {
			sidebar: 'left-0',
			transform: internalIsOpen.value ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
			toggleButton: 'left-0 rounded-r-full'
		};
	}
};
</script>

<template>
	<div class="relative">
		<!-- Mobile toggle button -->
		<button @click="toggleSidebar" :class="[
			'fixed top-20 z-50 lg:hidden bg-gray-800 text-white p-3 shadow-lg',
			getPositionClasses().toggleButton
		]">
			<component :is="!internalIsOpen ? titleIcon : X" class="w-6 h-6" />
		</button>

		<!-- Sidebar -->
		<aside :class="[
			'fixed lg:relative top-0 min-h-full bg-gray-800 rounded-none lg:rounded-2xl transition-all duration-300 text-white flex flex-col overflow-y-auto',
			width,
			'lg:transform-none',
			getPositionClasses().sidebar,
			getPositionClasses().transform,
			'z-40 lg:z-30'
		]">
			<div class="flex items-center p-4 gap-4">
				<component :is="titleIcon" class="w-6 h-6" />
				<h2 class="text-2xl font-bold">{{ title }}</h2>
			</div>

			<div class="flex-1 overflow-y-auto">
				<slot></slot>
			</div>
		</aside>

		<!-- Overlay -->
		<div v-if="internalIsOpen" @click="toggleSidebar" class="fixed inset-0 bg-gray-800/50 z-30 lg:hidden"></div>
	</div>
</template>