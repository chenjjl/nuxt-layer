<script setup lang="ts">
onMounted(() => {})
withDefaults(defineProps<{
  posts: {
    title: string
    description: string
    image: string
    date: string
    id: string
    from: string
  }[]
  to: string
}>(), {
})
</script>

<template>
  <UPageSection
    :links="[{
      label: '了解更多',
      variant: 'outline',
      trailingIcon: 'i-lucide-arrow-right',
      to: to
    }]"
  >
    <template #header>
      <PageSection
        cn="新闻资讯"
        en="news & information"
      />
    </template>
    <template #body>
      <UBlogPosts
        v-motion-slide-visible-bottom
        :duration="700"
      >
        <UBlogPost
          v-for="(post, index) in posts"
          :key="index"
          :to="`/news/${post.id}`"
          v-bind="post"
          :description="post.from"
        >
          <template #date>
            {{ post.date }}
          </template>
        </UBlogPost>
      </UBlogPosts>
    </template>
  </UPageSection>
</template>

<style scoped>
</style>
