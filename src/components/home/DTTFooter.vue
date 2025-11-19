<template>
  <footer class="bg-zinc-900 text-zinc-100 border-t border-zinc-700">
    <!-- Main Footer Content -->
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Logo and Description -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <img 
              src="/logo-ecys-fiusac-min.png" 
              alt="Logo ECYS" 
              class="h-12 w-auto filter brightness-0 invert"
            />
          </div>
          <div class="space-y-2">
            <h3 class="font-semibold text-lg">Facultad de Ingeniería</h3>
            <p class="text-zinc-300 text-sm leading-relaxed">
              Escuela de Ingeniería en Ciencias y Sistemas - Universidad de San Carlos de Guatemala
            </p>
          </div>
          
          <!-- Social Links -->
          <div class="flex space-x-3 pt-2">
            <Button 
              variant="ghost" 
              size="sm" 
              class="h-9 w-9 p-0 hover:bg-primary/20 hover:text-primary text-zinc-400"
              @click="openSocial('facebook')"
            >
              <FacebookIcon class="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              class="h-9 w-9 p-0 hover:bg-primary/20 hover:text-primary text-zinc-400"
              @click="openSocial('instagram')"
            >
              <InstagramIcon class="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              class="h-9 w-9 p-0 hover:bg-primary/20 hover:text-primary text-zinc-400"
              @click="openSocial('twitter')"
            >
              <TwitterIcon class="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              class="h-9 w-9 p-0 hover:bg-primary/20 hover:text-primary text-zinc-400"
              @click="openSocial('youtube')"
            >
              <YoutubeIcon class="h-4 w-4" />
            </Button>
          </div>
        </div>

        <!-- Temas Populares -->
        <div class="space-y-4">
          <h3 class="font-semibold text-lg">Temas Populares</h3>
          <ul class="space-y-3">
            <li v-for="link in popularLinks" :key="link.name">
              <router-link 
                :to="link.path" 
                class="text-sm text-zinc-300 hover:text-zinc-100 transition-colors duration-200 flex items-center group"
              >
                <ChevronRightIcon class="h-3 w-3 mr-2 group-hover:tranzinc-x-1 transition-transform duration-200" />
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Recursos Académicos -->
        <div class="space-y-4">
          <h3 class="font-semibold text-lg">Recursos Académicos</h3>
          <ul class="space-y-3">
            <li v-for="resource in academicResources" :key="resource.name">
              <router-link 
                :to="resource.path" 
                class="text-sm text-zinc-300 hover:text-zinc-100 transition-colors duration-200 flex items-center group"
              >
                <ChevronRightIcon class="h-3 w-3 mr-2 group-hover:tranzinc-x-1 transition-transform duration-200" />
                {{ resource.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contacto y Ayuda -->
        <div class="space-y-4">
          <h3 class="font-semibold text-lg">Contacto y Ayuda</h3>
          
          <!-- Contact Info -->
          <div class="space-y-3">
            <div class="flex items-center space-x-3 text-sm">
              <div class="shrink-0">
                <MailIcon class="h-4 w-4 text-zinc-400" />
              </div>
              <a 
                href="mailto:soporte@dtt-ecys.org" 
                class="text-zinc-300 hover:text-primary transition-colors"
              >
                soporte@dtt-ecys.org
              </a>
            </div>
            
            <div class="flex items-center space-x-3 text-sm">
              <div class="shrink-0">
                <MapPinIcon class="h-4 w-4 text-zinc-400" />
              </div>
              <span class="text-zinc-300">
                Ciudad Universitaria, Zona 12, Guatemala
              </span>
            </div>

            <div class="flex items-center space-x-3 text-sm">
              <div class="shrink-0">
                <PhoneIcon class="h-4 w-4 text-zinc-400" />
              </div>
              <span class="text-zinc-300">
                (502) 2418-9000
              </span>
            </div>
          </div>

          <!-- Quick Links -->
          <ul class="space-y-2 pt-2">
            <li v-for="contact in contactLinks" :key="contact.name">
              <router-link 
                :to="contact.path" 
                class="text-sm text-zinc-300 hover:text-zinc-100 transition-colors duration-200 flex items-center group"
              >
                <ChevronRightIcon class="h-3 w-3 mr-2 group-hover:tranzinc-x-1 transition-transform duration-200" />
                {{ contact.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <Separator class="bg-zinc-700" />

    <!-- Bottom Footer -->
    <div class="container mx-auto px-4 py-6">
      <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div class="text-center md:text-left">
          <p class="text-sm text-zinc-300">
            © 2024 Universidad de San Carlos de Guatemala. Todos los derechos reservados.
          </p>
          <p class="text-xs text-zinc-400 mt-1">
            Sistema de Seguimiento de la Escuela de Ciencias y Sistemas
          </p>
        </div>
        
        <div class="flex items-center space-x-4 text-xs text-zinc-400">
          <router-link 
            to="/privacy" 
            class="hover:text-primary transition-colors"
          >
            Privacidad
          </router-link>
          <span>•</span>
          <router-link 
            to="/terms" 
            class="hover:text-primary transition-colors"
          >
            Términos
          </router-link>
          <span>•</span>
          <a 
            href="https://www.simio.com/" 
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-primary transition-colors"
          >
            Powered by Simio
          </a>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="mt-6 pt-4 border-t border-zinc-700/60">
        <div class="text-center space-y-2">
          <p class="text-xs text-zinc-400">
            Universidad de San Carlos de Guatemala utiliza software de simulación Simio bajo una licencia de Simio LLC 
            (<a 
              href="https://www.simio.com/" 
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-primary transition-colors underline"
            >
              www.simio.com
            </a>).
          </p>
          <div class="flex items-center justify-center space-x-2 text-xs text-zinc-500">
            <HeartIcon class="h-3 w-3" />
            <span>Hecho con dedicación para la comunidad USAC</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  ChevronRightIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  HeartIcon,
} from 'lucide-vue-next'

const popularLinks = ref([
  { name: 'Pensum de Estudios', path: '/pensum' },
  { name: 'Áreas de la Carrera', path: '/areas' },
  { name: 'Horarios de Curso', path: '/horarios/clases' },
  { name: 'Horarios de Laboratorio', path: '/horarios/laboratorio' },
])

const academicResources = ref([
  { name: 'Biblioteca Digital', path: '/biblioteca' },
  { name: 'Revista ECYS', path: '/revista' },
  { name: 'Programas de Curso', path: '/programas' },
  { name: 'Procesos de Graduación', path: '/graduacion' },
])

const contactLinks = ref([
  { name: 'Centro de Ayuda', path: '/ayuda' },
  { name: 'Contacto', path: '/contacto' },
  { name: 'Acerca de ECYS', path: '/nosotros' },
])

const openSocial = (platform: string) => {
  const urls = {
    facebook: 'https://www.facebook.com/ecysFIUSAC',
    instagram: 'https://www.instagram.com/ecys_fiusac/',
    twitter: 'https://twitter.com/ecys_fiusac',
    youtube: 'https://www.youtube.com/channel/YOUR_CHANNEL'
  }
  
  const url = urls[platform as keyof typeof urls]
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}
</script>