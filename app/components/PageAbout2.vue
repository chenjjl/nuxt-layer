<script setup lang="ts">
import PageStatistics2 from './PageStatistics2.vue'

onMounted(() => {})
withDefaults(defineProps<{
  title: string
  description: string
  image: string
  backgroundImage?: string
  content: string
  to: string
  statistics2?: {
    number: string
    unit: string
    label: string
  }[]
}>(), {
  backgroundImage: 'https://xuebo-1320531731.cos.ap-shanghai.myqcloud.com/2026/02/01/ef1e574225f043bb98510f5e88b24f8b/%E6%9C%AA%E5%91%BD%E5%90%8D%E7%9A%84%E8%AE%BE%E8%AE%A1%20(14)svsfweq.jpg'
})
</script>

<template>
  <div
    class="py-12 sm:py-24 lg:py-24 bg-cover bg-top about-background"
    :style="`background-image: url('${backgroundImage}');`"
  >
    <UContainer class="container">
      <div class="pb-10">
        <div class="text-4xl lg:text-5xl font-bold text-center text-white">
          {{ title }}
        </div>
        <div class="color-grey-100 text-xl mt-3.5 text-center text-white">
          {{ description }}
        </div>
      </div>
      <div class="lg:flex justify-between">
        <div class="lg:w-1/2">
          <img
            :src="image"
            class="w-full rounded-xl object-cover shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
        </div>
        <div class="lg:w-1/2 text-white text-xl mt-8 lg:mt-0 lg:ml-10 font-bold">
          <p>{{ content }}</p>
          <div class="text-center lg:text-left">
            <UButton
              class="mt-8 bg-white text-primary font-bold hover:bg-primary hover:text-white border-0"
              trailing-icon="i-lucide-arrow-right"
              :to="to"
            >
              了解更多
            </UButton>
          </div>
        </div>
      </div>
      <div
        v-if="statistics2"
        class="mt-8"
      >
        <PageStatistics2
          :items="statistics2"
        />
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
.about-background {
  position: relative;
}

.about-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: color-mix(in srgb, var(--ui-primary) 25%, transparent);
  z-index: 1;
}

/* 确保内容在遮罩之上 */
.container {
  position: relative;
  z-index: 2;
}
</style>
