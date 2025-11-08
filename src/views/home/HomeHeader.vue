<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import { Icon } from '@iconify/vue'
import { useColorMode } from '@vueuse/core'
import { Menu, X, LogIn, GraduationCap, Building, User, ChevronDown, BookOpen, Calendar, Clock, FolderOpen, Users } from 'lucide-vue-next'

const emit = defineEmits(['open-login'])
const isMenuOpen = ref(false)
const mode = useColorMode()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const openLogin = () => emit('open-login')
</script>

<template>
  <nav class="bg-card shadow-sm border-b-2 border-orange-500">
    <div class="max-w-7xl mx-auto px-4 py-2.5  sm:px-6 lg:px-14">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <div class="shrink-0 flex items-center space-x-3">
            <img src="/logo-ecys-fiusac-min.png" alt="Logo ECYS FIUSAC" class="h-16 w-auto" />
          </div>
        </div>

        <div class="hidden lg:flex items-center space-x-4">
          <a href="#" class="text-muted-foreground hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-200">Inicio</a>
          <a href="#" class="text-muted-foreground hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-200">Nosotros</a>
          
          <!-- Dropdown Académico -->
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="ghost" size="sm" class="text-muted-foreground  px-3 py-2 text-sm font-medium">
                Académico <ChevronDown class="w-3 h-3 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem class="cursor-pointer"><BookOpen class="w-4 h-4 mr-2" />Revista ECYS</DropdownMenuItem>
              <DropdownMenuItem class="cursor-pointer"><Calendar class="w-4 h-4 mr-2" />Eventos</DropdownMenuItem>
              <DropdownMenuItem class="cursor-pointer"><Clock class="w-4 h-4 mr-2" />Horarios</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <!-- Dropdown Recursos -->
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="ghost" size="sm" class="text-muted-foreground  px-3 py-2 text-sm font-medium">
                Recursos <ChevronDown class="w-3 h-3 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem class="cursor-pointer"><FolderOpen class="w-4 h-4 mr-2" />Recursos</DropdownMenuItem>
              <DropdownMenuItem class="cursor-pointer"><Users class="w-4 h-4 mr-2" />Catedráticos</DropdownMenuItem>
              <DropdownMenuItem class="cursor-pointer"><BookOpen class="w-4 h-4 mr-2" />Biblioteca Digital</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Separator orientation="vertical" class="h-6" />
          <div class="flex items-center space-x-3">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="outline" size="sm" class="w-9 h-9 p-0">
                  <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Icon icon="radix-icons:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span class="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem @click="mode = 'light'" class="cursor-pointer"><Icon icon="radix-icons:sun" class="w-4 h-4 mr-2" />Claro</DropdownMenuItem>
                <DropdownMenuItem @click="mode = 'dark'" class="cursor-pointer"><Icon icon="radix-icons:moon" class="w-4 h-4 mr-2" />Oscuro</DropdownMenuItem>
                <DropdownMenuItem @click="mode = 'auto'" class="cursor-pointer"><Icon icon="radix-icons:desktop" class="w-4 h-4 mr-2" />Sistema</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="ghost"><User class="w-4 h-4" /> Acceder</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" class="w-56">
                <DropdownMenuLabel class="text-primary font-semibold">Iniciar Sesión</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem @click="openLogin" class="cursor-pointer"><LogIn class="w-4 h-4 mr-2" />Estudiante</DropdownMenuItem>
                <DropdownMenuItem class="cursor-pointer"><GraduationCap class="w-4 h-4 mr-2" />Catedrático</DropdownMenuItem>
                <DropdownMenuItem class="cursor-pointer"><Building class="w-4 h-4 mr-2" />Administrador</DropdownMenuItem>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div class="lg:hidden flex items-center">
          <button @click="toggleMenu" class="text-muted-foreground hover:text-orange-500 focus:outline-none focus:text-orange-500">
            <Menu v-if="!isMenuOpen" class="h-6 w-6" />
            <X v-else class="h-6 w-6" />
          </button>
        </div>
      </div>

      <div v-if="isMenuOpen" class="lg:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" class="text-muted-foreground hover:text-orange-500 block px-3 py-2">Inicio</a>
          <a href="#" class="text-muted-foreground hover:text-orange-500 block px-3 py-2">Nosotros</a>
          
          <!-- Sección Académico -->
          <div class="px-3 py-2">
            <p class="text-xs font-semibold text-orange-600 mb-2 uppercase tracking-wide">Académico</p>
            <div class="space-y-1 ml-2">
              <a href="#" class="text-muted-foreground hover:text-orange-500 px-2 py-1 text-sm flex items-center gap-2"><BookOpen class="w-4 h-4" />Revista ECYS</a>
              <a href="#" class="text-muted-foreground hover:text-orange-500 px-2 py-1 text-sm flex items-center gap-2"><Calendar class="w-4 h-4" />Eventos</a>
              <a href="#" class="text-muted-foreground hover:text-orange-500 px-2 py-1 text-sm flex items-center gap-2"><Clock class="w-4 h-4" />Horarios</a>
            </div>
          </div>
          
          <!-- Sección Recursos -->
          <div class="px-3 py-2">
            <p class="text-xs font-semibold text-orange-600 mb-2 uppercase tracking-wide">Recursos</p>
            <div class="space-y-1 ml-2">
              <a href="#" class="text-muted-foreground hover:text-orange-500 px-2 py-1 text-sm flex items-center gap-2"><FolderOpen class="w-4 h-4" />Recursos</a>
              <a href="#" class="text-muted-foreground hover:text-orange-500 px-2 py-1 text-sm flex items-center gap-2"><Users class="w-4 h-4" />Catedráticos</a>
              <a href="#" class="text-muted-foreground hover:text-orange-500 px-2 py-1 text-sm flex items-center gap-2"><BookOpen class="w-4 h-4" />Biblioteca Digital</a>
            </div>
          </div>
          <Separator class="my-3" />
          <div class="px-3 py-2">
            <p class="text-sm font-semibold text-foreground mb-2">Tema:</p>
            <div class="flex gap-2">
              <Button variant="outline" size="sm" @click="mode = 'light'" class="flex-1 text-xs"><Icon icon="radix-icons:sun" class="w-3 h-3 mr-1" />Claro</Button>
              <Button variant="outline" size="sm" @click="mode = 'dark'" class="flex-1 text-xs"><Icon icon="radix-icons:moon" class="w-3 h-3 mr-1" />Oscuro</Button>
              <Button variant="outline" size="sm" @click="mode = 'auto'" class="flex-1 text-xs"><Icon icon="radix-icons:desktop" class="w-3 h-3 mr-1" />Auto</Button>
            </div>
          </div>
          <Separator class="my-3" />
          <div class="space-y-2">
            <p class="px-3 py-1 text-sm font-semibold text-orange-600">Acceder como:</p>
            <button @click="openLogin" class="w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-orange-500 flex items-center gap-2"><LogIn class="w-4 h-4" />Estudiante</button>
            <button class="w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-orange-500 flex items-center gap-2"><GraduationCap class="w-4 h-4" />Catedrático</button>
            <button class="w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-orange-500 flex items-center gap-2"><Building class="w-4 h-4" />Administrador</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* small styles if needed */
</style>
