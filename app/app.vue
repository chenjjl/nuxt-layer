<template>
  <div>
    <AppHeader
      image-white="https://xuebo-1320531731.cos.ap-shanghai.myqcloud.com/2026/01/30/051f74dc51cc4da183133eb145aa46ae/%E8%93%9D%E6%A9%99%E8%89%B2%E5%AD%97%E6%AF%8D%E5%85%AC%E5%8F%B8Logo%20(12).png"
      image-black="https://xuebo-1320531731.cos.ap-shanghai.myqcloud.com/2026/01/30/22fd4514f8734d7f95107eff07bc99be/%E8%93%9D%E6%A9%99%E8%89%B2%E5%AD%97%E6%AF%8D%E5%85%AC%E5%8F%B8Logo%20(1).png"
    />

    <UMain class="min-h-screen">
      <slot />
    </UMain>

    <AppFooter />
  </div>
</template>
<style>
/* 重置默认样式，确保页面充满整个视口 */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  min-height: 100vh;
}

.text-white-important {
  color: white !important;
}
</style>