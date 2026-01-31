<script setup lang="ts">
onMounted(() => {})
const props = withDefaults(defineProps<{
  title: string
  image: string
}>(), {
})
</script>

<template>
  <UCarousel
    class="w-full relative"
    auto-height
    :items="[props.image]"
    :ui="{
      container: 'height-modify'
    }"
  >
    <img
      :src="props.image"
      style="width: 100vw;"
      class="w-full"
    >
    <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white-important text-3xl lg:text-5xl">
      {{ title }}
    </span>
  </UCarousel>
</template>

<style>
.height-modify {
  height: unset !important;
}
</style>
