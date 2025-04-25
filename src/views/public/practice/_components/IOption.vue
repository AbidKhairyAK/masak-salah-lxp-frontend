<template>
  <div
    :class="[
      'flex items-center p-3 rounded-lg border cursor-pointer transition',
      selected ? 'bg-green-100 border-green-500' : 'bg-white border-gray-300 hover:border-green-400',
      'option-item'
    ]"
    @click="$emit('select', value)"
    :aria-checked="selected"
    role="radio"
    tabindex="0"
    @keydown.enter="$emit('select', value)"
    @keydown.space.prevent="$emit('select', value)"
  >
    <div class="relative flex items-center">
      <input
        type="radio"
        :name="name"
        :value="value"
        class="sr-only"
        :checked="selected"
        :id="inputId"
        @change="$emit('select', value)"
        :disabled="disabled"
      />
      <div
        class="flex h-8 w-8 items-center justify-center rounded-full bg-secondary font-bold"
      >
        {{ letter }}
      </div>
    </div>
    <span class="flex-1 select-none ml-3">{{ label }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  value: String,
  selected: Boolean,
  letter: String,
  inputId: String,
  name: String,
  disabled: Boolean
});
defineEmits(['select']);
</script>

<style scoped>
</style>