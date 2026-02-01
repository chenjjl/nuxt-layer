<script setup lang="ts">
interface StatItem {
  number: string
  unit?: string
  label: string
  subLabel?: string
}

const props = withDefaults(defineProps<{
  items: StatItem[]
}>(), {
})

const themeClasses = computed(() => {
  return 'text-primary'
})
</script>

<template>
  <div class="w-full bg-transparent">
    <UContainer class="image-statistics">
      <div class="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-300/50">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="px-4 lg:px-8 py-6 text-center first:pl-0 last:pr-0 last:border-r-0"
          :class="themeClasses"
        >
          <!-- 数字 -->
          <div class="text-3xl lg:text-4xl font-bold tracking-tight mb-2">
            <span>{{ item.number }}</span>
            <span
              v-if="item.unit"
              class="text-2xl lg:text-3xl"
            >{{ item.unit }}</span>
          </div>

          <!-- 主标题 -->
          <div class="text-base lg:text-lg font-medium mb-1 opacity-90">
            {{ item.label }}
          </div>

          <!-- 副标题 -->
          <div
            v-if="item.subLabel"
            class="text-sm"
            :class="themeClasses"
          >
            {{ item.subLabel }}
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
/* 竖线分隔使用 divide-x，背景透明 */
.grid > div:not(:last-child) {
  /* @apply border-r border-gray-300; */
}

@media (min-width: 1024px) {
  .grid > div:nth-child(2) {
    @apply border-r;
  }
}
.image-statistics {
  background: rgba(255, 255, 255, 0.9);
}
</style>
