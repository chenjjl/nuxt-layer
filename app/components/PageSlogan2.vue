<script setup lang="ts">
onMounted(() => {})
const props = withDefaults(defineProps<{
  title: string
  description: string
  to?: string
  backgroundImage?: string
}>(), {
  backgroundImage: 'https://xuebo-1320531731.cos.ap-shanghai.myqcloud.com/2026/02/01/ead31edb20524b5286d0cf6e0113e6ca/bg4.jpg'
})
</script>

<template>
  <div
    class="py-12 sm:py-24 lg:py-24 bg-cover bg-top about-background h-200"
    :style="`background-image: url('${backgroundImage}');`"
  >
    <UContainer class="text-white font-bold">
      <div class="text-4xl">
        {{ title }}
      </div>
      <div class="text-xl mt-10 w-full lg:w-140 leading-10">
        {{ description }}
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
</style>
