<template>
  <section class="relative w-full h-[500px] overflow-hidden">
    <!-- Custom Carousel -->
    <div class="w-full h-full relative">
      <!-- Slides Container -->
      <div class="absolute inset-0 flex transition-transform duration-700 ease-in-out" 
           :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div 
          v-for="(slide, index) in slides" 
          :key="index"
          class="w-full h-full shrink-0 relative"
        >
          <img 
            :src="slide.image" 
            :alt="slide.alt"
            class="w-full h-full object-cover"
          />
          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80" />
        </div>
      </div>
      
      <!-- Navigation arrows -->
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

      <!-- Slide indicators -->
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          @click="goToSlide(index)"
          class="w-2 h-2 rounded-full transition-all duration-300"
          :class="currentSlide === index ? 'bg-white' : 'bg-white/40 hover:bg-white/60'"
        />
      </div>
    </div>

    <!-- Content Overlay -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-center">
        <img 
          src="/logo-ecys-fiusac-min.png" 
          alt="Logo ECYS"
          class="h-20 w-auto mx-auto filter brightness-0 invert mb-4"
        >
        <h1 
          v-if="title"
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg"
        >
          {{ title }}
        </h1>
      </div>
    </div>


  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Button } from '@/components/ui/button'
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  GraduationCapIcon,
  BookOpenIcon,
} from 'lucide-vue-next'

// Props para el título opcional
interface Props {
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: undefined
})

// Slide data - actual hero images
const slides = ref([
  {
    image: '/fiusac03.jpg',
    alt: 'Campus FIUSAC'
  },
  {
    image: '/SL4.jpeg',
    alt: 'Escuela de Ciencias y Sistemas'
  },
  {
    image: '/SL7.jpeg',
    alt: 'Facultad de Ingeniería USAC'
  }
])

const currentSlide = ref(0)
let autoplayInterval: number | null = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slides.value.length - 1 : currentSlide.value - 1
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

const startAutoplay = () => {
  autoplayInterval = setInterval(nextSlide, 6000)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
/* Custom carousel autoplay */
</style>