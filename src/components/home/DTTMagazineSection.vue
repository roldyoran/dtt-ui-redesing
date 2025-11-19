<template>
  <section class="py-16 bg-muted/50">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start max-w-7xl mx-auto">
        <!-- Carousel Side -->
        <div class="relative lg:col-span-2">
          <div class="text-center mb-8 lg:hidden">
            <h2 class="text-3xl font-bold text-foreground mb-4">Revista ECYS</h2>
            <div class="flex items-center justify-center space-x-2 text-muted-foreground">
              <div class="w-8 h-px bg-primary"></div>
              <StarIcon class="h-4 w-4 text-primary" />
              <div class="w-8 h-px bg-primary"></div>
            </div>
          </div>

          <Card class="overflow-hidden shadow-xl">
            <CardContent class="p-2">
              <div class="w-full relative h-auto">
                <div
                  class="h-full flex transition-transform duration-700 ease-in-out"
                  :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
                >
                  <div v-for="(magazine, index) in magazines" :key="index" class="w-full h-full shrink-0 px-2">
                    <div class="relative group cursor-pointer h-full w-full" @click="viewMagazine(magazine)">
                      <div class="h-full w-full bg-linear-to-br from-primary/10 to-primary/5 rounded-lg overflow-hidden flex items-center justify-center">
                        <img
                          :src="magazine.cover"
                          :alt="magazine.title"
                          class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3">
                            <BookOpenIcon class="h-8 w-8 text-primary" />
                          </div>
                        </div>
                      </div>

                      <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4 text-white">
                        <h3 class="font-semibold text-sm">{{ magazine.title }}</h3>
                        <p class="text-xs text-white/80 mt-1">{{ magazine.issue }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  class="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 p-0 border border-white/20 bg-white/10 hover:bg-white/20 text-white rounded-full"
                  @click="previousSlide"
                >
                  <ChevronLeftIcon class="h-5 w-5" />
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  class="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 p-0 border border-white/20 bg-white/10 hover:bg-white/20 text-white rounded-full"
                  @click="nextSlide"
                >
                  <ChevronRightIcon class="h-5 w-5" />
                </Button>

                <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                  <button
                    v-for="(_, index) in magazines"
                    :key="index"
                    @click="goToSlide(index)"
                    class="w-2 h-2 rounded-full transition-all duration-300"
                    :class="currentSlide === index ? 'bg-white' : 'bg-white/40 hover:bg-white/60'"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <!-- Floating badge -->
          <div class="absolute -top-4 -left-4 hidden lg:block">
            <Badge variant="default" class="px-4 py-2 shadow-lg">
              <BookIcon class="mr-2 h-4 w-4" />
              Nueva Edición
            </Badge>
          </div>
        </div>

        <!-- Content Side -->
        <div class="space-y-4 lg:col-span-3">
          <div class="hidden lg:block">
            <div class="text-center lg:text-left mb-4">
              <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">Revista ECYS</h2>
              <div
                class="flex items-center justify-center lg:justify-start space-x-2 text-muted-foreground"
              >
                <div class="w-8 h-px bg-primary"></div>
                <StarIcon class="h-4 w-4 text-primary" />
                <div class="w-8 h-px bg-primary"></div>
              </div>
            </div>
          </div>

          <div class="space-y-3">
            <div
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
            >
              <PenToolIcon class="mr-2 h-4 w-4" />
              Publicación Académica
            </div>

            <div class="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                La realización de la revista digital para la Escuela de Ciencias y Sistemas de la
                Facultad de Ingeniería de la Universidad de San Carlos de Guatemala, inicia con el
                objetivo de crear un medio para la publicación del conocimiento que generan
                estudiantes, catedráticos y profesionales de Ciencias y Sistemas.
              </p>
              <p>
                La creación y publicación de la revista digital
                <strong>"Ciencias, Sistemas y Tecnología"</strong>
                demuestra que existen estudiantes, catedráticos y profesionales interesados en
                transmitir su conocimiento, opiniones y experiencias, lo cual enriquece a toda la
                comunidad educativa del país.
              </p>
            </div>

            <!-- Features -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="flex items-center space-x-3">
                <div class="shrink-0">
                  <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckIcon class="h-4 w-4 text-primary" />
                  </div>
                </div>
                <span class="text-sm font-medium">Artículos Científicos</span>
              </div>

              <div class="flex items-center space-x-3">
                <div class="shrink-0">
                  <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckIcon class="h-4 w-4 text-primary" />
                  </div>
                </div>
                <span class="text-sm font-medium">Investigación Estudiantil</span>
              </div>

              <div class="flex items-center space-x-3">
                <div class="shrink-0">
                  <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckIcon class="h-4 w-4 text-primary" />
                  </div>
                </div>
                <span class="text-sm font-medium">Proyectos Innovadores</span>
              </div>

              <div class="flex items-center space-x-3">
                <div class="shrink-0">
                  <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckIcon class="h-4 w-4 text-primary" />
                  </div>
                </div>
                <span class="text-sm font-medium">Casos de Estudio</span>
              </div>
            </div>

            <!-- Statistics -->
            <div class="grid grid-cols-3 gap-4 py-4">
              <div class="text-center">
                <div class="text-2xl font-bold text-primary">{{ magazineStats.editions }}+</div>
                <div class="text-xs text-muted-foreground mt-1">Ediciones</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-primary">{{ magazineStats.articles }}+</div>
                <div class="text-xs text-muted-foreground mt-1">Artículos</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-primary">{{ magazineStats.downloads }}K+</div>
                <div class="text-xs text-muted-foreground mt-1">Descargas</div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" @click="viewAllMagazines">
                <BookOpenIcon class="mr-2 h-4 w-4" />
                Ver Todas las Ediciones
              </Button>
              <Button variant="outline" size="lg" @click="submitArticle">
                <PenToolIcon class="mr-2 h-4 w-4" />
                Enviar Artículo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon, StarIcon, BookOpenIcon, BookIcon, PenToolIcon, CheckIcon } from 'lucide-vue-next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getAssetPath } from '@/lib/assets'

// Magazine data
const magazines = ref([
  {
    id: 1,
    title: 'Ciencias, Sistemas y Tecnología',
    issue: 'Edición No. 7',
    cover: getAssetPath('/magazine.image_file.a451332fa60d6bdf.NS5wbmc=.png'),
    year: '2024',
  },
  {
    id: 2,
    title: 'Ciencias, Sistemas y Tecnología',
    issue: 'Edición No. 6',
    cover: getAssetPath('/magazine.image_file.a91afc397bcba614.NC5wbmc=.png'),
    year: '2023',
  },
  {
    id: 3,
    title: 'Ciencias, Sistemas y Tecnología',
    issue: 'Edición No. 5',
    cover: getAssetPath('/magazine.image_file.9efd7f1c43d4bc39.My5wbmc=.png'),
    year: '2023',
  },
  {
    id: 4,
    title: 'Ciencias, Sistemas y Tecnología',
    issue: 'Edición No. 4',
    cover: getAssetPath('/magazine.image_file.94fa5f01453571b7.Mi5wbmc=.png'),
    year: '2022',
  },
])

const magazineStats = ref({
  editions: 7,
  articles: 150,
  downloads: 25,
})

// Carousel state for magazines (manual controls)
const currentSlide = ref(0)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % magazines.value.length
}

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? magazines.value.length - 1 : currentSlide.value - 1
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

const viewMagazine = (magazine: any) => {
  console.log('View magazine:', magazine)
  // Navigate to magazine detail or open PDF
}

const viewAllMagazines = () => {
  console.log('View all magazines')
  // Navigate to magazines listing page
}

const submitArticle = () => {
  console.log('Submit article')
  // Navigate to article submission form
}
</script>
