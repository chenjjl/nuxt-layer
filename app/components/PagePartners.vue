<script setup lang="ts">
onMounted(() => {})
withDefaults(defineProps<{
  logos: string[]
}>(), {
})
</script>

<template>
  <div class="grid grid-cols-3 gap-4 lg:grid-cols-6 place-items-center">
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
  </div>
</template>

<style scoped>
</style>
