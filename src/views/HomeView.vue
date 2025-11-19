<script setup lang="ts">
import DTTFeatureCards from '@/components/home/DTTFeatureCards.vue'
import DTTMainContent from '@/components/home/DTTMainContent.vue'
import DTTNewsSection from '@/components/home/DTTNewsSection.vue'
import DTTMagazineSection from '@/components/home/DTTMagazineSection.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout :show-hero="true">
    <!-- Feature Cards Section -->
    <DTTFeatureCards />

    <!-- Main Content Section -->
    <DTTMainContent />

    <!-- News Section -->
    <DTTNewsSection />

    <!-- Magazine Section -->
    <DTTMagazineSection />
  </MainLayout>
</template>