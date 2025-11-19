<template>
  <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
    <div
      class="min-h-screen flex-1 rounded-xl bg-muted/50 flex items-center justify-center md:min-h-min"
    >
      <div class="text-center">
        <h2 class="text-2xl font-bold mb-2">{{ getPageTitle() }}</h2>
        <p class="text-muted-foreground">Esta sección está en construcción</p>
        <p class="text-xs text-muted-foreground mt-2">Ruta actual: {{ $route.path }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const getPageTitle = () => {
  const routeNames: Record<string, string> = {
    proyectos: 'Proyectos',
    perfil: 'Perfil',
    'gestion-salones': 'Gestión de Salones',
    'bolsa-trabajo': 'Bolsa de Trabajo',
    ayuda: 'Ayuda',
  }

  return routeNames[route.name as string] || 'Página'
}
</script>
