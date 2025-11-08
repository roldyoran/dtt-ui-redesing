<template>
  <Card class="w-full">
    <!-- Course Header -->
    <CardHeader 
      class="cursor-pointer hover:bg-muted/50 transition-colors"
      @click="toggleExpanded"
    >
      <div class="flex items-center justify-between">
        <div>
          <CardTitle class="text-lg">{{ course.name }}</CardTitle>
          <CardDescription>{{ course.projectId }}</CardDescription>
        </div>
        <Button variant="ghost" size="sm">
          <ChevronDown 
            class="h-4 w-4 transition-transform duration-200"
            :class="{ 'rotate-180': isExpanded }"
          />
        </Button>
      </div>
    </CardHeader>

    <!-- Course Content (Expandable) -->
    <Collapsible v-model:open="isExpanded">
      <CollapsibleContent>
        <CardContent class="pt-0">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- Course Info -->
            <div class="space-y-2">
              <div>
                <span class="font-semibold">Sección:</span>
                {{ course.section }}
              </div>
              <div>
                <span class="font-semibold">Membresía:</span>
                {{ course.membership }}
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="md:col-span-2">
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                <!-- Teacher Actions -->
                <template v-if="isTeacher">
                  <Button
                    variant="outline"
                    size="sm"
                    @click="() => handleAction('students-list')"
                    class="justify-start"
                  >
                    <Users class="w-4 h-4 mr-2" />
                    Listado de Estudiantes
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    @click="() => handleAction('grades-management')"
                    class="justify-start"
                  >
                    <PencilLine class="w-4 h-4 mr-2" />
                    Gestión de Notas
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    @click="() => handleAction('send-notice')"
                    class="justify-start"
                  >
                    <Send class="w-4 h-4 mr-2" />
                    Enviar Aviso
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    @click="() => handleAction('notices-history')"
                    class="justify-start"
                  >
                    <MailOpen class="w-4 h-4 mr-2" />
                    Registro de Avisos
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    @click="() => handleAction('documents')"
                    class="justify-start"
                  >
                    <FolderOpen class="w-4 h-4 mr-2" />
                    Documentos
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    @click="() => handleAction('events')"
                    class="justify-start"
                  >
                    <Calendar class="w-4 h-4 mr-2" />
                    Gestionar Eventos
                  </Button>
                </template>

                <!-- Student Actions -->
                <template v-else>
                  <Button
                    variant="outline"
                    size="sm"
                    @click="() => handleAction('my-grades')"
                    class="justify-start"
                  >
                    <ListChecks class="w-4 h-4 mr-2" />
                    Ver mis notas
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    @click="() => handleAction('send-message')"
                    class="justify-start"
                  >
                    <Send class="w-4 h-4 mr-2" />
                    Enviar Mensaje
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    @click="() => handleAction('sent-messages')"
                    class="justify-start"
                  >
                    <MailOpen class="w-4 h-4 mr-2" />
                    Mensajes Enviados
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    @click="() => handleAction('documents')"
                    class="justify-start"
                  >
                    <FolderOpen class="w-4 h-4 mr-2" />
                    Documentos
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    @click="() => handleAction('evaluations')"
                    class="justify-start"
                  >
                    <Code class="w-4 h-4 mr-2" />
                    Evaluaciones
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    @click="() => handleAction('report-incident')"
                    class="justify-start"
                  >
                    <AlertTriangle class="w-4 h-4 mr-2" />
                    Reportar Incidente
                  </Button>
                </template>
              </div>
            </div>
          </div>
        </CardContent>
      </CollapsibleContent>
    </Collapsible>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible'
import { 
  ChevronDown, 
  Users, 
  PencilLine, 
  Send, 
  MailOpen, 
  FolderOpen, 
  Calendar, 
  ListChecks, 
  Code, 
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
  isTeacher: boolean
}

const props = defineProps<Props>()
const isExpanded = ref(false)

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}

const handleAction = (action: string) => {
  // Here you would handle the different actions based on the action type
  console.log(`Action: ${action} for course: ${props.course.id}`)
  
  // Example routing or API calls based on action
  switch (action) {
    case 'students-list':
      // Navigate to students list
      break
    case 'grades-management':
      // Navigate to grades management
      break
    case 'my-grades':
      // Navigate to student's grades view
      break
    case 'send-notice':
    case 'send-message':
      // Open message/notice modal
      break
    case 'documents':
      // Navigate to documents section
      break
    case 'evaluations':
      // Navigate to evaluations
      break
    case 'report-incident':
      // Open incident report modal
      break
    default:
      console.log(`Unhandled action: ${action}`)
  }
}
</script>