<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Button } from '@/components/ui/button';
import { useColorMode } from '@vueuse/core'
import { watchEffect } from 'vue'
import { GithubIcon } from 'lucide-vue-next'

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
  
  <!-- Floating GitHub Button -->
  <a
    href="https://github.com/roldyoran/dtt-ui-redesing"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-6 right-6 z-50 flex items-center justify-center h-14 w-14 rounded-full bg-foreground text-background shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 github-bounce"
    aria-label="Ver repositorio en GitHub"
  >
    <GithubIcon class="h-6 w-6" />
  </a>
</template>

<style scoped>
@keyframes gentle-bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

.github-bounce {
  animation: gentle-bounce 2s ease-in-out infinite;
}

.github-bounce:hover {
  animation: none;
}
</style>
