<script setup lang="ts">
import type { CarouselItem } from '@nuxt/ui'

const props = defineProps<{
  items?: CarouselItem[]
}>()
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    v-motion-slide-visible-bottom
    :duration="700"
    arrows
    loop
    dots
    :autoplay="{ delay: 2000 }"
    :prev="{ color: 'primary' }"
    :next="{ color: 'primary' }"
    :items="props.items"
    :ui="{ item: 'basis-1/3' }"
    class="w-full mx-auto hidden md:flex lg:flex"
  >
    <slot
      name="default"
      v-bind="{ item }"
    />
  </UCarousel>
  <div
    v-for="(item, index) in props.items"
    :key="index"
    class="flex md:hidden lg:hidden"
  >
    <div
      v-motion-slide-visible-left
      :duration="700"
      class="w-full"
    >
      <slot
        name="default"
        v-bind="{ item }"
      />
    </div>
  </div>
</template>
