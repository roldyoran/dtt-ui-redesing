<script setup lang="ts">
import type { SidebarProps } from '@/components/ui/sidebar'
import { ref } from 'vue'

// Props estándar del sidebar
interface AppSidebarProps extends SidebarProps {}

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
  Sun,
  Moon,
  Monitor,
} from 'lucide-vue-next'
import NavMain from '@/components/NavMain.vue'
import NavUser from '@/components/NavUser.vue'
import TeamSwitcher from '@/components/TeamSwitcher.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import { useColorMode } from '@vueuse/core'
import { computed } from 'vue'

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

const props = withDefaults(defineProps<AppSidebarProps>(), {
  collapsible: 'icon',
})

// Referencia al componente ThemeToggle
const themeToggleRef = ref<InstanceType<typeof ThemeToggle>>()

// Theme management
const mode = useColorMode()

const currentThemeIcon = computed(() => {
  switch (mode.value) {
    case 'dark':
      return Moon
    case 'light':
      return Sun
    default:
      return Monitor
  }
})

const toggleTheme = async (event: MouseEvent) => {
  // Si el navegador no soporta View Transitions, cambiar directamente
  if (!document.startViewTransition) {
    mode.value = mode.value === 'light' ? 'dark' : 'light'
    return
  }

  // Obtener las coordenadas del click
  const x = event.clientX
  const y = event.clientY
  
  // Calcular el radio más grande desde el punto de click hasta cualquier esquina
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  )

  // Iniciar la transición con animación circular
  const transition = document.startViewTransition(() => {
    mode.value = mode.value === 'light' ? 'dark' : 'light'
  })

  await transition.ready

  // Animar el círculo expandiéndose desde el punto de click
  document.documentElement.animate(
    {
      clipPath: [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ]
    },
    {
      duration: 500,
      easing: 'ease-in-out',
      pseudoElement: '::view-transition-new(root)'
    }
  )
}

// Data for DTT Platform
const data = {
  user: {
    name: 'User DTT',
    email: 'user@dtt.com',
    avatar: '/avatars/user.jpg',
  },
  teams: [
    {
      name: 'DTT Platform',
      logo: BookOpen,
      plan: 'Educational',
    },
    // {
    //   name: "FIUSAC",
    //   logo: AudioWaveform,
    //   plan: "Educational",
    // },
    // {
    //   name: "DTT Corp.",
    //   logo: Command,
    //   plan: "Professional",
    // },
  ],
  navMain: [
    {
      title: 'Inicio',
      url: '/panel',
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: 'Proyectos',
      url: '/proyectos',
      icon: Bot,
      items: [
        {
          title: 'Practica Final',
          url: '/practica-final',
        },
        {
          title: 'Escuela de Vacaciones',
          url: '/escuela-vacaciones',
        },
        {
          title: 'Sanciones por copia y plagio',
          url: '/sanciones',
        },
        {
          title: 'Recepción de Papelería',
          url: '/papeleria',
        },
        {
          title: 'DSI',
          url: '/dsi',
        },
      ],
    },
    {
      title: 'Gestion de Salones',
      url: '/gestion-salones',
      icon: BookOpen,
      items: [
        {
          title: 'Reservar Salon',
          url: '/reservar-salon',
        },
        {
          title: 'Mis gestiones',
          url: '/mis-gestiones',
        },
      ],
    },
    {
      title: 'Mis cursos',
      url: '/mis-cursos',
      icon: Settings2,
      items: [
        {
          title: 'Mis cursos',
          url: '/mis-cursos',
        },
        {
          title: 'Incidentes',
          url: '/incidentes',
        },
      ],
    },
    {
      title: 'Bolsa de Trabajo',
      url: '/bolsa-trabajo',
      icon: Frame,
      items: [
        {
          title: 'Mi CV',
          url: '/mi-cv',
        },
        {
          title: 'Formulario CV',
          url: '/formulario-cv',
        },
        {
          title: 'Ofertas Laborales',
          url: '/ofertas-laborales',
        },
        {
          title: 'Mis Aplicaciones',
          url: '/mis-aplicaciones',
        },
      ],
    },
    {
      title: 'Perfil',
      url: '/perfil',
      icon: Settings2,
      items: [
        {
          title: 'Mis Datos',
          url: '/mis-datos',
        },
        {
          title: 'Contraseña',
          url: '/contrasena',
        },
        {
          title: 'Sanciones y faltas',
          url: '/sanciones-faltas',
        },
      ],
    },
    {
      title: 'Ayuda',
      url: '/ayuda',
      icon: BookOpen,
      items: [
        {
          title: 'Archivos',
          url: '/archivos',
        },
        {
          title: 'Enlaces',
          url: '/enlaces',
        },
        {
          title: 'Preguntas frecuentes',
          url: '/preguntas-frecuentes',
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
      <SidebarMenu class="mt-auto px-2">
        <SidebarMenuItem>
          <SidebarMenuButton @click="toggleTheme">
            <component :is="currentThemeIcon" />
            <span>Tema</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <RouterLink to="/">
            <SidebarMenuButton>
              <LogOut />
              <span>Salir</span>
            </SidebarMenuButton>
          </RouterLink>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarContent>
    <SidebarFooter>
      <NavUser :user="data.user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
