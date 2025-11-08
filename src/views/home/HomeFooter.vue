<template>
  <footer class="bg-slate-900 dark:bg-slate-950 text-white py-12 mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-center gap-4 mb-8">
        <a href="#" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg" aria-label="Facebook">
          <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
        <a href="#" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg" aria-label="Universidad">
          <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>
        </a>
      </div>

      <div class="text-center space-y-4">
        <p class="text-slate-300 dark:text-slate-400 text-sm leading-relaxed max-w-4xl mx-auto">
          Universidad de San Carlos de Guatemala uses Simio <a href="#" class="text-blue-400 hover:text-blue-300 transition-colors">simulation software</a> under a grant from Simio LLC (<a href="https://www.simio.com" class="text-blue-400 hover:text-blue-300 transition-colors">www.simio.com</a>).
        </p>

        <Separator class="max-w-md mx-auto bg-slate-600 dark:bg-slate-700" />

        <div class="space-y-2">
          <p class="text-slate-300 dark:text-slate-400 font-medium">Soporte y Asistencia</p>
          <a href="mailto:soporte@dtt-ecys.org" class="text-blue-400 hover:text-blue-300 transition-colors text-sm block">soporte@dtt-ecys.org</a>
        </div>

        <div class="space-y-1 text-slate-300 dark:text-slate-400 text-sm">
          <p>Sistema de Seguimiento de la Escuela de Ciencias y Sistemas</p>
          <p>Facultad de Ingeniería - Universidad de San Carlos de Guatemala</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
</script>

<style scoped></style>
