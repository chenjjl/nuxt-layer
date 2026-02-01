<script setup lang="ts">
interface Card {
  title: string
  description: string
  image: string
  to: string
}

interface Props {
  cards: Card[]
}

defineProps<Props>()
</script>

<template>
  <!-- 桌面端：横向展开布局 -->
  <div class="hidden md:flex md:w-full md:flex-row">
    <PageCard3
      v-for="(item, index) in cards"
      :key="index"
      :title="item.title"
      :description="item.description"
      :image="item.image"
      :to="item.to"
      :index="index"
    />
  </div>

  <!-- 移动端：网格布局 -->
  <div class="grid grid-cols-1 gap-4 md:hidden">
    <NuxtLink
      v-for="(item, index) in cards"
      :key="index"
      :to="item.to"
      class="group relative flex h-[200px] flex-col overflow-hidden rounded-lg"
    >
      <!-- 背景图 -->
      <div class="absolute inset-0">
        <img
          :src="item.image"
          :alt="item.title"
          class="h-full w-full object-cover"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-[#1E5AA8]/90 via-black/40 to-transparent" />
      </div>

      <!-- 内容 -->
      <div class="relative z-10 flex h-full flex-col p-4">
        <!-- 序号 -->
        <div class="absolute right-4 top-4 text-4xl font-bold text-white/30">
          {{ String(index + 1).padStart(2, '0') }}
        </div>

        <!-- 底部内容 -->
        <div class="mt-auto">
          <h3 class="mb-2 text-lg font-bold text-white">
            <span class="text-[#E87B17]">{{ item.title.slice(0, 2) }}</span>{{ item.title.slice(2) }}
          </h3>
          <p class="line-clamp-2 text-sm text-white/80">
            {{ item.description }}
          </p>
        </div>
      </div>

      <!-- 底部橙色边框 -->
      <div class="absolute bottom-0 left-0 h-1 w-full bg-[#E87B17]" />
    </NuxtLink>
  </div>
</template>
