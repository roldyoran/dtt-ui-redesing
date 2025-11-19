<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { Sun, Moon, Monitor } from 'lucide-vue-next'
import { computed } from 'vue'
import { Button } from '@/components/ui/button'

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
  <Button
    variant="outline"
    size="sm"
    class="h-9 w-9 p-0"
    @click="toggleTheme"
    :title="mode === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'"
  >
    <component 
      :is="currentIcon" 
      class="h-4 w-4 transition-transform hover:scale-110"
    />
  </Button>
</template>