<template>
  <Button
    variant="outline"
    size="sm"
    class="h-auto p-3 flex flex-col items-center gap-2 text-center hover:bg-primary hover:text-primary-foreground transition-colors"
    @click="handleClick"
  >
    <component 
      :is="iconComponent" 
      class="h-4 w-4 shrink-0"
    />
    <span class="text-xs leading-tight">{{ text }}</span>
  </Button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Users,
  PencilLine,
  Send,
  MailOpen,
  FolderOpen,
  Calendar,
  BarChart3,
  ListChecks,
  Code,
  MessageSquare,
  Presentation,
  AlertTriangle,
} from 'lucide-vue-next'

interface Props {
  icon: string
  text: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  click: []
}>()

const iconMap = {
  Users,
  PencilLine,
  Send,
  MailOpen,
  FolderOpen,
  Calendar,
  BarChart3,
  ListChecks,
  Code,
  MessageSquare,
  Presentation,
  AlertTriangle,
}

const iconComponent = computed(() => {
  return iconMap[props.icon as keyof typeof iconMap] || Users
})

const handleClick = () => {
  emit('click')
}
</script>