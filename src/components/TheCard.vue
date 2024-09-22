<script lang="ts" setup>
const props = defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <v-card class="mx-auto" prepend-icon="$vuetify" subtitle="tags" width="400">
    <template v-slot:title>
      <span class="font-weight-black">{{ title }}</span>
    </template>

    <v-card-text class="bg-surface-light pt-4">
      {{ description }}
    </v-card-text>
  </v-card>
</template>

<style scoped></style>
