<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  image: string
  icon: string
  to: string
}>()

// 将描述按换行符分割成多行
const descriptionLines = computed(() => {
  return props.description.split(/\\n|\n/).filter(line => line.trim())
})
</script>

<template>
  <NuxtLink
    :to="props.to"
    class="group relative block overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
  >
    <!-- 背景图片 -->
    <img
      :src="props.image"
      class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
    >

    <!-- 渐变遮罩 -->
    <div class="absolute inset-0 bg-gradient-to-r from-[#1a5a8a]/90 via-[#1a5a8a]/60 to-transparent" />

    <!-- 内容区域 -->
    <div class="absolute inset-0 flex flex-col justify-between p-6">
      <!-- 上部：图标 + 标题 + 描述 -->
      <div>
        <!-- 图标 -->
        <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
          <UIcon
            :name="icon"
            class="size-8 text-white"
          />
        </div>

        <!-- 标题 -->
        <h3 class="mb-3 text-2xl font-bold text-white">
          {{ props.title }}
        </h3>

        <!-- 描述（多行） -->
        <div class="space-y-1">
          <p
            v-for="(line, index) in descriptionLines"
            :key="index"
            class="text-sm text-white md:text-white/0 lg:text-white/0 group-hover:text-white leading-relaxed"
          >
            {{ line.substring(0, 80) }}<span v-if="line.length > 100">...</span>
          </p>
        </div>
      </div>

      <!-- 底部：了解更多按钮 -->
      <div>
        <span class="inline-flex items-center gap-2 rounded-full border border-white/80 px-5 py-2 text-sm text-white transition-all duration-200 group-hover:bg-white group-hover:text-[#1a5a8a]">
          了解更多
          <UIcon
            name="i-heroicons-arrow-right"
            class="size-4 transition-transform duration-200 group-hover:translate-x-1"
          />
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
