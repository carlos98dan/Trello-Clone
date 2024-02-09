<script setup lang="ts">
import type { Step } from '@/interfaces/Step'

import StepComp from '@/components/board/StepComp.vue'

const steps: Step[] = [
  {
    title: 'Pending',
    tasks: [
      { task: 'Task 1', description: 'description 1' },
      { task: 'Task 2', description: 'description 2' },
      { task: 'Task 3', description: 'description 3' }
    ]
  },
  {
    title: 'Processed',
    tasks: [
      { task: 'Task 1', description: 'description 1' },
      { task: 'Task 2', description: 'description 2' },
      { task: 'Task 3', description: 'description 3' }
    ]
  },
  {
    title: 'Finish',
    tasks: [
      { task: 'Task 1', description: 'description 1' },
      { task: 'Task 2', description: 'description 2' },
      { task: 'Task 3', description: 'description 3' }
    ]
  },
  {
    title: 'Stopped',
    tasks: [
      { task: 'Task 1', description: 'description 1' },
      { task: 'Task 2', description: 'description 2' },
      { task: 'Task 3', description: 'description 3' }
    ]
  }
]
</script>

<template>
  <section class="board">
    <h3 class="board__title">Board</h3>
    <article class="board__step-list">
      <StepComp class="board__step-item" v-for="(item, index) in steps" :key="index" :step="item" />
    </article>
  </section>
</template>

<style>
.board__step-list {
  display: grid;
  grid-template-columns: auto auto auto auto;
}
</style>
