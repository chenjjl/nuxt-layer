<script setup lang="ts">
onMounted(() => {})
withDefaults(defineProps<{
  items: {
    number: string
    unit: string
    label: string
  }[]
  color?: string
}>(), {
  color: 'var(--ui-primary)'
})
</script>

<template>
  <div
    v-motion-slide-visible-bottom
    :duration="700"
    class="page-statistics"
  >
    <div
      v-for="(item, index) in items"
      :key="index"
      class="item flex rounded-lg"
    >
      <div
        class="text-5xl font-bold mb-4"
        :style="{ color: color }"
      >
        {{ item.number }}
      </div>
      <div class="text-xl text-muted-foreground ml-5">
        <div :style="{ color: color }">
          {{ item.unit }}
        </div>
        <div class="whitespace-nowrap">
          {{ item.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-statistics {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  .item {
    background-color: white;
    padding: 20px 40px;
    width: calc(50% - 10px);
    margin-top: 20px;
    background: linear-gradient(#FFF, #fef2e6);
  }
}
@media (max-width: 768px) {
  .page-statistics {
    .item {
      width: 100%;
    }
  }
}
</style>
