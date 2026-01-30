<script setup lang="ts">
onMounted(() => {})
withDefaults(defineProps<{
  products: {
    title: string
    description: string
    image: string
  }[]
}>(), {
})
</script>

<template>
  <UBlogPosts>
    <UBlogPost
      v-for="(product, index) in products"
      :key="index"
      v-bind="product"
    >
    </UBlogPost>
  </UBlogPosts>
</template>

<style scoped>
</style>
