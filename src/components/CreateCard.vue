<script lang="ts" setup>
import { ref } from 'vue'
import { useTaskStore } from '@/stores/task'

const title = ref('')
const description = ref('')

const store = useTaskStore()

const { addTask } = store

const addItem = () => {
  addTask({
    title: title.value,
    description: description.value
  })
  title.value = ''
  description.value = ''
}
</script>

<template>
  <v-card class="mx-auto my-5" width="400">
    <v-form class="pa-2" @submit.prevent>
      <v-text-field v-model.trim="title" label="Title"></v-text-field>
      <v-text-field v-model.trim="description" label="Description"></v-text-field>
      <v-btn block class="my-2" color="indigo-darken-3" @click="addItem">Submit</v-btn>
    </v-form>
  </v-card>
</template>

<style scoped></style>
