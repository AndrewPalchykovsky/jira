import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref<Task[]>([])

  const getTask = (id: string) => {
    return computed(() => tasks.value.find((t) => t.id === id) || null)
  }
  const addTask = (task: Omit<Task, 'id'>) => {
    const newTask: Task = {
      id: uuidv4(),
      ...task
    }
    tasks.value = [...tasks.value, newTask]
  }

  const deleteTask = (id: string) => {
    tasks.value = tasks.value.filter((item) => item.id !== id)
  }

  const updateTask = (id: string, updatedTask: Partial<Omit<Task, 'id'>>) => {
    const index = tasks.value.findIndex((task) => task.id === id)
    if (index !== -1) {
      tasks.value[index] = { ...tasks.value[index], ...updatedTask }
    }
  }

  return { tasks, getTask, addTask, deleteTask, updateTask }
})

export interface Task {
  id: string
  title: string
  description: string
}
