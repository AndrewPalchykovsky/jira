<script lang="ts" setup>
import { useTaskStore } from '@/stores/task'
import { ref, watch } from 'vue'

const props = defineProps<{ id: string; dialog: boolean }>()
const emit = defineEmits(['update:dialog'])
const store = useTaskStore()
const task = ref(store.getTask(props.id))
const editedTitle = ref(task.value?.title || '')
const editedDescription = ref(task.value?.description || '')

watch(
  () => props.id,
  (newId) => {
    const task = store.getTask(newId)
    if (task.value) {
      editedTitle.value = task.value.title
      editedDescription.value = task.value.description
    }
  },
  { immediate: true }
)

const saveTask = () => {
  store.updateTask(props.id, {
    title: editedTitle.value,
    description: editedDescription.value
  })
  emit('update:dialog', false)
}
</script>

<template>
  <v-dialog :model-value="dialog" max-width="600">
    <v-card>
      <v-card-title>Edit Task</v-card-title>
      <v-card-text>
        <v-text-field v-model="editedTitle" label="Title"></v-text-field>
        <v-text-field v-model="editedDescription" label="Description"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="saveTask">Save</v-btn>
        <v-btn color="secondary" @click="emit('update:dialog', false)">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
