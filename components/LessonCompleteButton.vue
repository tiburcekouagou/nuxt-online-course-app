<script setup lang="ts">
const model = defineModel()
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
    v-model="model"
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