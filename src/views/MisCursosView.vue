<template>
  <div class="p-6">
    <!-- Header -->
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold mb-2">Mis cursos</h1>
      <p class="text-xl text-muted-foreground">Segundo Semestre 2025</p>
    </div>

    <!-- Period Selector and Grade Legend -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <!-- Period Selector -->
      <Card class="p-4">
        <div class="flex gap-2">
          <Select v-model="selectedPeriod">
            <SelectTrigger class="w-full">
              <SelectValue placeholder="Seleccionar período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem v-for="period in periods" :key="period.id" :value="period.id">
                {{ period.name }}
              </SelectItem>
            </SelectContent>
          </Select>
          <Button @click="loadCourses">Ir</Button>
        </div>
      </Card>

      <!-- Grade Legend -->
      <Card class="p-4">
        <div class="grid grid-cols-1 gap-2 text-sm">
          <div class="flex items-center gap-2">
            <Badge class="bg-green-500">&nbsp;&nbsp;&nbsp;</Badge>
            <span>Notas arriba del promedio</span>
          </div>
          <div class="flex items-center gap-2">
            <Badge class="bg-yellow-500">&nbsp;&nbsp;&nbsp;</Badge>
            <span>Notas en el promedio</span>
          </div>
          <div class="flex items-center gap-2">
            <Badge class="bg-red-500">&nbsp;&nbsp;&nbsp;</Badge>
            <span>Notas abajo del promedio</span>
          </div>
        </div>
      </Card>
    </div>

    <!-- Courses List -->
    <div class="space-y-4">
      <!-- Teacher Courses -->
      <div v-if="teacherCourses.length > 0" class="space-y-4">
        <h3 class="text-xl font-semibold mb-4">Cursos como Tutor/Docente</h3>
        <Card v-for="course in teacherCourses" :key="`teacher-${course.id}`" class="p-4">
          <h4 class="font-medium">{{ course.name }}</h4>
          <p class="text-sm text-muted-foreground">{{ course.section }} - {{ course.membership }}</p>
          <p class="text-xs text-muted-foreground">ID: {{ course.projectId }}</p>
        </Card>
      </div>

      <!-- Student Courses -->
      <div v-if="studentCourses.length > 0" class="space-y-4">
        <h3 class="text-xl font-semibold mb-4">Cursos como Estudiante</h3>
        <Card v-for="course in studentCourses" :key="`student-${course.id}`" class="p-4">
          <h4 class="font-medium">{{ course.name }}</h4>
          <p class="text-sm text-muted-foreground">{{ course.section }} - {{ course.membership }}</p>
          <p class="text-xs text-muted-foreground">ID: {{ course.projectId }}</p>
        </Card>
      </div>

      <!-- No courses message -->
      <div v-if="teacherCourses.length === 0 && studentCourses.length === 0" class="text-center py-8">
        <p class="text-muted-foreground">No hay cursos disponibles para el período seleccionado.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
// import CourseCard from '@/components/CourseCard.vue'

interface Period {
  id: string
  name: string
}

interface Course {
  id: string
  name: string
  section: string
  membership: string
  projectId: string
  gradeLevel?: 'above' | 'average' | 'below'
}

const selectedPeriod = ref<string>('24')
const periods = ref<Period[]>([
  { id: '24', name: 'Segundo Semestre - 2025' },
  { id: '23', name: 'Primer Semestre - 2025' },
  { id: '22', name: 'Segundo Semestre - 2024' },
  { id: '21', name: 'Primer Semestre - 2024' },
  { id: '20', name: 'Segundo Semestre - 2023' },
  { id: '19', name: 'Primer Semestre - 2023' },
  { id: '18', name: 'Segundo Semestre - 2022' },
  { id: '17', name: 'Primer Semestre - 2022' },
  { id: '16', name: 'Segundo Semestre - 2021' },
  { id: '15', name: 'Primer Semestre - 2021' },
])

// Mock data based on the HTML provided
const teacherCourses = ref<Course[]>([
  {
    id: '189',
    name: 'Sistemas Operativos 1',
    section: 'Sección P',
    membership: 'Tutor Académico',
    projectId: '0281P',
  }
])

const studentCourses = ref<Course[]>([
  {
    id: '3',
    name: 'Análisis y Diseño de Sistemas 2',
    section: 'Sección A',
    membership: 'Estudiante',
    projectId: '0785A',
  },
  {
    id: '19',
    name: 'Sistemas Organizaciones y Gerenciales 1',
    section: 'Sección N',
    membership: 'Estudiante',
    projectId: '0786N',
  },
  {
    id: '22',
    name: 'Inteligencia Artificial 1',
    section: 'Sección A',
    membership: 'Estudiante',
    projectId: '0972A',
  },
  {
    id: '96',
    name: 'Departamento Soporte Informático DSI 104',
    section: 'Sección A',
    membership: 'Estudiante',
    projectId: 'PV014',
  },
  {
    id: '111',
    name: 'Seminario de Sistemas 2',
    section: 'Sección N',
    membership: 'Estudiante',
    projectId: '0798N',
  }
])

const loadCourses = () => {
  // Here you would typically make an API call to load courses for the selected period
  console.log('Loading courses for period:', selectedPeriod.value)
}

onMounted(() => {
  loadCourses()
})
</script>