<script setup lang="ts">
onMounted(() => {})
const props = withDefaults(defineProps<{
  title: string
  description: string
  img: string
  to: string
}>(), {
})
</script>

<template>
  <UPageSection
    :title="title"
    :description="description"
    orientation="horizontal"
    :links="[{
      label: '了解更多',
      variant: 'outline',
      icon: 'i-lucide-arrow-right',
      to: props.to
    }]"
  >
    <img
      :src="img"
      width="462"
      height="260"
      alt="Illustration"
      class="w-full rounded-lg"
    >
  </UPageSection>
</template>

<style scoped>
</style>
