<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  description: string
  image: string
  to: string
}>(), {
})
</script>

<template>
  <NuxtLink
    :to="to"
    class="group relative flex flex-col items-center overflow-hidden rounded-lg bg-[#F0F0F0] p-4 transition-all duration-300 hover:bg-primary hover:scale-110"
  >
    <!-- 圆形图片区域 -->
    <div class="relative mb-6 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-white/50 bg-white shadow-md transition-transform duration-300">
      <img
        :src="image"
        :alt="title"
        class="h-full w-full object-cover"
      >
    </div>

    <!-- 标题 -->
    <h3 class="mb-3 text-center text-2xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-white">
      {{ title }}
    </h3>

    <!-- 描述 -->
    <p class="mb-6 text-center text-sm text-gray-600 transition-colors duration-300 group-hover:text-white/90">
      {{ description }}
    </p>
  </NuxtLink>
</template>

<style scoped>
.hover-white:hover {
  color: white;
}
</style>
