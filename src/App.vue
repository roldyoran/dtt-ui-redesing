<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Button } from '@/components/ui/button';
import { useColorMode } from '@vueuse/core'
import { watchEffect } from 'vue'

const mode = useColorMode()

// Apply the theme class to the document element
watchEffect(() => {
  if (mode.value === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
