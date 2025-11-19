<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { 
  GraduationCap, 
  Target, 
  Layers, 
  Database, 
  Code, 
  Network, 
  Cog, 
  TrendingUp,
  Building,
  Users,
  Zap
} from 'lucide-vue-next'

// Perfil sections data
const perfilSections = [
  {
    title: 'Desarrollo de Proyectos Técnicos',
    description: 'Desarrolla y pone en marcha proyectos relacionados con sistemas operativos, redes de computadoras, arquitecturas de computadoras, teorización de compiladores, complejidad de algoritmos e inteligencia artificial.',
    icon: Code
  },
  {
    title: 'Solución de Problemas Complejos',
    description: 'Plantea solución a los problemas complejos, aplicando un enfoque de sistemas para su priorización y resolución sistemática.',
    icon: Target
  },
  {
    title: 'Análisis y Diseño de Sistemas',
    description: 'Analiza, diseña e implementa sistemas de bases de datos, sistemas de información y software.',
    icon: Database
  }
]

// Campo de actividad data
const camposActividad = [
  {
    numero: 1,
    titulo: 'Creación e implementación de sistemas basados en la información',
    descripcion: 'Utilizando tecnologías como sistemas operativos, redes, compiladores, desarrollo de software y componentes de computación.',
    icon: Layers,
    color: 'bg-blue-500/10 text-blue-600'
  },
  {
    numero: 2,
    titulo: 'Integración de sistemas',
    descripcion: 'Aplicando técnicas de mejora y herramientas de ingeniería de sistemas, como la modelización, simulación, análisis estadístico e inteligencia artificial.',
    icon: Network,
    color: 'bg-green-500/10 text-green-600'
  },
  {
    numero: 3,
    titulo: 'Análisis y solución de problemas complejos',
    descripcion: 'Aplicando el análisis de sistemas y el procesamiento de información para obtener mejores soluciones en empresas comerciales, de servicios e industrias en general.',
    icon: TrendingUp,
    color: 'bg-purple-500/10 text-purple-600'
  },
  {
    numero: 4,
    titulo: 'Sistematización y automatización de procesos',
    descripcion: 'En empresas comerciales, de servicios, industriales y organizaciones sociales o gubernamentales, utilizando tecnologías informáticas.',
    icon: Cog,
    color: 'bg-orange-500/10 text-orange-600'
  },
  {
    numero: 5,
    titulo: 'Optimización e implementación de procesos',
    descripcion: 'Relacionados con el cambio organizacional, coordinación de equipos multifuncionales y adopción de metodologías para mejorar la productividad.',
    icon: Zap,
    color: 'bg-red-500/10 text-red-600'
  }
]
</script>

<template>
  <MainLayout :show-hero="true" hero-title="Perfil del Estudiante">
    <div class="bg-linear-to-br from-background via-muted/20 to-background">
      
      <!-- Hero Section with Overview -->
      <section class="py-16 px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <div class="flex justify-center mb-6">
              <div class="p-4 bg-primary/10 rounded-full">
                <GraduationCap class="w-16 h-16 text-primary" />
              </div>
            </div>
            <h2 class="text-3xl font-bold text-primary mb-4">Perfil del Egresado</h2>
            <Separator class="w-24 mx-auto bg-primary" />
          </div>

          <Card class="border-l-4 border-l-primary">
            <CardContent class="p-8">
              <p class="text-lg text-muted-foreground leading-relaxed text-center">
                El <span class="font-semibold text-primary">Ingeniero en Ciencias y Sistemas</span> es un profesional 
                altamente capacitado para enfrentar los desafíos tecnológicos del mundo moderno, 
                con competencias sólidas en análisis, diseño e implementación de sistemas complejos.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <!-- Perfil Sections -->
      <section class="py-16 px-4 bg-muted/30">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-primary mb-4">Competencias Principales</h2>
            <Separator class="w-24 mx-auto bg-primary" />
          </div>

          <div class="grid lg:grid-cols-3 gap-8">
            <!-- Primera competencia -->
            <Card class="text-center">
              <CardHeader class="pb-6">
                <div class="flex justify-center mb-4">
                  <div class="p-4 bg-primary/10 rounded-full">
                    <Target class="w-12 h-12 text-primary" />
                  </div>
                </div>
                <CardTitle class="text-xl">{{ perfilSections[1]?.title || '' }}</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-muted-foreground leading-relaxed">
                  {{ perfilSections[1]?.description || '' }}
                </p>
              </CardContent>
            </Card>

            <!-- Competencia central -->
            <Card class="text-center">
              <CardHeader class="pb-6">
                <div class="flex justify-center mb-4">
                  <div class="p-4 bg-primary/10 rounded-full">
                    <Code class="w-12 h-12 text-primary" />
                  </div>
                </div>
                <CardTitle class="text-xl">{{ perfilSections[0]?.title || '' }}</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-muted-foreground leading-relaxed">
                  {{ perfilSections[0]?.description || '' }}
                </p>
              </CardContent>
            </Card>

            <!-- Tercera competencia -->
            <Card class="text-center">
              <CardHeader class="pb-6">
                <div class="flex justify-center mb-4">
                  <div class="p-4 bg-primary/10 rounded-full">
                    <Database class="w-12 h-12 text-primary" />
                  </div>
                </div>
                <CardTitle class="text-xl">{{ perfilSections[2]?.title || '' }}</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-muted-foreground leading-relaxed">
                  {{ perfilSections[2]?.description || '' }}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <!-- Campo de Actividad Section -->
      <section class="py-16 px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <div class="flex justify-center mb-6">
              <div class="p-4 bg-primary/10 rounded-full">
                <Building class="w-12 h-12 text-primary" />
              </div>
            </div>
            <h2 class="text-3xl font-bold text-primary mb-4">Campo de Actividad</h2>
            <Separator class="w-24 mx-auto bg-primary" />
            <p class="text-muted-foreground max-w-2xl mx-auto mt-6">
              Los ingenieros en Ciencias y Sistemas pueden desarrollar su carrera profesional en diversas áreas especializadas
            </p>
          </div>

          <Card>
            <CardContent class="p-6">
              <div class="space-y-4">
                <template v-for="campo in camposActividad" :key="campo.numero">
                  <div class="flex items-start gap-4 pb-4 border-b border-muted last:border-b-0 last:pb-0">
                    <div class="shrink-0">
                      <div :class="['w-12 h-12 rounded-full flex items-center justify-center', campo.color]">
                        <component :is="campo.icon" class="w-6 h-6" />
                      </div>
                    </div>
                    <div class="flex-1">
                      <div class="flex items-start gap-2 mb-2">
                        <Badge variant="outline" class="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                          {{ campo.numero }}
                        </Badge>
                        <h3 class="text-lg font-semibold text-primary">{{ campo.titulo }}</h3>
                      </div>
                      <p class="text-sm text-muted-foreground leading-relaxed">
                        {{ campo.descripcion }}
                      </p>
                    </div>
                  </div>
                </template>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  </MainLayout>
</template>