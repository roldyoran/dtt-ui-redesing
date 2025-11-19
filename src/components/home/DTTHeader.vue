<template>
  <header 
    class="sticky z-50 w-full transition-all duration-300 ease-in-out"
    :class="{
      'top-0': !isScrolled,
      'top-3': isScrolled,
    }"
  >
    <div 
      class="transition-all duration-300 ease-in-out"
      :class="{
        'container mx-auto px-4': !isScrolled,
        'container mx-auto px-0 lg:px-0': isScrolled,
      }"
    >
      <nav 
        class="flex h-18 items-center justify-between transition-all duration-300 ease-in-out"
        :class="{
          'border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80': !isScrolled,
          'bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/95 border border-border/40 rounded-2xl shadow-lg mx-2 px-3 lg:px-4': isScrolled,
        }"
      >
        <!-- Logo -->
        <div class="flex items-center shrink-0">
          <router-link to="/" class="flex items-center space-x-2">
            <img 
              src="/logo-ecys-fiusac-min.png" 
              alt="DTT ECYS" 
              class="h-10 w-auto transition-none"
            >
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex lg:items-center lg:space-x-1">
          <Button 
            variant="ghost" 
            class="text-sm font-medium"
            as-child
          >
            <router-link to="/">Inicio</router-link>
          </Button>

          <!-- Nosotros Dropdown -->
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="ghost" class="text-sm font-medium">
                Nosotros
                <ChevronDownIcon class="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" class="w-56">
              <DropdownMenuItem as-child>
                <router-link to="/about" class="w-full">Acerca de Nosotros</router-link>
              </DropdownMenuItem>
              <DropdownMenuItem as-child>
                <router-link to="/autorities" class="w-full">Autoridades</router-link>
              </DropdownMenuItem>
              <DropdownMenuItem as-child>
                <router-link to="/profile_student" class="w-full">Perfil del Estudiante</router-link>
              </DropdownMenuItem>
              <DropdownMenuItem as-child>
                <router-link to="/escuela" class="w-full">Escuela</router-link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button 
            variant="ghost" 
            class="text-sm font-medium"
            as-child
          >
            <router-link to="/revista">Revista ECYS</router-link>
          </Button>

          <Button 
            variant="ghost" 
            class="text-sm font-medium"
            as-child
          >
            <router-link to="/eventos">Eventos</router-link>
          </Button>

          <!-- Horarios Dropdown -->
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="ghost" class="text-sm font-medium">
                Horarios
                <ChevronDownIcon class="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" class="w-56">
              <DropdownMenuItem as-child>
                <router-link to="/horarios/clases" class="w-full">Horario Clases</router-link>
              </DropdownMenuItem>
              <DropdownMenuItem as-child>
                <router-link to="/horarios/laboratorio" class="w-full">Horario Laboratorio</router-link>
              </DropdownMenuItem>
              <DropdownMenuItem as-child>
                <router-link to="/horarios/dsi" class="w-full">Horario DSI</router-link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem as-child>
                <router-link to="/programas" class="w-full">Programa del Curso PDF</router-link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <!-- Recursos Dropdown -->
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="ghost" class="text-sm font-medium">
                Recursos
                <ChevronDownIcon class="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" class="w-56">
              <DropdownMenuItem as-child>
                <router-link to="/enlaces" class="w-full">Enlaces</router-link>
              </DropdownMenuItem>
              <DropdownMenuItem as-child>
                <router-link to="/archivos" class="w-full">Archivos</router-link>
              </DropdownMenuItem>
              <DropdownMenuItem as-child>
                <router-link to="/registro" class="w-full">Registro</router-link>
              </DropdownMenuItem>
              <DropdownMenuItem as-child>
                <router-link to="/pensum" class="w-full">Pensum</router-link>
              </DropdownMenuItem>
              <DropdownMenuItem as-child>
                <router-link to="/graduacion" class="w-full">Procesos de Graduación</router-link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button 
            variant="ghost" 
            class="text-sm font-medium"
            as-child
          >
            <router-link to="/catedraticos">Catedráticos</router-link>
          </Button>

          <Button 
            variant="ghost" 
            class="text-sm font-medium"
            as-child
          >
            <router-link to="/biblioteca">Biblioteca Digital</router-link>
          </Button>

          <!-- Theme Toggle -->
          <ThemeToggle class="ml-2" />

          <!-- Login Button -->
          <Button 
            variant="default" 
            :class="{
              'ml-4': !isScrolled,
              'ml-3 px-3 text-sm': isScrolled,
            }"
            @click="$emit('open-login')"
          >
            <UserIcon class="h-4 w-4 mr-2" />
            Iniciar Sesión
          </Button>
        </div>

        <!-- Mobile menu button -->
        <div class="lg:hidden">
          <Sheet v-model:open="isOpen">
            <SheetTrigger as-child>
              <Button variant="ghost" size="sm">
                <MenuIcon class="h-6 w-6" />
                <span class="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" class="w-80">
              <SheetHeader>
                <SheetTitle>Navegación</SheetTitle>
              </SheetHeader>
              <div class="mt-6 flow-root">
                <div class="space-y-2">
                  <Button 
                    variant="ghost" 
                    class="w-full justify-start"
                    as-child
                    @click="isOpen = false"
                  >
                    <router-link to="/">
                      <HomeIcon class="mr-2 h-4 w-4" />
                      Inicio
                    </router-link>
                  </Button>

                  <!-- Mobile Nosotros -->
                  <Collapsible v-model:open="mobileMenus.nosotros">
                    <CollapsibleTrigger as-child>
                      <Button variant="ghost" class="w-full justify-between">
                        <span class="flex items-center">
                          <UsersIcon class="mr-2 h-4 w-4" />
                          Nosotros
                        </span>
                        <ChevronDownIcon class="h-4 w-4" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent class="pl-6 space-y-1">
                      <Button variant="ghost" size="sm" class="w-full justify-start" as-child @click="isOpen = false">
                        <router-link to="/about">Acerca de Nosotros</router-link>
                      </Button>
                      <Button variant="ghost" size="sm" class="w-full justify-start" as-child @click="isOpen = false">
                        <router-link to="/autoridades">Autoridades</router-link>
                      </Button>
                      <Button variant="ghost" size="sm" class="w-full justify-start" as-child @click="isOpen = false">
                        <router-link to="/profile_student">Perfil del Estudiante</router-link>
                      </Button>
                      <Button variant="ghost" size="sm" class="w-full justify-start" as-child @click="isOpen = false">
                        <router-link to="/escuela">Escuela</router-link>
                      </Button>
                    </CollapsibleContent>
                  </Collapsible>

                  <Button 
                    variant="ghost" 
                    class="w-full justify-start"
                    as-child
                    @click="isOpen = false"
                  >
                    <router-link to="/revista">
                      <BookOpenIcon class="mr-2 h-4 w-4" />
                      Revista ECYS
                    </router-link>
                  </Button>

                  <Button 
                    variant="ghost" 
                    class="w-full justify-start"
                    as-child
                    @click="isOpen = false"
                  >
                    <router-link to="/eventos">
                      <CalendarIcon class="mr-2 h-4 w-4" />
                      Eventos
                    </router-link>
                  </Button>

                  <!-- Mobile Theme Toggle -->
                  <div class="flex items-center justify-between py-2">
                    <span class="text-sm font-medium">Tema</span>
                    <ThemeToggle />
                  </div>

                  <!-- Mobile Login -->
                  <Button 
                    class="w-full mt-4"
                    @click="$emit('open-login'); isOpen = false"
                  >
                    <UserIcon class="mr-2 h-4 w-4" />
                    Iniciar Sesión
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  ChevronDownIcon,
  MenuIcon,
  UserIcon,
  HomeIcon,
  UsersIcon,
  BookOpenIcon,
  CalendarIcon,
  SunIcon,
  MoonIcon,
} from 'lucide-vue-next'
import ThemeToggle from '@/components/ThemeToggle.vue'

defineEmits<{
  'open-login': []
}>()

const route = useRoute()
const isOpen = ref(false)
const isScrolled = ref(false)
const mobileMenus = ref({
  nosotros: false,
  horarios: false,
  recursos: false,
})

// Scroll detection
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

// Reset scroll state when route changes
watch(() => route.path, () => {
  // Check scroll position immediately and after page load
  handleScroll()
  setTimeout(() => {
    handleScroll()
  }, 50)
}, { immediate: true })

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>