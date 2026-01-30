<script setup lang="ts">
onMounted(() => {})
withDefaults(defineProps<{
  cn: string
  en?: string
  lineColor?: string
}>(), {
  lineColor: 'var(--ui-primary)'
})
</script>

<template>
  <div class="page-section">
    <span class="text-4xl font-bold">{{ cn }}</span>
    <div
      class="split-line"
      :style="{ backgroundColor: lineColor }"
    />
    <span
      v-if="en"
      class="text-3xl"
    >{{ en }}</span>
  </div>
</template>

<style scoped>
.page-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .split-line {
    height: 4px;
    width: 40px;
    margin: 20px 0;
  }
}
</style>
