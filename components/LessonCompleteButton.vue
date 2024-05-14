<script setup lang="ts">
type Props = {
  modelValue: boolean;
};

const props = withDefaults(defineProps<Props>(), { modelValue: false });
const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>()
</script>

<template>
  <label 
  class="rounded text-white font-bold py-2 px-4 cursor-pointer"
  :class="{
    'bg-green-500': modelValue,
    'bg-gray-500': !modelValue
  }"
  >
    <input type="checkbox" 
    :value="props.modelValue"
    @input="() =>emit('update:modelValue', !modelValue)"
    class="hidden"
     />
     {{ modelValue ? 'Completed' : 'Mark as completed' }}
    </label>
</template>

<style scoped>
::selection {
    display: none;
}
</style>