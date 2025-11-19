<template>
  <section class="py-16 bg-background">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">Noticias y Actualidad</h2>
        <div class="flex items-center justify-center space-x-2 text-muted-foreground">
          <div class="w-8 h-px bg-primary"></div>
          <StarIcon class="h-4 w-4 text-primary" />
          <div class="w-8 h-px bg-primary"></div>
        </div>
        <p class="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Mantente al día con las últimas noticias, eventos y actividades de la Escuela de Ciencias
          y Sistemas
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <!-- Facebook Feed -->
        <Card class="overflow-hidden">
          <CardHeader class="space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <FacebookIcon class="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <CardTitle class="text-lg">Noticias Facebook</CardTitle>
                <CardDescription>Síguenos en nuestras redes sociales</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <!-- Facebook Embed Placeholder -->
              <div
                class="bg-muted rounded-lg p-8 text-center min-h-96 flex items-center justify-center"
              >
                <div class="space-y-4">
                  <div
                    class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto"
                  >
                    <FacebookIcon class="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 class="font-semibold text-foreground">Feed de Facebook</h3>
                    <p class="text-sm text-muted-foreground mt-2">
                      Contenido de nuestro Facebook oficial
                    </p>
                  </div>
                  <Button variant="outline" size="sm" @click="openFacebook">
                    <ExternalLinkIcon class="mr-2 h-4 w-4" />
                    Ver en Facebook
                  </Button>
                </div>
              </div>

              <!-- Sample News Items -->
              <div class="space-y-3">
                <div
                  v-for="news in sampleNews"
                  :key="news.id"
                  class="border-l-4 border-primary pl-4 py-2"
                >
                  <h4 class="font-medium text-sm text-foreground">{{ news.title }}</h4>
                  <p class="text-xs text-muted-foreground mt-1">{{ news.date }}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- YouTube Video -->
        <Card class="overflow-hidden">
          <CardHeader class="space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <YoutubeIcon class="h-5 w-5 text-red-600" />
              </div>
              <div>
                <CardTitle class="text-lg">Videos Destacados</CardTitle>
                <CardDescription>Conoce más sobre nuestra escuela</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <!-- Video Player Area -->
              <div
                class="relative aspect-video bg-muted rounded-lg overflow-hidden cursor-pointer group"
                @click="playVideo"
              >
                <img
                  :src="videoThumbnail"
                  alt="Video thumbnail"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <!-- Play Button Overlay -->
                <div
                  class="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors"
                >
                  <div
                    class="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  >
                    <PlayIcon class="h-8 w-8 text-red-600 ml-1" />
                  </div>
                </div>
              </div>

              <!-- Video Info -->
              <div class="space-y-2">
                <h3 class="font-semibold text-foreground">{{ videoTitle }}</h3>
                <p class="text-sm text-muted-foreground">{{ videoDescription }}</p>

                <!-- Video Stats -->
                <div class="flex items-center space-x-4 text-xs text-muted-foreground">
                  <div class="flex items-center space-x-1">
                    <EyeIcon class="h-3 w-3" />
                    <span>{{ videoViews }} visualizaciones</span>
                  </div>
                  <div class="flex items-center space-x-1">
                    <ClockIcon class="h-3 w-3" />
                    <span>{{ videoDate }}</span>
                  </div>
                </div>
              </div>

              <!-- More Videos Button -->
              <Button variant="outline" size="sm" class="w-full" @click="openYouTube">
                <YoutubeIcon class="mr-2 h-4 w-4" />
                Ver más videos
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  FacebookIcon,
  YoutubeIcon,
  StarIcon,
  ExternalLinkIcon,
  PlayIcon,
  EyeIcon,
  ClockIcon,
} from 'lucide-vue-next'

// Sample news data
const sampleNews = ref([
  {
    id: 1,
    title: 'Nuevo laboratorio de IA inaugurado',
    date: 'Hace 2 días',
  },
  {
    id: 2,
    title: 'Convocatoria para beca de investigación',
    date: 'Hace 1 semana',
  },
  {
    id: 3,
    title: 'Conferencia sobre tecnologías emergentes',
    date: 'Hace 2 semanas',
  },
])

// Video data
const videoThumbnail = ref('/fiusac03.jpg')
const videoTitle = ref('Conoce la Escuela de Ciencias y Sistemas')
const videoDescription = ref(
  'Un recorrido por nuestras instalaciones y programas académicos que forman a los ingenieros del futuro.',
)
const videoViews = ref('1,234')
const videoDate = ref('Hace 1 mes')

const openFacebook = () => {
  window.open('https://www.facebook.com/ecysFIUSAC', '_blank')
}

const openYouTube = () => {
  window.open('https://www.youtube.com/channel/YOUR_CHANNEL', '_blank')
}

const playVideo = () => {
  // Here you would implement the video player logic
  console.log('Play video')
}
</script>
