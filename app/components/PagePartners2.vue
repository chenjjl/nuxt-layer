<script setup lang="ts">
onMounted(() => {})
withDefaults(defineProps<{
  logos: string[]
}>(), {
})
</script>

<template>
  <UMarquee pause-on-hover>
    <div
      v-for="(item, index) in logos"
      :key="index"
      class="w-30 lg:w-40"
    >
      <img
        :src="item"
        class="h-16 object-contain w-full"
      >
    </div>
  </UMarquee>
</template>

<style scoped>
</style>
