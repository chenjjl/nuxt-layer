<script setup lang="ts">
onMounted(() => {})
const props = withDefaults(defineProps<{
  title: string
  description: string
  to: string
}>(), {
})
</script>

<template>
  <UPageSection
    :title="title"
    :description="description"
    :links="[{
      label: '了解更多',
      variant: 'outline',
      icon: 'i-lucide-arrow-right',
      to: props.to
    }]"
  />
</template>

<style scoped>
</style>
