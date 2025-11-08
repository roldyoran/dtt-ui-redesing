<script setup lang="ts">
import { ref } from 'vue'
import HomeHeader from '@/views/home/HomeHeader.vue'
import HomeHero from '@/views/home/HomeHero.vue'
import HomeStats from '@/views/home/HomeStats.vue'
import HomeFooter from '@/views/home/HomeFooter.vue'
import LoginDialog from '@/views/home/LoginDialog.vue'

const isLoginModalOpen = ref(false)
const openLogin = () => (isLoginModalOpen.value = true)
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Navigation Header -->
    <HomeHeader @open-login="openLogin" />

    <!-- Hero Section -->
    <HomeHero />

    <!-- Stats Section -->
    <div class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <HomeStats />
    </div>

    <!-- Login Modal (modular) -->
    <LoginDialog v-model:open="isLoginModalOpen" />

    <!-- Footer Section -->
    <HomeFooter />
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