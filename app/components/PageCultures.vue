<script setup lang="ts">
const props = defineProps<{
  cultures: {
    title: string
    description: string
    image: string
  }[]
}>()
</script>

<template>
  <UContainer
    v-motion-pop-visible
    :duration="700"
    class="py-12"
  >
    <slot name="title">
      <PageSection
        cn="企业文化"
        class="text-center"
      />
    </slot>

    <!-- 桌面端：三列不规则网格布局 -->
    <div
      class="hidden md:grid md:grid-cols-3 gap-5 mt-8"
      style="height: 420px;"
    >
      <!-- 左侧：大卡片（经营理念） -->
      <div class="relative overflow-hidden group h-full">
        <img
          :src="cultures[0]?.image"
          :alt="cultures[0]?.title"
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div class="absolute bottom-0 left-0 right-0 p-6">
          <h3 class="text-white text-2xl font-medium mb-4">
            {{ cultures[0]?.title }}
          </h3>
          <p class="text-white/90 text-sm leading-loose whitespace-pre-line">
            {{ cultures[0]?.description }}
          </p>
        </div>
      </div>

      <!-- 中间：两个小卡片 -->
      <div class="flex flex-col gap-5 h-full">
        <!-- 公司愿景 -->
        <div class="relative overflow-hidden group flex-1">
          <img
            :src="cultures[1]?.image"
            :alt="cultures[1]?.title"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <div class="absolute bottom-0 left-0 right-0 p-5">
            <h3 class="text-white text-xl font-medium mb-2">
              {{ cultures[1]?.title }}
            </h3>
            <p class="text-white/90 text-sm leading-relaxed">
              {{ cultures[1]?.description }}
            </p>
          </div>
        </div>

        <!-- 公司使命 -->
        <div class="relative overflow-hidden group flex-1">
          <img
            :src="cultures[2]?.image"
            :alt="cultures[2]?.title"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <div class="absolute bottom-0 left-0 right-0 p-5">
            <h3 class="text-white text-xl font-medium mb-2">
              {{ cultures[2]?.title }}
            </h3>
            <p class="text-white/90 text-sm leading-relaxed">
              {{ cultures[2]?.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- 右侧：大卡片（公司价值观） -->
      <div class="relative overflow-hidden group h-full">
        <img
          :src="cultures[3]?.image"
          :alt="cultures[3]?.title"
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div class="absolute bottom-0 left-0 right-0 p-6">
          <h3 class="text-white text-2xl font-medium mb-4">
            {{ cultures[3]?.title }}
          </h3>
          <p class="text-white/90 text-sm leading-loose whitespace-pre-line">
            {{ cultures[3]?.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- 移动端：单列布局 -->
    <div class="md:hidden flex flex-col gap-4 mt-8">
      <div
        v-for="(item, index) in cultures.slice(0, 4)"
        :key="index"
        class="relative overflow-hidden h-[200px]"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class="absolute inset-0 w-full h-full object-cover"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div class="absolute bottom-0 left-0 right-0 p-4">
          <h3 class="text-white text-lg font-medium mb-1">
            {{ item.title }}
          </h3>
          <p class="text-white/90 text-sm line-clamp-2">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </UContainer>
</template>
