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
