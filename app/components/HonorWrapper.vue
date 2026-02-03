<script setup lang="ts">
withDefaults(defineProps<{
  image: string
  title: string
}>(), {
})
</script>

<template>
  <div class="relative bg-amber-900 p-3 rounded-lg shadow-2xl border-1 border-amber-800">
    <div class="bg-[#FDF5E6] p-2 rounded text-center relative">
      <div class="absolute inset-0 border-2 border-yellow-600/20 m-2 rounded pointer-events-none" />

      <!-- 你的图片/内容 -->
      <img
        :src="image"
        class="w-full h-auto rounded shadow-sm"
      >

      <!-- 或文字内容 -->
      <div class="my-2 text-amber-900 font-serif">
        <h3 class="text-base font-bold">
          {{ title }}
        </h3>
      </div>
    </div>

    <!-- 立体高光效果 -->
    <div class="absolute inset-0 rounded-lg pointer-events-none bg-gradient-to-br from-white/10 to-transparent" />
  </div>
</template>
