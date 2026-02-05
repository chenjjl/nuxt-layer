<script setup lang="ts">
import { UPageSection } from '#components'
import HonorWrapper from './HonorWrapper.vue'

onMounted(() => {})
withDefaults(defineProps<{
  honors: {
    image: string
    title: string
  }[]
  title: string
  description: string
}>(), {
})
</script>

<template>
  <UPageSection
    :title="title"
    :description="description"
  >
    <UMarquee
      v-motion-slide-visible-bottom
      :duration="700"
      pause-on-hover
    >
      <HonorWrapper
        v-for="(item, index) in honors"
        :key="index"
        :image="item.image"
        :title="item.title"
        class="w-50 lg:w-55"
      />
    </UMarquee>
  </UPageSection>
</template>

<style scoped>
</style>
