<script setup lang="ts">

const props = withDefaults(defineProps<{
  advantages: {
    title: string
    icon: string
    image: string
    description: string
  }[],
  title?: string
}>(), {
  title: '我们的优势'
})

const activeIndex = ref(0)

const activeAdvantage = computed(() => {
  return props.advantages[activeIndex.value] || props.advantages[0]
})

function setActiveIndex(index: number) {
  activeIndex.value = index
}
</script>

<template>
  <div class="relative min-h-[600px] overflow-hidden">
    <!-- 背景图 -->
    <div
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(${activeAdvantage?.image})` }"
    />
    <!-- 深蓝色遮罩 -->
    <div class="absolute inset-0 bg-[#0a1a3a]/85" />

    <UContainer class="relative z-10 py-16">
      <!-- 标题 -->
      <slot name="title">
        <PageSection
          class="text-white"
          :cn="title"
        />
      </slot>

      <!-- 内容区 -->
      <div
        v-motion-slide-visible-left
        :duration="700"
        class="min-h-[280px] flex items-start"
      >
        <div class="max-w-xl">
          <h3 class="text-white text-3xl font-bold mb-4">
            {{ activeAdvantage?.title }}
          </h3>
          <p class="text-white/80 text-lg leading-relaxed">
            {{ activeAdvantage?.description }}
          </p>
        </div>
      </div>

      <!-- 底部图标卡片 -->
      <div
        v-motion-slide-visible-right
        :duration="700"
        class="mt-12"
      >
        <div class="flex flex-wrap justify-center gap-3">
          <button
            v-for="(item, index) in advantages"
            :key="index"
            class="group flex flex-col items-center justify-center px-4 py-3 rounded-lg transition-all duration-300 w-[150px]"
            :class="activeIndex === index ? 'bg-[#22c55e]' : 'bg-white/10 hover:bg-white/20'"
            @mouseenter="setActiveIndex(index)"
          >
            <UIcon
              :name="item.icon"
              class="w-6 h-6 mb-2"
              :class="activeIndex === index ? 'text-white' : 'text-white/80'"
            />
            <span
              class="text-sm text-center"
              :class="activeIndex === index ? 'text-white font-medium' : 'text-white/80'"
            >
              {{ item.title }}
            </span>
          </button>
        </div>
      </div>
    </UContainer>
  </div>
</template>
