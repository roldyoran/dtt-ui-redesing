<script setup lang="ts">
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { LogIn } from 'lucide-vue-next'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits(['update:open'])

const close = () => emit('update:open', false)

</script>

<template>
  <Dialog :open="props.open" @update:open="val => emit('update:open', val)">
    <DialogContent class="sm:max-w-md">
      <DialogHeader>
        <DialogTitle class="flex items-center gap-2 text-primary"><LogIn class="w-5 h-5" />Iniciar Sesión</DialogTitle>
        <DialogDescription>Ingresa tus credenciales para acceder al sistema DTT-ECYS</DialogDescription>
      </DialogHeader>

      <div class="space-y-4">
        <div class="space-y-2">
          <Label htmlFor="username">Carnet de Usuario</Label>
          <Input id="username" type="text" placeholder="202600116" />
        </div>

        <div class="space-y-2">
          <Label htmlFor="password">Contraseña</Label>
          <Input id="password" type="password" placeholder="••••••••" />
        </div>

        <div class="flex items-center space-x-2 text-sm">
          <Checkbox id="remember" />
          <Label htmlFor="remember" class="text-muted-foreground cursor-pointer">Recordar sesión por (30 dias)</Label>
        </div>

        <div class="space-y-3">
          <Button class="w-full">Iniciar Sesión</Button>
          <div class="text-center space-y-2">
            <a href="#" class="text-sm transition-all  hover:text-primary/80 block">¿Olvidaste tu contraseña?</a>
            <a href="#" class="text-sm transition-all text-muted-foreground hover:text-primary block">¿Olvidaste tu nombre de usuario?</a>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>

<style scoped></style>
