<template>
  <section class="py-16 bg-muted/50">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <!-- Image/Carousel Side -->
        <div class="relative">
          <Card class="overflow-hidden border-0 shadow-xl">
            <div class="relative h-96 bg-gradient-to-br from-primary/10 to-primary/5">
              <img
                :src="getAssetPath('/fiusac03.jpg')"
                alt="Escuela de Ciencias y Sistemas"
                class="w-full h-full object-cover"
              />
              <!-- Overlay with logo -->
              <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div class="text-center text-white">
                  <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                    <GraduationCapIcon class="h-16 w-16 mx-auto mb-4 text-white" />
                    <h3 class="text-2xl font-bold">ECYS</h3>
                    <p class="text-white/90">Facultad de Ingeniería</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <!-- Floating stats -->
          <div class="absolute -bottom-6 -right-6 hidden lg:block">
            <Card class="bg-background/95 backdrop-blur-sm border shadow-xl">
              <CardContent class="p-6">
                <div class="flex items-center space-x-4">
                  <div class="text-center">
                    <div class="text-2xl font-bold text-primary">50+</div>
                    <div class="text-xs text-muted-foreground">Años de Historia</div>
                  </div>
                  <Separator orientation="vertical" class="h-8" />
                  <div class="text-center">
                    <div class="text-2xl font-bold text-primary">1000+</div>
                    <div class="text-xs text-muted-foreground">Graduados</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <!-- Content Side -->
        <div class="space-y-8">
          <div class="space-y-4">
            <div
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
            >
              <SparklesIcon class="mr-2 h-4 w-4" />
              Excelencia Académica
            </div>

            <h2 class="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Escuela de Ciencias y Sistemas
            </h2>

            <p class="text-xl text-muted-foreground leading-relaxed">
              Una institución líder en la formación de profesionales en ingeniería de sistemas y
              ciencias de la computación.
            </p>
          </div>

          <div class="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              La Escuela de Ciencias y Sistemas de la Facultad de Ingeniería de la Universidad de
              San Carlos de Guatemala es reconocida por su excelencia académica y su compromiso con
              la innovación tecnológica.
            </p>
            <p>
              Formamos profesionales capacitados para enfrentar los desafíos del mundo moderno, con
              una sólida base teórica y práctica en desarrollo de software, sistemas de información,
              inteligencia artificial y tecnologías emergentes.
            </p>
          </div>

          <!-- Features List -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="flex items-center space-x-3">
              <div class="shrink-0">
                <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckIcon class="h-4 w-4 text-primary" />
                </div>
              </div>
              <span class="text-sm font-medium">Laboratorios Especializados</span>
            </div>

            <div class="flex items-center space-x-3">
              <div class="shrink-0">
                <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckIcon class="h-4 w-4 text-primary" />
                </div>
              </div>
              <span class="text-sm font-medium">Cuerpo Docente Calificado</span>
            </div>

            <div class="flex items-center space-x-3">
              <div class="shrink-0">
                <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckIcon class="h-4 w-4 text-primary" />
                </div>
              </div>
              <span class="text-sm font-medium">Convenios Internacionales</span>
            </div>

            <div class="flex items-center space-x-3">
              <div class="shrink-0">
                <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckIcon class="h-4 w-4 text-primary" />
                </div>
              </div>
              <span class="text-sm font-medium">Investigación y Desarrollo</span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" class="group" as-child>
              <a href="https://www.youtube.com/@dttecys2175" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center">
                <BookOpenIcon class="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                Conoce Más
              </a>
            </Button>

            <Button variant="outline" size="lg" as-child>
              <a href="/PENSUM_ANTES_DEL_CLAR_2022.png" class="flex items-center justify-center" download>
                <DownloadIcon class="mr-2 h-4 w-4" />
                Descargar Pensum
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { getAssetPath } from '@/lib/assets'
import {
  GraduationCapIcon,
  SparklesIcon,
  CheckIcon,
  BookOpenIcon,
  DownloadIcon,
} from 'lucide-vue-next'
</script>
