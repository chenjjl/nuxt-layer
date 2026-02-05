<script setup lang="ts">
interface StatisticsItem {
  value: string
  label: string
}

interface StatisticsData {
  title?: string
  description?: string
  items: StatisticsItem[]
}

const props = withDefaults(defineProps<{
  data: StatisticsData
}>(), {
})

// 默认标题
const defaultTitle = '我们的规模'
</script>

<template>
  <div
    class="relative w-full py-16 lg:py-24"
    :style="{
      backgroundImage: 'url(https://xuebo-1320531731.cos.ap-shanghai.myqcloud.com/2026/02/02/74c62267b9934597bda9202536ade768/skyline-255116_1280.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }"
  >
    <!-- 深色遮罩 -->
    <div class="absolute inset-0 bg-[#0a1628]/85" />

    <!-- 内容区域 -->
    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 标题 -->
      <div class="mb-12 text-center lg:mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-white">
          {{ data.title || defaultTitle }}
        </h2>
      </div>

      <!-- 统计数据 -->
      <div
        v-motion-slide-visible-bottom
        :duration="700"
        class="grid grid-cols-2 gap-8 lg:grid-cols-6 lg:gap-6"
      >
        <div
          v-for="(item, index) in data.items"
          :key="index"
          class="flex flex-col items-center text-center"
        >
          <div class="mb-2 text-3xl font-bold text-white lg:text-4xl">
            {{ item.value }}
          </div>
          <div class="text-sm text-white/70 lg:text-base">
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
