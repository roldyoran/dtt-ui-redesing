<template>
  <div class="h-screen flex items-center justify-center bg-background">
    <Card class="w-full max-w-2xl p-6 text-center">
      <div class="space-y-4">
        <!-- 404 Number -->
        <div class="text-7xl font-bold text-primary mb-2">
          404
        </div>
        
        <!-- Main Title -->
        <h1 class="text-3xl font-bold text-foreground mb-3">
          ¡Ups! Página no encontrada
        </h1>
        
        <Separator class="my-6" />
        
        <!-- Explanation Message -->
        <div class="space-y-3 text-base text-muted-foreground">
          <div class="flex items-center justify-center gap-2 font-semibold text-xl text-primary">
            <Construction class="h-5 w-5" />
            <span>Proyecto en Desarrollo</span>
            <Construction class="h-5 w-5" />
          </div>
          
          <p class="leading-relaxed text-base">
            Muchas páginas y funcionalidades aún no están completamente implementadas, 
            ya que este es un <strong>proyecto de hobby</strong> que desarrolle porque si, ya si quieren que sea algo mas que una pagina de hobby, pueden contactarme, en el mismo repositorio de GitHub mediante una issue, un pull request o por correo.
          </p>
          
        <p class="leading-relaxed text-base italic">
            Es posible que en el futuro agregue más características y mejore la experiencia.
        </p>
          
          <div class="bg-muted/50 p-3 rounded-lg border border-border">
            <div class="flex items-center justify-center gap-2 text-foreground font-medium mb-1">
              <Heart class="h-4 w-4 text-destructive" />
              <span class="text-base">Gracias por visitar y curiosear en la web</span>
            </div>
          </div>
        </div>
        
        <Separator class="my-4" />
        
        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            @click="$router.push('/')" 
            class="px-6 py-2"
          >
            <Home class="h-4 w-4 mr-2" />
            Volver al Inicio
          </Button>
          
          <Button 
            @click="$router.go(-1)" 
            variant="outline" 
            class="px-6 py-2"
          >
            <ArrowLeft class="h-4 w-4 mr-2" />
            Página Anterior
          </Button>
        </div>
        
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Construction, Heart, Home, ArrowLeft } from 'lucide-vue-next'
</script>

<style scoped>
/* Animación sutil para el número 404 */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.text-7xl {
  animation: bounce 2s infinite;
}
</style>