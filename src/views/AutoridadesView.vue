<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import {
  Users,
  BookOpen,
  Calendar,
  Award,
  Crown,
  UserCheck,
  GraduationCap,
  Mail,
} from 'lucide-vue-next'

// Autoridades data
const autoridades = [
  {
    cargo: 'Decano',
    nombre: 'Ingeniera. Aurelia Anabela Cordova Estrada',
    icon: Crown,
    description: 'Máxima autoridad de la Facultad de Ingeniería',
    category: 'decano',
  },
  {
    cargo: 'Vocal I',
    nombre: 'Ing. Jose Francisco Gomez Rivera',
    icon: UserCheck,
    description: 'Primer vocal de la Junta Directiva',
    category: 'vocal',
  },
  {
    cargo: 'Vocal II',
    nombre: 'Ing. Mario Renato Escobedo Martinez',
    icon: UserCheck,
    description: 'Segundo vocal de la Junta Directiva',
    category: 'vocal',
  },
  {
    cargo: 'Vocal III',
    nombre: 'Ing. Jose Milton de Leon Bran',
    icon: UserCheck,
    description: 'Tercer vocal de la Junta Directiva',
    category: 'vocal',
  },
  {
    cargo: 'Vocal IV',
    nombre: 'Br. Luis Diego Aguilar Ralon',
    icon: GraduationCap,
    description: 'Cuarto vocal de la Junta Directiva',
    category: 'vocal',
  },
  {
    cargo: 'Vocal V',
    nombre: 'Br. Christian Daniel Estrada Santizo',
    icon: GraduationCap,
    description: 'Quinto vocal de la Junta Directiva',
    category: 'vocal',
  },
  {
    cargo: 'Secretario Junta Directiva',
    nombre: 'Ing. Hugo Humberto Rivera Perez',
    icon: BookOpen,
    description: 'Secretario de la Junta Directiva de la Facultad',
    category: 'secretario',
  },
  {
    cargo: 'Director de Escuela Ciencias y Sistemas',
    nombre: 'MSc. Ing. Carlos Gustavo Alonzo',
    icon: Users,
    description: 'Director de la Escuela de Ciencias y Sistemas',
    category: 'director',
  },
]
</script>

<template>
  <MainLayout :show-hero="true" hero-title="Autoridades">
    <div class="bg-linear-to-br from-background via-muted/20 to-background">
      <!-- Decano Section - Destacado -->
      <section class="py-16 px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-primary mb-4">
              Autoridades de la Facultad de Ingeniería
            </h2>
            <Separator class="w-24 mx-auto bg-primary mb-6" />
            <p class="text-muted-foreground max-w-2xl mx-auto">
              Conoce a las autoridades que lideran la Facultad de Ingeniería y la Escuela de
              Ciencias y Sistemas
            </p>
          </div>

          <!-- Decano Destacado -->
          <div class="mb-16">
            <Card class="border-2 border-primary/20 bg-linear-to-br from-primary/5 to-primary/10">
              <CardContent class="p-8">
                <div class="flex flex-col md:flex-row items-center gap-6">
                  <div class="shrink-0">
                    <div
                      class="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center border-4 border-primary/20"
                    >
                      <Crown class="w-16 h-16 text-primary" />
                    </div>
                  </div>
                  <div class="text-center md:text-left flex-1">
                    <Badge variant="secondary" class="mb-3 bg-primary/10 text-primary">
                      Decano de la Facultad
                    </Badge>
                    <h3 class="text-2xl font-bold text-primary mb-2">
                      Ingeniera. Aurelia Anabela Cordova Estrada
                    </h3>
                    <p class="text-muted-foreground mb-4">
                      Máxima autoridad de la Facultad de Ingeniería, responsable de la dirección
                      académica y administrativa de todas las escuelas de la facultad.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <!-- Junta Directiva Section -->
      <section class="py-16 px-4 bg-muted/30">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-primary mb-4">Junta Directiva</h2>
            <Separator class="w-24 mx-auto bg-primary" />
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Vocales y Secretario -->
            <template
              v-for="autoridad in autoridades.filter(
                (a) => a.category === 'vocal' || a.category === 'secretario',
              )"
              :key="autoridad.cargo"
            >
              <Card>
                <CardHeader class="text-center pb-4">
                  <div
                    class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <component :is="autoridad.icon" class="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle class="text-lg">{{ autoridad.cargo }}</CardTitle>
                  <CardDescription class="font-medium text-foreground">{{
                    autoridad.nombre
                  }}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-muted-foreground text-center">
                    {{ autoridad.description }}
                  </p>
                </CardContent>
              </Card>
            </template>
          </div>
        </div>
      </section>

      <!-- Director de Escuela Section -->
      <section class="py-16 px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-primary mb-4">Dirección de Escuela</h2>
            <Separator class="w-24 mx-auto bg-primary" />
          </div>

          <Card class="border-2 border-primary/20 bg-linear-to-br from-card to-muted/20">
            <CardContent class="p-8">
              <div class="flex flex-col md:flex-row items-center gap-6">
                <div class="shrink-0">
                  <div
                    class="w-28 h-28 bg-primary/10 rounded-full flex items-center justify-center border-4 border-primary/20"
                  >
                    <Users class="w-14 h-14 text-primary" />
                  </div>
                </div>
                <div class="text-center md:text-left flex-1">
                  <Badge variant="secondary" class="mb-3 bg-primary/10 text-primary">
                    Director de Escuela
                  </Badge>
                  <h3 class="text-2xl font-bold text-primary mb-2">
                    MSc. Ing. Carlos Gustavo Alonzo
                  </h3>
                  <p class="text-muted-foreground mb-4">
                    Director de la Escuela de Ciencias y Sistemas, responsable de la gestión
                    académica específica de los programas de sistemas e informática.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  </MainLayout>
</template>
