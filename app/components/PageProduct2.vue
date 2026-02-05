<script setup lang="ts">
withDefaults(defineProps<{
  products: {
    title: string
    image: string
    link?: string
  }[]
  title: string
  description: string
}>(), {
})

// 计算卡片在网格中的跨度：奇数行(0,3,4,7...)小+大，偶数行(1,2,5,6...)大+小
function getColSpan(index: number): string {
  const row = Math.floor(index / 2)
  const isFirstInRow = index % 2 === 0
  // 奇数行(0,2,4...)：第一个小(1)，第二大(2)
  // 偶数行(1,3,5...)：第一个大(2)，第二个小(1)
  if (row % 2 === 0) {
    return isFirstInRow ? '' : 'lg:col-span-2'
  } else {
    return isFirstInRow ? 'lg:col-span-2' : ''
  }
}
</script>

<template>
  <UContainer class="py-12 sm:py-24 lg:py-24">
    <!-- Header -->
    <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
      <div class="text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold">
        {{ title }}
      </div>
      <div class="text-base sm:text-lg text-muted max-w-md">
        {{ description }}
      </div>
    </div>

    <!-- Products Grid - 不对称布局 -->
    <div
      v-motion-slide-visible-left
      :duration="700"
      class="grid grid-cols-1 lg:grid-cols-3 gap-4"
    >
      <div
        v-for="(product, index) in products"
        :key="index"
        :class="['group relative overflow-hidden rounded-2xl bg-gray-100 h-[240px] sm:h-[280px] lg:h-[320px] cursor-pointer', getColSpan(index)]"
      >
        <img
          :src="product.image"
          :alt="product.title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        >
        <div class="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
        <div class="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <span class="text-white font-medium text-lg">{{ product.title }}</span>
          <UButton
            :to="product.link"
            color="primary"
            variant="solid"
            size="sm"
            class="rounded-lg"
            icon="i-heroicons-arrow-right"
          />
        </div>
      </div>
    </div>
  </UContainer>
</template>

<style scoped>
</style>
