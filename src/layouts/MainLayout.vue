<script setup lang="ts">
import { ref } from 'vue'
import DTTHeader from '@/components/home/DTTHeader.vue'
import DTTHeroCarousel from '@/components/home/DTTHeroCarousel.vue'
import DTTFooter from '@/components/home/DTTFooter.vue'
import LoginDialog from '@/components/home/LoginDialog.vue'

// Props para controlar si mostrar el hero carousel y el título opcional
interface Props {
  showHero?: boolean
  heroTitle?: string
}

const props = withDefaults(defineProps<Props>(), {
  showHero: true,
  heroTitle: undefined,
})

const isLoginModalOpen = ref(false)
const openLogin = () => (isLoginModalOpen.value = true)
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Modern Navigation Header -->
    <DTTHeader @open-login="openLogin" />

    <!-- Hero Carousel Section (optional) -->
    <DTTHeroCarousel v-if="showHero" :title="heroTitle" />

    <!-- Main Content Slot -->
    <main>
      <slot />
    </main>

    <!-- Login Modal -->
    <LoginDialog v-model:open="isLoginModalOpen" />

    <!-- Modern Footer -->
    <DTTFooter />
  </div>
</template>

<style scoped>
/* Additional custom styles if needed */
.hero-pattern {
  background-image:
    radial-gradient(circle at 25% 25%, rgba(255, 165, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(255, 165, 0, 0.05) 0%, transparent 50%);
}
</style>
