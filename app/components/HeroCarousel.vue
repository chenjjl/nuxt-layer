<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

onMounted(() => {})
defineProps<{
  imgs: {
    src: string
    title: string
    description: string
    links: ButtonProps[]
  }[]
  height: string
}>()
const carousel = useTemplateRef('carousel')
const activeIndex = ref(0)

function onClickPrev() {
  activeIndex.value--
  carousel.value?.emblaApi?.scrollTo(activeIndex.value)
}
function onClickNext() {
  activeIndex.value++
  carousel.value?.emblaApi?.scrollTo(activeIndex.value)
}
function onSelect(index: number) {
  activeIndex.value = index
}
</script>

<template>
  <UCarousel
    ref="carousel"
    v-slot="{ item }"
    class="w-full relative hero-carousel"
    loop
    dots
    :auto-height="!height"
    :autoplay="{ delay: 2000 }"
    :items="imgs"
    @select="onSelect"
  >
    <img
      :src="item.src"
      :style="height ? 'height: 100vh;object-fit: cover;' : ''"
      class="w-full"
    >
    <div v-if="imgs.length > 1" class="arrows">
      <div class="chevron">
        <UIcon
          name="i-lucide-chevron-left"
          class="size-12 cursor-pointer"
          @click="onClickPrev"
        />
      </div>

      <div class="chevron">
        <UIcon
          name="i-lucide-chevron-right"
          class="size-12 cursor-pointer"
          @click="onClickNext"
        />
      </div>
    </div>
    <div class="content">
      <UPageHero
        class="hero"
        :title="item.title"
        :description="item.description"
        :links="item.links"
      />
    </div>
  </UCarousel>
</template>

<style scoped>
.hero-carousel {
  margin-bottom: 3rem;
}
.arrows {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;
  z-index: 9999;

  .chevron {
    color: white;
  }
}

.content {
  position: absolute;
  top: 20%;
  width: 100%;
  text-align: center;
  ::v-deep h1 {
    color: white !important;
  }
  ::v-deep .text-muted {
    color: white !important;
  }
}
</style>
