<script setup lang="ts">
defineProps<{
  image: string
}>()
</script>
<template>
  <img :src="image"/>
</template>
