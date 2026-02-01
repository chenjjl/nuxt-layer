<script setup lang="ts">
interface Props {
  title: string
  description: string
  image: string
  to: string
  index: number
}

defineProps<Props>()

// 将序号格式化为两位数
const formatIndex = (i: number) => String(i + 1).padStart(2, '0')
</script>

<template>
  <NuxtLink
    :to="to"
    class="group relative flex h-[400px] w-full flex-col overflow-hidden transition-all duration-500 md:h-[500px] md:flex-1 md:hover:flex-[2]"
  >
    <!-- 背景图 -->
    <div class="absolute inset-0">
      <img
        :src="image"
        :alt="title"
        class="h-full w-full object-cover"
      >
      <!-- 默认遮罩 -->
      <div class="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-primary/80" />
    </div>

    <!-- 内容区域 -->
    <div class="relative z-10 flex h-full flex-col p-6 md:p-8">
      <!-- 序号 - 大背景数字 -->
      <div class="absolute left-4 top-4 text-6xl font-bold text-white/20 md:left-6 md:top-6 md:text-8xl">
        {{ formatIndex(index) }}
      </div>
      <!-- 底部内容 -->
      <div class="mt-auto">
        <!-- 标题 -->
        <h3 class="mb-4 text-xl font-bold text-white md:text-2xl">
          <span class="text-[var(--ui-secondary)]">{{ title.slice(0, 2) }}</span>{{ title.slice(2) }}
        </h3>

        <!-- 描述 - 默认隐藏，悬停显示 -->
        <div class="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-[300px] group-hover:opacity-100">
          <p class="text-sm leading-relaxed text-white/90 md:text-base">
            {{ description }}
          </p>
        </div>
      </div>
    </div>

    <!-- 底部橙色边框 - 悬停显示 -->
    <div class="absolute bottom-0 left-0 h-1 w-0 bg-[var(--ui-secondary)] transition-all duration-500 group-hover:w-full" />
  </NuxtLink>
</template>

<style scoped>
/* 移动端优化：使用 active 状态代替 hover */
@media (max-width: 768px) {
  .group:active {
    flex: 2;
  }
}
</style>
