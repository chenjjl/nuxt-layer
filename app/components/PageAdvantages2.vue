<script setup lang="ts">
interface AdvantageItem {
  title: string
  icon: string
  description: string
}

const props = defineProps<{
  advantages: AdvantageItem[]
  title: string
  description: string
  to: string
}>()
</script>

<template>
  <div
    class="relative bg-cover bg-center bg-no-repeat py-16 lg:py-24"
    style="background-image: url('https://xuebo-1320531731.cos.ap-shanghai.myqcloud.com/2026/02/03/419a9e5151ab4b4baf15e36b6628c509/shipping-1078102_1280.jpg');"
  >
    <!-- 遮罩层 -->
    <div class="absolute inset-0 bg-[#0a1628]/80" />

    <UContainer class="relative z-10">
      <div class="flex flex-col lg:flex-row lg:items-start lg:gap-16">
        <!-- 左侧：标题区域 -->
        <div
          v-motion-slide-visible-left
          :duration="700"
          class="mb-10 lg:mb-0 lg:w-1/3 lg:pt-8"
        >
          <h2 class="mb-6 text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-white">
            {{ title }}
          </h2>
          <p class="mb-8 text-base leading-relaxed text-white/80">
            {{ description }}
          </p>
          <!-- 箭头按钮 -->
          <button
            class="flex h-12 w-12 items-center justify-center rounded-lg border border-white/30 text-white transition-all duration-300 hover:bg-white hover:text-[#0a1628] cursor-pointer"
            @click="$router.push(to)"
          >
            <UIcon
              name="i-heroicons-arrow-right"
              class="size-5"
            />
          </button>
        </div>

        <!-- 右侧：卡片网格 -->
        <div
          v-motion-slide-visible-right
          :duration="700"
          class="lg:w-2/3"
        >
          <!-- PC端：2x2网格 -->
          <div class="hidden grid-cols-2 gap-6 lg:grid">
            <div
              v-for="(item, index) in props.advantages"
              :key="index"
              class="group rounded-xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <!-- 图标 -->
              <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50">
                <UIcon
                  :name="item.icon"
                  class="size-6 text-primary"
                />
              </div>

              <!-- 标题 -->
              <h3 class="mb-3 text-lg font-semibold text-gray-900">
                {{ item.title }}
              </h3>

              <!-- 描述 -->
              <p class="mb-4 text-sm leading-relaxed text-gray-600">
                {{ item.description }}
              </p>

              <!-- 底部蓝线 -->
              <div class="h-1 w-8 rounded-full bg-primary transition-all duration-300 group-hover:w-12" />
            </div>
          </div>

          <!-- 移动端：垂直堆叠 -->
          <div
            v-motion-slide-visible-left
            :duration="700"
            class="flex flex-col gap-4 lg:hidden"
          >
            <div
              v-for="(item, index) in props.advantages"
              :key="index"
              class="group rounded-xl bg-white p-5"
            >
              <!-- 图标 -->
              <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50">
                <UIcon
                  :name="item.icon"
                  class="size-5 text-primary"
                />
              </div>

              <!-- 标题 -->
              <h3 class="mb-2 text-base font-semibold text-gray-900">
                {{ item.title }}
              </h3>

              <!-- 描述 -->
              <p class="mb-3 text-sm leading-relaxed text-gray-600">
                {{ item.description }}
              </p>

              <!-- 底部蓝线 -->
              <div class="h-1 w-8 rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>
