<template>
  <section class="relative z-10">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card v-for="feature in features" :key="feature.id" class="group border-0 shadow-md">
          <CardContent class="p-4">
            <div class="flex items-start space-x-4">
              <!-- Icon Container -->
              <div class="shrink-0">
                <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                  <component :is="feature.icon" class="h-5 w-5 text-primary" />
                </div>
              </div>

              <!-- Content -->
              <div class="flex-1 min-w-0">
                <h3 class="text-lg font-semibold text-foreground leading-tight">
                  {{ feature.title }}
                </h3>
                <p class="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card, CardContent } from '@/components/ui/card'
import { UserIcon, StarIcon, GlobeIcon } from 'lucide-vue-next'

const features = ref([
  {
    id: 1,
    title: 'Perfil del Estudiante',
    description:
      'Información detallada sobre el perfil académico y competencias del estudiante de sistemas.',
    icon: UserIcon,
  },
  {
    id: 2,
    title: 'Escuela de Ciencias y Sistemas',
    description:
      'Conoce la historia, misión y visión de nuestra prestigiosa escuela de ingeniería.',
    icon: StarIcon,
  },
  {
    id: 3,
    title: 'Nosotros',
    description: 'Descubre nuestra trayectoria, valores y compromiso con la excelencia académica.',
    icon: GlobeIcon,
  },
])
</script>
