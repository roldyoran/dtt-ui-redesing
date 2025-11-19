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
          'border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80':
            !isScrolled,
          'bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/95 border border-border/40 rounded-2xl shadow-lg mx-2 px-3 lg:px-4':
            isScrolled,
        }"
      >
        <!-- Logo -->
        <div class="flex items-center shrink-0">
          <router-link to="/" class="flex items-center space-x-2">
            <img
              src="/logo-ecys-fiusac-min.png"
              alt="DTT ECYS"
              class="h-10 w-auto transition-none"
            />
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex lg:items-center lg:space-x-1">
          <Button variant="ghost" class="text-sm font-medium" as-child>
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
                <router-link to="/profile_student" class="w-full"
                  >Perfil del Estudiante</router-link
                >
              </DropdownMenuItem>
              <DropdownMenuItem as-child>
                <router-link to="/escuela" class="w-full">Escuela</router-link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" class="text-sm font-medium" as-child>
            <router-link to="/revista">Revista ECYS</router-link>
          </Button>

          <Button variant="ghost" class="text-sm font-medium" as-child>
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
                <router-link to="/horarios/laboratorio" class="w-full"
                  >Horario Laboratorio</router-link
                >
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

          <Button variant="ghost" class="text-sm font-medium" as-child>
            <router-link to="/catedraticos">Catedráticos</router-link>
          </Button>

          <Button variant="ghost" class="text-sm font-medium" as-child>
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
        <div class="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet v-model:open="isOpen">
            <SheetTrigger as-child>
              <Button variant="ghost" size="icon" class="h-10 w-10">
                <MenuIcon class="h-5 w-5" />
                <span class="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" class="w-[85vw] sm:w-[400px] px-0">
              <SheetHeader class="px-6 pb-4 border-b">
                <div class="flex items-center gap-3">
                  <img src="/logo-ecys-fiusac-min.png" alt="DTT ECYS" class="h-12 w-auto" />
                  <div class="flex flex-col items-start">
                    <SheetTitle class="text-lg">Navegación</SheetTitle>
                    <p class="text-xs text-muted-foreground">DTT ECYS FIUSAC</p>
                  </div>
                </div>
              </SheetHeader>

              <div class="flex flex-col h-[calc(100vh-8rem)]">
                <div class="flex-1 overflow-y-auto py-4 px-4">
                  <div class="space-y-1">
                    <Button
                      variant="ghost"
                      class="w-full justify-start h-11 px-4 text-base font-medium"
                      as-child
                      @click="isOpen = false"
                    >
                      <router-link to="/" class="flex items-center">
                        <HomeIcon class="mr-3 h-5 w-5" />
                        Inicio
                      </router-link>
                    </Button>

                    <!-- Mobile Nosotros -->
                    <Collapsible v-model:open="mobileMenus.nosotros" class="space-y-1">
                      <CollapsibleTrigger as-child>
                        <Button
                          variant="ghost"
                          class="w-full justify-start h-11 px-4 text-base font-medium"
                        >
                          <UsersIcon class="mr-3 h-5 w-5 shrink-0" />
                          <span class="flex-1 text-left">Nosotros</span>
                          <ChevronDownIcon
                            class="h-4 w-4 ml-2 shrink-0 transition-transform duration-200"
                            :class="{ 'rotate-180': mobileMenus.nosotros }"
                          />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent class="space-y-1">
                        <div class="ml-8 space-y-1 pl-4 border-l-2 border-border/50">
                          <Button
                            variant="ghost"
                            size="sm"
                            class="w-full justify-start h-9 text-sm hover:bg-accent/50"
                            as-child
                            @click="isOpen = false"
                          >
                            <router-link to="/about">Acerca de Nosotros</router-link>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            class="w-full justify-start h-9 text-sm hover:bg-accent/50"
                            as-child
                            @click="isOpen = false"
                          >
                            <router-link to="/autorities">Autoridades</router-link>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            class="w-full justify-start h-9 text-sm hover:bg-accent/50"
                            as-child
                            @click="isOpen = false"
                          >
                            <router-link to="/profile_student">Perfil del Estudiante</router-link>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            class="w-full justify-start h-9 text-sm hover:bg-accent/50"
                            as-child
                            @click="isOpen = false"
                          >
                            <router-link to="/escuela">Escuela</router-link>
                          </Button>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    <Button
                      variant="ghost"
                      class="w-full justify-start h-11 px-4 text-base font-medium"
                      as-child
                      @click="isOpen = false"
                    >
                      <router-link to="/revista" class="flex items-center">
                        <BookOpenIcon class="mr-3 h-5 w-5" />
                        Revista ECYS
                      </router-link>
                    </Button>

                    <Button
                      variant="ghost"
                      class="w-full justify-start h-11 px-4 text-base font-medium"
                      as-child
                      @click="isOpen = false"
                    >
                      <router-link to="/eventos" class="flex items-center">
                        <CalendarIcon class="mr-3 h-5 w-5" />
                        Eventos
                      </router-link>
                    </Button>

                    <!-- Mobile Horarios -->
                    <Collapsible v-model:open="mobileMenus.horarios" class="space-y-1">
                      <CollapsibleTrigger as-child>
                        <Button
                          variant="ghost"
                          class="w-full justify-start h-11 px-4 text-base font-medium"
                        >
                          <ClockIcon class="mr-3 h-5 w-5 shrink-0" />
                          <span class="flex-1 text-left">Horarios</span>
                          <ChevronDownIcon
                            class="h-4 w-4 ml-2 shrink-0 transition-transform duration-200"
                            :class="{ 'rotate-180': mobileMenus.horarios }"
                          />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent class="space-y-1">
                        <div class="ml-8 space-y-1 pl-4 border-l-2 border-border/50">
                          <Button
                            variant="ghost"
                            size="sm"
                            class="w-full justify-start h-9 text-sm hover:bg-accent/50"
                            as-child
                            @click="isOpen = false"
                          >
                            <router-link to="/horarios/clases">Horario Clases</router-link>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            class="w-full justify-start h-9 text-sm hover:bg-accent/50"
                            as-child
                            @click="isOpen = false"
                          >
                            <router-link to="/horarios/laboratorio"
                              >Horario Laboratorio</router-link
                            >
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            class="w-full justify-start h-9 text-sm hover:bg-accent/50"
                            as-child
                            @click="isOpen = false"
                          >
                            <router-link to="/horarios/dsi">Horario DSI</router-link>
                          </Button>
                          <div class="h-px bg-border/50 my-2 mx-2"></div>
                          <Button
                            variant="ghost"
                            size="sm"
                            class="w-full justify-start h-9 text-sm hover:bg-accent/50"
                            as-child
                            @click="isOpen = false"
                          >
                            <router-link to="/programas">Programa del Curso PDF</router-link>
                          </Button>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    <!-- Mobile Recursos -->
                    <Collapsible v-model:open="mobileMenus.recursos" class="space-y-1">
                      <CollapsibleTrigger as-child>
                        <Button
                          variant="ghost"
                          class="w-full justify-start h-11 px-4 text-base font-medium"
                        >
                          <FolderIcon class="mr-3 h-5 w-5 shrink-0" />
                          <span class="flex-1 text-left">Recursos</span>
                          <ChevronDownIcon
                            class="h-4 w-4 ml-2 shrink-0 transition-transform duration-200"
                            :class="{ 'rotate-180': mobileMenus.recursos }"
                          />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent class="space-y-1">
                        <div class="ml-8 space-y-1 pl-4 border-l-2 border-border/50">
                          <Button
                            variant="ghost"
                            size="sm"
                            class="w-full justify-start h-9 text-sm hover:bg-accent/50"
                            as-child
                            @click="isOpen = false"
                          >
                            <router-link to="/enlaces">Enlaces</router-link>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            class="w-full justify-start h-9 text-sm hover:bg-accent/50"
                            as-child
                            @click="isOpen = false"
                          >
                            <router-link to="/archivos">Archivos</router-link>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            class="w-full justify-start h-9 text-sm hover:bg-accent/50"
                            as-child
                            @click="isOpen = false"
                          >
                            <router-link to="/registro">Registro</router-link>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            class="w-full justify-start h-9 text-sm hover:bg-accent/50"
                            as-child
                            @click="isOpen = false"
                          >
                            <router-link to="/pensum">Pensum</router-link>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            class="w-full justify-start h-9 text-sm hover:bg-accent/50"
                            as-child
                            @click="isOpen = false"
                          >
                            <router-link to="/graduacion">Procesos de Graduación</router-link>
                          </Button>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    <Button
                      variant="ghost"
                      class="w-full justify-start h-11 px-4 text-base font-medium"
                      as-child
                      @click="isOpen = false"
                    >
                      <router-link to="/catedraticos" class="flex items-center">
                        <UserIcon class="mr-3 h-5 w-5" />
                        Catedráticos
                      </router-link>
                    </Button>

                    <Button
                      variant="ghost"
                      class="w-full justify-start h-11 px-4 text-base font-medium"
                      as-child
                      @click="isOpen = false"
                    >
                      <router-link to="/biblioteca" class="flex items-center">
                        <BookIcon class="mr-3 h-5 w-5" />
                        Biblioteca Digital
                      </router-link>
                    </Button>
                  </div>
                </div>

                <!-- Mobile Login Button - Fixed at bottom -->
                <div class="border-t p-4 bg-background/95 backdrop-blur">
                  <Button
                    class="w-full h-11 text-base font-medium shadow-sm"
                    @click="() => { $emit('open-login'); isOpen = false }"
                  >
                    <UserIcon class="mr-2 h-5 w-5" />
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
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  ChevronDownIcon,
  MenuIcon,
  UserIcon,
  HomeIcon,
  UsersIcon,
  BookOpenIcon,
  CalendarIcon,
  ClockIcon,
  FolderIcon,
  BookIcon,
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
watch(
  () => route.path,
  () => {
    // Check scroll position immediately and after page load
    handleScroll()
    setTimeout(() => {
      handleScroll()
    }, 50)
  },
  { immediate: true },
)

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
