<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { Sun, Moon, Monitor } from 'lucide-vue-next'
import { computed } from 'vue'

const mode = useColorMode()

const currentIcon = computed(() => {
  switch (mode.value) {
    case 'dark':
      return Moon
    case 'light':
      return Sun
    default:
      return Monitor
  }
})

const toggleTheme = () => {
  mode.value = mode.value === 'light' ? 'dark' : 'light'
}

// Exponer la función para que se pueda llamar desde el padre
defineExpose({
  toggleTheme
})
</script>

<template>
  <component 
    :is="currentIcon" 
    class="h-4 w-4"
  />
</template>