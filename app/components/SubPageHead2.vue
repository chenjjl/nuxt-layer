<script setup lang="ts">
withDefaults(defineProps<{
  titleEn?: string
  titleZh?: string
  subtitle?: string
  image?: string
}>(), {
  image: 'https://xuebo-1320531731.cos.ap-shanghai.myqcloud.com/2026/02/01/fdd9dfa5c5f34017b527150bd7abe991/tits1.png'
})
</script>

<template>
  <div class="relative h-95 overflow-hidden">
    <!-- 背景图 -->
    <div
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url('${image}')` }"
    />

    <!-- 左侧渐变遮罩 -->
    <div class="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />

    <!-- 内容区域 -->
    <UContainer class="relative h-full flex items-center">
      <div class="flex flex-col text-white font-bold">
        <div class="text-4xl mb-2">
          {{ titleEn }}
        </div>
        <div class="text-4xl mb-6">
          {{ titleZh }}
        </div>
        <p
          class="text-lg text-white"
          v-html="subtitle"
        />
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
</style>
