<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('index').first())

const routes = page.value?.route
</script>

<template>
  <UFooter
    class="bg-[#07294d]"
    :ui="{ center: 'w-full' }"
  >
    <div class="flex flex-col w-full">
      <UContainer class="py-10">
        <UFooterColumns
          :columns="routes"
          :ui="{ label: 'text-white-important', linkLabel: 'text-white-important' }"
        />
      </UContainer>
      <div class="border-split">
        <p class="text-sm text-white-important">
          {{ page.title }} • © {{ new Date().getFullYear() }}
        </p>
        <a class="text-sm text-white-important ml-2.5 cursor-pointer" href="https://beian.miit.gov.cn/" target="_blank">
          {{ page.info?.beian }}
        </a>
      </div>
    </div>
  </UFooter>
</template>

<style>
.border-split {
  width: 100%;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
}
</style>
