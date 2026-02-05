<script setup lang="ts">
onMounted(() => {})
const props = withDefaults(defineProps<{
  posts: {
    title: string
    description: string
    image: string
    date: string
    id: string
    from: string
  }[]
  to: string
  defaultImage?: string
}>(), {
  defaultImage: 'https://xuebo-1320531731.cos.ap-shanghai.myqcloud.com/2026/01/31/693842f99a144d37bd54072730dc119d/container-ship-6631117_1280.webp'
})
function getImage(image: string | undefined) {
  return image || props.defaultImage
}
</script>

<template>
  <div>
    <UContainer class="py-12">
      <slot name="title">
        <PageSection2
          title="新闻动态"
          description="了解行业最新资讯，掌握物流动态信息"
        />
      </slot>
      <!-- 桌面端布局 -->
      <div class="hidden md:flex gap-4 mt-8">
        <!-- 左侧大卡片 -->
        <div
          v-motion-slide-visible-left
          :duration="700"
          class="w-1/2 relative overflow-hidden group cursor-pointer"
        >
          <div
            class="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-115"
            :style="{ backgroundImage: `url(${getImage(posts[0]?.image)})` }"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div class="relative h-[400px] flex flex-col justify-end p-6">
            <h2 class="text-white text-xl font-bold mb-2 line-clamp-1">
              {{ posts[0]?.title }}
            </h2>
            <p class="text-white/90 text-sm line-clamp-2">
              {{ posts[0]?.description }}
            </p>
          </div>
        </div>

        <!-- 右侧三个小卡片 -->
        <div
          v-motion-slide-visible-left
          :duration="700"
          class="w-1/2 flex flex-col gap-4"
        >
          <div
            v-for="(post, index) in posts.slice(1, 4)"
            :key="post.id || index"
            class="group flex gap-4 bg-white hover:bg-primary p-3 rounded shadow-sm hover:shadow-md transition-shadow cursor-pointer flex-1"
          >
            <div class="w-1/3 overflow-hidden">
              <img
                :src="getImage(post?.image)"
                class="w-full h-full object-cover transition-transform duration-300 hover:scale-115"
              >
            </div>
            <div class="w-2/3 flex flex-col justify-center">
              <h2 class="text-gray-800 group-hover:text-white text-lg font-bold mb-2 line-clamp-1">
                {{ post.title }}
              </h2>
              <p class="text-gray-600 group-hover:text-white text-sm line-clamp-2">
                {{ post.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 移动端布局 -->
      <div class="md:hidden flex flex-col gap-4 mt-8">
        <!-- 顶部大图卡片 -->
        <div
          v-motion-slide-visible-right
          :duration="700"
          class="relative overflow-hidden group cursor-pointer"
        >
          <div
            class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            :style="{ backgroundImage: `url(${getImage(posts[0]?.image)})` }"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div class="relative h-[200px] flex flex-col justify-end p-4">
            <h2 class="text-white text-lg font-bold mb-2 line-clamp-1">
              {{ posts[0]?.title }}
            </h2>
            <p class="text-white/90 text-sm line-clamp-2">
              {{ posts[0]?.description }}
            </p>
          </div>
        </div>

        <!-- 下面三个小卡片 -->
        <div
          v-for="(post, index) in posts.slice(1, 4)"
          :key="post.id || index"
          v-motion-slide-visible-right
          :duration="700"
          class="flex gap-3 bg-white p-2 rounded shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        >
          <div class="w-[100px] h-[75px] flex-shrink-0 overflow-hidden">
            <img
              :src="getImage(post?.image)"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            >
          </div>
          <div class="flex-1 flex flex-col justify-center min-w-0">
            <h2 class="text-gray-800 text-sm font-bold mb-1 line-clamp-1">
              {{ post.title }}
            </h2>
            <p class="text-gray-600 text-xs line-clamp-2">
              {{ post.description }}
            </p>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
</style>
