<script setup lang="ts">
import type { SidebarProps } from '@/components/ui/sidebar'
import { ref } from 'vue'

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  LogOut,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-vue-next"
import NavMain from '@/components/NavMain.vue'
import NavUser from '@/components/NavUser.vue'
import TeamSwitcher from '@/components/TeamSwitcher.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: "icon",
})

// Referencia al componente ThemeToggle
const themeToggleRef = ref<InstanceType<typeof ThemeToggle>>()

// Data for DTT Platform
const data = {
  user: {
    name: "Edgar Rolando Alvarez Rodriguez",
    email: "edgar@dtt.com",
    avatar: "/avatars/edgar.jpg",
  },
  teams: [
    {
      name: "DTT Platform",
      logo: GalleryVerticalEnd,
      plan: "Educational",
    },
    {
      name: "FIUSAC",
      logo: AudioWaveform,
      plan: "Educational",
    },
    {
      name: "DTT Corp.",
      logo: Command,
      plan: "Professional",
    },
  ],
  navMain: [
    {
      title: "Inicio",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Proyectos",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Practica Final",
          url: "#",
        },
        {
          title: "Escuela de Vacaciones",
          url: "#",
        },
        {
          title: "Sanciones por copia y plagio",
          url: "#",
        },
        {
          title: "Recepción de Papelería",
          url: "#",
        },
        {
          title: "DSI",
          url: "#",
        },
      ],
    },
    {
      title: "Gestion de Salones",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Reservar Salon",
          url: "#",
        },
        {
          title: "Mis gestiones",
          url: "#",
        },
      ],
    },
    {
      title: "Mis cursos",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Mis cursos",
          url: "#",
        },
        {
          title: "Incidentes",
          url: "#",
        },
      ],
    },
    {
      title: "Bolsa de Trabajo",
      url: "#",
      icon: Frame,
      items: [
        {
          title: "Mi CV",
          url: "#",
        },
        {
          title: "Formulario CV",
          url: "#",
        },
        {
          title: "Ofertas Laborales",
          url: "#",
        },
        {
          title: "Mis Aplicaciones",
          url: "#",
        },
      ],
    },
    {
      title: "Perfil",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Mis Datos",
          url: "#",
        },
        {
          title: "Contraseña",
          url: "#",
        },
        {
          title: "Sanciones y faltas",
          url: "#",
        },
      ],
    },
    {
      title: "Ayuda",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Archivos",
          url: "#",
        },
        {
          title: "Enlaces",
          url: "#",
        },
        {
          title: "Preguntas frecuentes",
          url: "#",
        },
      ],
    },
  ],
}
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <TeamSwitcher :teams="data.teams" />
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="data.navMain" />
      <SidebarMenu class="mt-auto">
        <SidebarMenuItem class="px-2">
          <SidebarMenuButton class="w-full justify-start" @click="themeToggleRef?.toggleTheme()">
            <ThemeToggle ref="themeToggleRef" />
            <span>Tema</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem class="px-2">
          <SidebarMenuButton>
            <LogOut />
            <span>Salir</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarContent>
    <SidebarFooter>
      <NavUser :user="data.user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
