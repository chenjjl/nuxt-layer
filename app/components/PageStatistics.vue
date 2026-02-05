<script setup lang="ts">
onMounted(() => {})
withDefaults(defineProps<{
  items: {
    label: string
    value: string
  }[]
  color?: string
}>(), {
  color: 'var(--ui-primary)'
})
</script>

<template>
  <div v-motion-slide-visible-bottom duration="600" class="page-statistics">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="basis-1/3 lg:basis-1/6"
    >
      <div
        class="text-3xl font-bold mb-4"
        :style="{ color: color }"
      >
        {{ item.value }}
      </div>
      <div class="text-sm text-muted-foreground">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-statistics {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
