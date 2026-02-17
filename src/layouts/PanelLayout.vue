<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header
        class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12"
      >
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" />
          <Separator orientation="vertical" class="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem class="hidden md:block">
                <BreadcrumbLink href="/panel" class="cursor-pointer">
                  {{ breadcrumbData.section }}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator class="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>{{ breadcrumbData.page }}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <!-- Banner informativo -->
      <div v-if="route.name !== 'dashboard'" class="mx-4 mt-4">
        <div class="bg-primary/10 border-l-4 border-primary rounded-lg p-4 shadow-sm">
          <div class="flex items-start gap-3">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-foreground mb-1">Sección en Desarrollo</h3>
              <p class="text-sm text-muted-foreground">
                Los demás paneles y dashboards aún no han sido construidos. Por el momento, todas las secciones redirigen a "Mis Cursos" como vista de demostración.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Area - aquí se renderiza cada vista -->
      <div class="flex flex-1 flex-col">
        <RouterView />
      </div>
    </SidebarInset>

    <!-- Toaster para notificaciones -->
    <Toaster />
  </SidebarProvider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppSidebar from '@/components/AppSidebar.vue'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { Toaster } from '@/components/ui/sonner'

const route = useRoute()

// Computed para breadcrumbs dinámicos basados en la ruta actual
const breadcrumbData = computed(() => {
  switch (route.name) {
    case 'mis-cursos':
      return {
        section: 'Tutor Académico',
        page: 'Mis Cursos',
      }
    case 'perfil':
      return {
        section: 'Usuario',
        page: 'Perfil',
      }
    case 'proyectos':
      return {
        section: 'Tutor Académico',
        page: 'Proyectos',
      }
    case 'gestion-salones':
      return {
        section: 'Infraestructura',
        page: 'Gestión de Salones',
      }
    case 'bolsa-trabajo':
      return {
        section: 'Profesional',
        page: 'Bolsa de Trabajo',
      }
    case 'ayuda':
      return {
        section: 'Soporte',
        page: 'Ayuda',
      }
    default:
      return {
        section: 'Panel de Control',
        page: 'Dashboard',
      }
  }
})
</script>
