<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps<{
  image: string
}>()

const { data: page } = await useAsyncData('index', () => queryCollection('index').first())

const routes = page.value?.route
const isScrolled = ref(false)
const show = ref(false)

// 监听滚动事件
onMounted(() => {
  show.value = true
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 10
  }
  window.addEventListener('scroll', handleScroll)
  // 清理事件监听器
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<template>
  <UHeader
    v-if="!show"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :style="{
      border: 'none',
      backgroundColor: 'transparent',
      color: '#fff',
      boxShadow: 'none',
      backdropFilter: 'blur(0)'
    }"
    :blur="false"
  >
    <template #left>
      <NuxtLink to="/">
        <AppLogo
          class="w-auto h-16 shrink-0"
          :class="{ 'text-white': !isScrolled }"
          :image="image"
        />
      </NuxtLink>
    </template>

    <template #default>
      <UNavigationMenu
        content-orientation="vertical"
        :items="routes"
        highlight
        highlight-color="primary"
        variant="link"
        class="w-full justify-center"
        :ui="{
          linkLabel: isScrolled ? 'text-lg' : 'text-lg text-white-important',
          linkTrailingIcon: isScrolled ? '' : 'text-white-important',
          item: 'route-item'
        }"
      />
    </template>
  </UHeader>
  <ClientOnly>
    <UHeader
      v-if="show"
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      :style="{
        border: isScrolled ? '1px solid rgba(0,0,0,0.1)' : 'none',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 1)' : 'transparent',
        color: isScrolled ? '#000' : '#fff',
        boxShadow: isScrolled ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
        backdropFilter: isScrolled ? 'none' : 'blur(0)'
      }"
      :blur="false"
    >
      <template #left>
        <NuxtLink to="/">
          <AppLogo
            class="w-auto h-16 shrink-0"
            :class="{ 'text-white': !isScrolled }"
            :image="image"
          />
        </NuxtLink>
      </template>

      <template #default>
        <UNavigationMenu
          content-orientation="vertical"
          :items="routes"
          highlight
          highlight-color="primary"
          variant="link"
          class="w-full justify-center"
          :ui="{
            linkLabel: isScrolled ? 'text-lg' : 'text-lg text-white-important',
            linkTrailingIcon: isScrolled ? '' : 'text-white-important',
            item: 'route-item'
          }"
        />
      </template>

      <template #body>
        <UNavigationMenu
          :items="routes"
          orientation="vertical"
          class="-mx-2.5 menu"
        />

        <USeparator class="my-6" />

        <UButton
          label="Sign in"
          color="neutral"
          variant="subtle"
          to="/login"
          block
          class="mb-3"
        />
        <UButton
          label="Sign up"
          color="neutral"
          to="/signup"
          block
        />
      </template>
    </UHeader>
  </ClientOnly>
</template>

<style>
.route-item {
  padding: 0 1rem;
}
</style>

<style scoped>
/* 确保header在透明状态下不占高度 */
:deep(.fixed) {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
}
</style>
