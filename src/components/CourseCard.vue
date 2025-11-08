<template>
  <Card class="mb-4 border-2 hover:border-accent/30 transition-all"  >
    <CardHeader class="cursor-pointer" @click="toggleExpanded">
      <div class="flex justify-between items-center">
        <div>
          <CardTitle class="text-lg">{{ course.name }}</CardTitle>
          <CardDescription>
            <strong>Sección:</strong> {{ course.section }} • 
            <strong>Membresía:</strong> {{ course.membership }} •
            <strong>ID:</strong> {{ course.projectId }}
          </CardDescription>
        </div>
        <Button variant="ghost" size="sm">
          <ChevronDown 
            class="h-4 w-4 transition-transform"
            :class="{ 'rotate-180': isExpanded }"
          />
        </Button>
      </div>
    </CardHeader>

    <Collapsible v-model:open="isExpanded">
      <CollapsibleContent>
        <CardContent class="pt-0">
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            <Button 
              v-for="action in actions" 
              :key="action.id"
              variant="outline" 
              size="sm"
              class="text-xs justify-start"
            >
              <component :is="action.icon" class="w-4 h-4 mr-2" />
              {{ action.label }}
            </Button>
          </div>
        </CardContent>
      </CollapsibleContent>
    </Collapsible>
  </Card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible'
import { 
  ChevronDown,
  Users,
  ClipboardList,
  Send,
  Archive,
  FileText,
  Calendar,
  BarChart3,
  Target,
  BookOpen,
  MessageCircle,
  Video,
  Eye,
  Mail,
  FolderOpen,
  AlertTriangle
} from 'lucide-vue-next'

interface Course {
  id: string
  name: string
  section: string
  membership: string
  projectId: string
  gradeLevel?: 'above' | 'average' | 'below'
}

interface Props {
  course: Course
}

const props = defineProps<Props>()

const isExpanded = ref(false)

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}

const isTeacher = computed(() => {
  return props.course.membership.includes('Tutor') || 
         props.course.membership.includes('Docente')
})

const actions = computed(() => {
  if (isTeacher.value) {
    return [
      { id: 'students', label: 'Listado de Estudiantes', icon: Users },
      { id: 'grades', label: 'Gestión de Notas', icon: ClipboardList },
      { id: 'notices', label: 'Enviar Aviso', icon: Send },
      { id: 'notice-registry', label: 'Registro de Avisos', icon: Archive },
      { id: 'documents', label: 'Documentos', icon: FileText },
      { id: 'events', label: 'Gestionar Eventos', icon: Calendar },
      { id: 'statistics', label: 'Mostrar Estadísticos', icon: BarChart3 },
      { id: 'performance360', label: 'Desempeño 360', icon: Target },
      { id: 'evaluations', label: 'Evaluaciones', icon: BookOpen },
      { id: 'forums', label: 'Foros', icon: MessageCircle },
      { id: 'conferences', label: 'Conferencias', icon: Video }
    ]
  } else {
    return [
      { id: 'my-grades', label: 'Ver mis notas', icon: Eye },
      { id: 'send-message', label: 'Enviar Mensaje', icon: Send },
      { id: 'sent-messages', label: 'Mensajes Enviados', icon: Mail },
      { id: 'documents', label: 'Documentos', icon: FolderOpen },
      { id: 'statistics', label: 'Mostrar Estadísticos', icon: BarChart3 },
      { id: 'performance360', label: 'Desempeño 360', icon: Target },
      { id: 'evaluations', label: 'Evaluaciones', icon: BookOpen },
      { id: 'report-incident', label: 'Reportar Incidente', icon: AlertTriangle }
    ]
  }
})
</script>