import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref<Task[]>([])

  const getTasks = computed(() => tasks.value)

  const addTask = (task: Task) => {
    tasks.value = [...tasks.value, task]
  }

  return { tasks, getTasks, addTask }
})

export interface Task {
  title: string
  description: string
}
