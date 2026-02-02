<!-- components/ServiceCard.vue -->
<script setup lang="ts">
const card = defineProps<{
  title: string
  description: string
  icon: string // 背景图片 URL
  image: string // 背景图片 URL
  to: string // 链接地址
}>()
</script>

<template>
  <NuxtLink
    v-if="card"
    :to="card.to"
    class="group relative block overflow-hidden rounded-lg aspect-[4/3] cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
  >
    <!-- 背景图片 -->
    <img
      :src="card.image"
      class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
    >

    <!-- 默认状态：底部渐变遮罩 + 标题 -->
    <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-4">
      <h3 class="text-lg font-bold text-white-important tracking-wide">{{ card.title }}</h3>
    </div>

    <!-- Hover 状态：品牌粉色遮罩（从下往上滑入） -->
    <div class="absolute inset-0 flex flex-col items-center justify-center bg-primary/95 p-6 text-center translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
      <!-- 图标（使用简单的 SVG 图标模拟视频中的房子图标，可根据业务替换） -->
      <div class="mb-4 text-white-important/90 transform scale-90 group-hover:scale-100 transition-transform duration-300 delay-75">
        <UIcon
          :name="card.icon"
          class="size-10 text-white-important"
        />
      </div>

      <h3 class="mb-3 text-xl font-bold text-white-important transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        {{ card.title }}
      </h3>

      <p class="mb-5 text-sm text-white-important line-clamp-3 leading-relaxed transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
        {{ card.description }}
      </p>

      <span class="inline-block rounded-full border border-white/90 px-6 py-1.5 text-sm text-white transition-all duration-200 hover:bg-white hover:text-primary transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-100">
        查看详情
      </span>
    </div>
  </NuxtLink>
</template>
