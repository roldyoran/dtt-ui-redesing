<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  Target,
  Users,
  BookOpen,
  Lightbulb,
  TrendingUp,
  Award,
  CheckCircle,
  Star,
} from 'lucide-vue-next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import MainLayout from '@/layouts/MainLayout.vue'

// Animation control
const showContent = ref(false)

onMounted(() => {
  setTimeout(() => {
    showContent.value = true
  }, 100)
})

// Statistics data
const statistics = [
  { value: '+7000', label: 'Estudiantes matriculados', description: 'Más de' },
  { value: '1970', label: 'Inició la carrera', description: 'En el año' },
  { value: '+600', label: 'Estudiantes ingresan a la carrera', description: 'Anualmente' },
  {
    value: '+375',
    label: 'Estudiantes ingresan a cursos profesionales',
    description: 'Aproximadamente',
  },
  { value: '+35', label: 'Estudiantes se gradúan', description: 'En un año' },
]

// Skills data
const skills = [
  {
    title: 'Resolución de problemas',
    description:
      'Visión holística de los problemas considerando todos los elementos involucrados, utilizando un enfoque sistemático.',
  },
  {
    title: 'Generalización',
    description: 'Capacidad de generalizar soluciones y aprender de su experiencia.',
  },
  {
    title: 'Relaciones interpersonales',
    description:
      'Para persuadir a los negocios, el trabajo en equipo, presentar un proyecto con claridad y precisión, y trabajar bajo presión.',
  },
  {
    title: 'Gestión de recursos',
    description:
      'Logro de resultados, consenso de acciones en torno a los planes para llevar a cabo un proceso racional de toma de decisiones.',
  },
  {
    title: 'Abstracción',
    description: 'Capacidad de modelar e interpretar variables abstractas.',
  },
  {
    title: 'Autoaprendizaje',
    description:
      'Saber qué buscar, cómo buscar, dónde buscar, cómo buscar y cuándo surge la necesidad de un nuevo aprendizaje.',
  },
  {
    title: 'Análisis y síntesis',
    description:
      'Herramientas útiles de gestión de habilidades para las necesidades que tiene y sintetizar los factores más importantes para su consideración.',
  },
]

// Aptitudes data
const aptitudes = [
  'Ordenado y metódico',
  'Capacidad para trabajar bajo objetivos claramente definidos',
  'Responsable',
  'Investigador',
  'Amigable con el medio ambiente',
  'Auto adaptable al entorno en el que opera',
  'Efectivo y eficiente',
  'Abierto para comprender otros puntos de vista',
  'Distinguir hechos, opiniones, creencias y valores',
  'Autoestima',
  'Prepárese para aprender los principios básicos de las múltiples disciplinas',
]

// Objectives data
const objectives = [
  {
    number: 1,
    text: 'Proporcionar capacitación adecuada para que el profesional pueda ayudar al desarrollo de Guatemala, a través de la aplicación de experiencia funcional en las áreas de informática y sistemas.',
  },
  {
    number: 2,
    text: 'Construya una cultura de cambio y adaptación que permita al graduado autoeducarse de manera permanente. Ha sido capaz de identificar la necesidad de cambio tanto personal como profesionalmente dentro de la organización en la que participa, para analizar y diseñar soluciones e implementarlas con éxito.',
  },
  {
    number: 3,
    text: 'Proporcione a los estudiantes el conocimiento y las habilidades necesarias para interactuar de manera efectiva con todos los miembros de la organización, fomentando el uso de tecnología, sistemas de aplicación y herramientas que promuevan procesos de mejora interna.',
  },
  {
    number: 4,
    text: 'Actualice el plan de estudios que incluye los últimos desarrollos en cada una de las diferentes tecnologías relacionadas con los campos de acción de la informática y la tecnología de la información, así como la aplicación de las técnicas de ingeniería de sistemas.',
  },
]
</script>

<template>
  <MainLayout :show-hero="true" hero-title="Acerca de Nosotros">
    <div class="bg-linear-to-br from-background via-muted/20 to-background">
      <!-- Mission & Vision Cards -->
      <section class="py-16 px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-8">
            <!-- Mission Card -->
            <Card
              class="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-muted/20"
            >
              <CardHeader class="text-center pb-6">
                <div class="flex justify-center mb-4">
                  <div
                    class="p-3 bg-primary/10 rounded-full group-hover:scale-110 transition-transform"
                  >
                    <Target class="w-8 h-8 text-primary" />
                  </div>
                </div>
                <CardTitle class="text-2xl font-bold text-primary">Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-muted-foreground leading-relaxed">
                  Desarrollar en el alumno las competencias que garantizan el éxito en la
                  construcción del conocimiento a través de los diferentes estilos de aprendizaje y
                  fomentar la investigación permanente para permitir una mejor calidad de vida a la
                  comunidad. Teniendo en cuenta las opciones del mercado actual en el país
                  (logística, administración, tecnología de la información, finanzas, contabilidad,
                  comercio, etc.), y también el mercado internacional, hacen una gran demanda global
                  y competitividad en la actualidad.
                </p>
              </CardContent>
            </Card>

            <!-- Vision Card -->
            <Card
              class="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-muted/20"
            >
              <CardHeader class="text-center pb-6">
                <div class="flex justify-center mb-4">
                  <div
                    class="p-3 bg-primary/10 rounded-full group-hover:scale-110 transition-transform"
                  >
                    <Lightbulb class="w-8 h-8 text-primary" />
                  </div>
                </div>
                <CardTitle class="text-2xl font-bold text-primary">Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-muted-foreground leading-relaxed">
                  El estudiante de la Facultad de Ingeniería de la Universidad de San Carlos de
                  Guatemala será reconocido como un profesional superior, en base al conocimiento
                  incorporado en el currículo de estudios para capacitar a los estudiantes de manera
                  integral, dándoles las herramientas adecuadas para su desarrollo profesional.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <!-- Objectives Section -->
      <section class="py-16 px-4 bg-muted/30">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-primary mb-4">Objetivos Generales</h2>
            <Separator class="w-24 mx-auto bg-primary" />
          </div>

          <Card class="border-l-4 border-l-primary">
            <CardContent class="p-8">
              <div class="space-y-6">
                <div v-for="objective in objectives" :key="objective.number" class="flex gap-4">
                  <Badge
                    variant="outline"
                    class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold"
                  >
                    {{ objective.number }}
                  </Badge>
                  <p class="text-muted-foreground leading-relaxed">
                    {{ objective.text }}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <!-- Knowledge Section -->
      <section class="py-16 px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <div class="flex justify-center mb-6">
              <div class="p-4 bg-primary/10 rounded-full">
                <BookOpen class="w-12 h-12 text-primary" />
              </div>
            </div>
            <h2 class="text-3xl font-bold text-primary mb-4">Conocimientos</h2>
            <Separator class="w-24 mx-auto bg-primary" />
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <!-- General Knowledge -->
            <Card class="group hover:shadow-lg transition-all duration-300">
              <CardHeader class="text-center">
                <CardTitle class="text-xl font-bold text-primary">Generales</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-muted-foreground text-center leading-relaxed">
                  Donde se consideran las ciencias académicas generales, las relaciones
                  interpersonales y el idioma inglés.
                </p>
              </CardContent>
            </Card>

            <!-- Specific Knowledge -->
            <Card class="group hover:shadow-lg transition-all duration-300">
              <CardHeader class="text-center">
                <CardTitle class="text-xl font-bold text-primary">Específicos</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-muted-foreground text-center leading-relaxed">
                  Ciencia relacionada con su especialidad, que abarca la informática, la metodología
                  de sistemas y el desarrollo de sistemas de información.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <!-- Skills & Aptitudes Section -->
      <section class="py-16 px-4 bg-muted/30">
        <div class="max-w-6xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-12 lg:items-start">
            <!-- Skills -->
            <div class="flex flex-col h-full">
              <div class="text-center mb-8">
                <h2 class="text-3xl font-bold text-primary mb-4">Habilidades</h2>
                <Separator class="w-24 mx-auto bg-primary" />
              </div>

              <Card class="flex-1">
                <CardContent class="p-6 h-full">
                  <div class="space-y-3">
                    <div
                      v-for="(skill, index) in skills"
                      :key="index"
                      class="flex items-start gap-3"
                    >
                      <Badge
                        variant="outline"
                        class="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      >
                        {{ index + 1 }}
                      </Badge>
                      <div>
                        <h3 class="font-semibold text-primary mb-1 text-sm">{{ skill.title }}</h3>
                        <p class="text-xs text-muted-foreground leading-relaxed">
                          {{ skill.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <!-- Aptitudes -->
            <div class="flex flex-col h-full">
              <div class="text-center mb-8">
                <h2 class="text-3xl font-bold text-primary mb-4">Aptitudes</h2>
                <Separator class="w-24 mx-auto bg-primary" />
              </div>

              <Card class="flex-1">
                <CardContent class="p-6 h-full">
                  <div class="space-y-3">
                    <div
                      v-for="(aptitude, index) in aptitudes"
                      :key="index"
                      class="flex items-start gap-3"
                    >
                      <Badge
                        variant="outline"
                        class="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      >
                        {{ index + 1 }}
                      </Badge>
                      <p class="text-sm text-muted-foreground">{{ aptitude }}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <!-- Statistics Section -->
      <section class="py-16 px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-primary mb-4">Estadísticas</h2>
            <Separator class="w-24 mx-auto bg-primary" />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Card
              v-for="(stat, index) in statistics"
              :key="index"
              class="text-center hover:shadow-lg transition-shadow group"
            >
              <CardContent class="p-6">
                <div class="space-y-2">
                  <p class="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                    {{ stat.description }}
                  </p>
                  <p
                    class="text-3xl font-bold text-primary group-hover:scale-110 transition-transform"
                  >
                    {{ stat.value }}
                  </p>
                  <p class="text-sm text-muted-foreground font-medium">{{ stat.label }}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  </MainLayout>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.bg-grid-pattern {
  background-image: radial-gradient(circle, rgba(var(--primary), 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}
</style>
