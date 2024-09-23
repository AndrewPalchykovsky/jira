<script lang="ts" setup>
import { useTaskStore } from '@/stores/task'

const props = defineProps<{
  id: string
  title: string
  description: string
}>()
const store = useTaskStore()
const { deleteTask } = store
</script>

<template>
  <v-card class="mx-auto" prepend-icon="$vuetify" subtitle="tags" width="400">
    <template v-slot:title>
      <span class="font-weight-black">{{ title }}</span>
    </template>

    <v-card-text class="bg-surface-light pt-4">
      {{ description }}
    </v-card-text>

    <v-btn class="my-2" color="red-accent-4" @click="deleteTask(props.id)">Delete</v-btn>
  </v-card>
</template>

<style scoped></style>
