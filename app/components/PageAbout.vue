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
    orientation="horizontal"
    :links="[{
      label: '了解更多',
      variant: 'outline',
      trailingIcon: 'i-lucide-arrow-right',
      to: props.to
    }]"
  >
    <template #title>
      <div
        v-motion-slide-visible-left
        :duration="700"
      >
        {{ title }}
      </div>
    </template>
    <template #description>
      <div
        v-motion-slide-visible-left
        :duration="700"
      >
        {{ description }}
      </div>
    </template>
    <img
      v-motion-slide-visible-right
      :duration="700"
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
