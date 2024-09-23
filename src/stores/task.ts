import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref<Task[]>([])

  const getTasks = computed(() => tasks.value)

  const addTask = (task: Task) => {
    tasks.value = [...tasks.value, task]
  }

  const deleteTask = (id: string) => {
    tasks.value = tasks.value.filter((item) => item.id !== id)
  }

  return { tasks, getTasks, addTask, deleteTask }
})

export interface Task {
  id: string
  title: string
  description: string
}
