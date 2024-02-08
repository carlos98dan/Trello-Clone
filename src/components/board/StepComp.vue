<script setup lang="ts">
import { defineProps } from 'vue'
import type { Step } from '../../interfaces/Step'

const props = defineProps<{
  step: Step
}>()
</script>

<template>
  <h4>{{ props.step.title }}</h4>
  <ul>
    <li v-for="(item, index) in props.step.tasks" :key="index">
      <b>item.title</b>
      <p>item.description</p>
    </li>
  </ul>
</template>

<style scoped>
h4 {
  color: red;
}

h5 {
  color: blue;
}
</style>
