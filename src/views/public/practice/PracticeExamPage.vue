<script setup>
import { ref } from 'vue';
import IOption from '@/views/public/practice/_components/IOption.vue';

const question = ref({
	section: 'Quant',
	number: 8,
	text: "The arithmetic mean of the 5 consecutive integers starting with 's' is 'a'. What is the arithmetic mean of 9 consecutive integers that start with s + 2?",
	options: [
		{ label: '78', value: 'A' },
		{ label: '58', value: 'B' },
		{ label: '68', value: 'C' },
		{ label: '98', value: 'D' }
	],
	selected: 'B'
});

function selectOption(value) {
  question.value.selected = value;
}

</script>
<template>
	<!-- Question Card -->
	<Card class="mb-6 !shadow-none px-24 py-8">
		<template #title>
			<span class="text-sm font-light">{{ question.section }} - Question {{ question.number }}</span>
		</template>
		<template #content>
			<div class="mb-8 text-xl font-semibold">
				<p>{{ question.text }}</p>
			</div>
			<div class="space-y-2 text-lg" role="radiogroup">
				<IOption
					v-for="(option, idx) in question.options"
					:key="option.value"
					:label="option.label"
					:value="option.value"
					:letter="String.fromCharCode(65 + idx)"
					:inputId="'option' + idx"
					:name="'question' + question.number"
					:selected="question.selected === option.value"
					@select="selectOption"
				/>
			</div>
		</template>
	</Card>
</template>