<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('index').first())

const routes = page.value?.route
</script>

<template>
  <UFooter
    v-if="page"
    class="bg-[#07294d]"
    :ui="{ center: 'w-full', left: 'self-start', right: 'self-start' }"
  >
    <template #left>
      <div class="w-40 pt-8 flex flex-col items-start self-start">
        <AppLogo
          class="h-16 w-40"
          :image="page.info.logoWhite"
        />
        <div class="text-white mt-2.5 text-sm">
          {{ page.description }}
        </div>
      </div>
    </template>
    <div class="flex flex-col">
      <UFooterColumns
        class="py-10 hidden lg:flex"
        :columns="routes"
        :ui="{ label: 'text-white-important', root: 'display-unset', linkLabel: 'text-white-important' }"
      />
      <div class="border-split">
        <p class="text-sm text-white-important">
          {{ page.title }} • © {{ new Date().getFullYear() }}
        </p>
        <a
          class="text-sm text-white-important ml-2.5 cursor-pointer"
          href="https://beian.miit.gov.cn/#/Integrated/index"
          target="_blank"
        >
          {{ page.info?.beian }}
        </a>
      </div>
    </div>
    <template #right>
      <div :class="'pt-10 text-white text-sm w-' + (30 * page.footerContact.qrCodes.length) + ''">
        <div class="font-bold mb-2.5">
          联系方式
        </div>
        <div
          v-if="page.footerContact.email"
          class="whitespace-nowrap flex self-start"
        >
          邮箱: {{ page.footerContact.email }}
        </div>
        <div
          v-if="page.footerContact.phone"
          class="whitespace-nowrap flex self-start"
        >
          手机: {{ page.footerContact.phone }}
        </div>
        <div class="flex">
          <div
            v-for="(item, index) in page.footerContact.qrCodes"
            :key="index"
            class="mt-2 mr-1"
          >
            <img
              :src="item.url"
              class="w-24 h-24"
            >
            <div class="text-xs text-center mt-1 font-bold">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </template>
  </UFooter>
</template>

<style scoped>
.border-split {
  width: 100%;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
}
.display-unset {
  display: unset;
}
@media (max-width: 768px) {
  .display-unset {
    display: none;
}
}
</style>
