<script lang="ts" setup>
import TheCard from '@/components/TheCard.vue'
import CreateCard from '@/components/CreateCard.vue'
import { useTaskStore } from '@/stores/task'
import { storeToRefs } from 'pinia'

const store = useTaskStore()
const { tasks } = storeToRefs(store)
</script>

<template>
  <main>
    <TheCard
      v-for="(task, index) in tasks"
      :id="task.id"
      :key="index"
      :description="task.description"
      :title="task.title"
    />
    <CreateCard />
  </main>
</template>
