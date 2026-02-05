<script setup lang="ts">
onMounted(() => {})
withDefaults(defineProps<{
  title: string
  description?: string
}>(), {
})
</script>

<template>
  <div
    class="flex flex-col justify-center relative py-10"
  >
    <div
      class="absolute top-0 left-0 right-0 w-full flex justify-center z-0"
    >
      <img src="https://xuebo-1320531731.cos.ap-shanghai.myqcloud.com/2026/02/01/0093a128d5e6415ab01edbf7d58b353d/tits1.png">
    </div>
    <div
      v-motion-fade-visible
      :duration="700"
      class="text-4xl lg:text-5xl font-bold text-center z-10"
    >
      {{ title }}
    </div>
    <div
      v-motion-fade-visible
      :duration="700"
      class="color-grey-100 mt-3.5 text-center z-10"
    >
      {{ description }}
    </div>
  </div>
</template>

<style scoped>
</style>
