<script setup lang="ts">
import { defineProps, ref } from 'vue'
import type { Step } from '@/interfaces/Step'
import type { Task } from '@/interfaces/Task'

const props = defineProps<{
  step: Step
}>()

const updatedStep = ref(props.step)

const dragstart = (index: number, task: Task, event: DragEvent) => {
  event.dataTransfer!.setData('drag/index', index.toString())
  event.dataTransfer!.setData('drag/item', JSON.stringify(task))
}

const dragover = (event: DragEvent) => {
  event.preventDefault()
}

const drop = (index: number, event: DragEvent) => {
  event.preventDefault()

  const draggedIndex = Number(event.dataTransfer!.getData('drag/index'))
  const draggedTask: Task = JSON.parse(event.dataTransfer!.getData('drag/item'))

  if (draggedIndex !== index) {
    const tasks = [...updatedStep.value.tasks]
    tasks.splice(draggedIndex, 1)
    tasks.splice(index, 0, draggedTask)
    console.log(tasks)
    updatedStep.value.tasks = tasks
  }
}
</script>

<template>
  <article>
    <h4>{{ updatedStep.title }}</h4>
    <ul>
      <li
        v-for="(item, index) in updatedStep.tasks"
        :key="index"
        draggable="true"
        @dragstart="dragstart(index, item, $event)"
        @dragover="dragover($event)"
        @drop="drop(index, $event)"
      >
        <b>{{ item.task }}</b>
        <p>{{ item.description }}</p>
      </li>
    </ul>
  </article>
</template>

<style scoped>
h4 {
  color: red;
}

h5 {
  color: blue;
}
</style>
