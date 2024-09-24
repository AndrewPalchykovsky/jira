<script lang="ts" setup>
import { useTaskStore } from '@/stores/task'
import { ref } from 'vue'
import EditTaskModal from '@/components/EditTaskModal.vue'

const props = defineProps<{
  id: string
  title: string
  description: string
}>()
const store = useTaskStore()
const { deleteTask } = store
const dialog = ref(false)
const taskId = ref('')

const openModal = (id: string) => {
  taskId.value = id
  dialog.value = true
}
</script>

<template>
  <v-card class="mx-auto" prepend-icon="$vuetify" subtitle="tags" width="400">
    <template v-slot:title>
      <span class="font-weight-black">{{ title }}</span>
    </template>

    <v-card-text class="bg-surface-light pt-4">
      {{ description }}
    </v-card-text>

    <v-btn class="ma-2" color="orange" @click="openModal(props.id)">Edit</v-btn>
    <v-btn class="my-2" color="red-accent-4" @click="deleteTask(props.id)">Delete</v-btn>
  </v-card>

  <EditTaskModal :id="taskId" v-model:dialog="dialog" @close="dialog = false" />
</template>

<style scoped></style>
