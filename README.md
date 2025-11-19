# dtt-ui-redesing

Proyecto front-end que contiene la interfaz de usuario rediseñada para la plataforma DTT (Facultad/ECYS). Está construido con Vue 3, Vite y TailwindCSS, y utiliza componentes reutilizables inspirados en shadcn/ui adaptados al ecosistema Vue.

## Contenido de esta documentación
- Descripción rápida
- Requisitos
- Instalación y ejecución (PowerShell)
- Scripts disponibles
- Estructura del proyecto
- Componentes y patrones clave
- Theming / modo oscuro
- Contribuir

---

## Descripción

Esta aplicación es la capa de presentación de la plataforma DTT. Incluye:
- Barra de navegación responsiva con menú móvil y soporte para temas (claro/oscuro).
- Componentes UI reutilizables (botones, menús, sheets, collapsibles, etc.) en `src/components/ui`.
- Layouts y vistas para páginas como inicio, perfil, cursos y panel.

El objetivo del repositorio es servir como base para el rediseño visual y la implementación de la interfaz.

## Requisitos

- Node.js 20 (o la versión indicada en `package.json`)
- pnpm (recomendado, el proyecto incluye `pnpm-lock.yaml`)

En Windows PowerShell (pwsh.exe) puedes comprobar tu versión de Node y pnpm:

```powershell
node -v
pnpm -v
```

Si no tienes `pnpm`, instálalo globalmente (opcional):

```powershell
npm install -g pnpm
```

## Instalación

Clona el repositorio y instala dependencias:

```powershell
git clone https://github.com/roldyoran/dtt-ui-redesing.git
cd dtt-ui-redesing
pnpm install
```

## Comandos disponibles
Los scripts están definidos en `package.json`:

- `pnpm dev` — Inicia el servidor de desarrollo (Vite).
- `pnpm build` — Ejecuta chequeo de tipos y construcción de producción.
- `pnpm build-only` — Construye la aplicación con Vite.
- `pnpm preview` — Sirve la build de producción localmente.
- `pnpm type-check` — Ejecuta `vue-tsc` para chequear tipos.
- `pnpm format` — Formatea `src/` con Prettier.

Ejemplo (PowerShell):

```powershell
pnpm dev
# o para producción
pnpm build
pnpm preview
```

## Estructura del proyecto (resumen)

Carpetas y archivos relevantes:

- `src/` — Código fuente principal
	- `App.vue` — Entrada de la app; aplica la clase `dark` según el modo de color
	- `main.ts` — Punto de arranque de Vue
	- `components/` — Componentes reutilizables y la carpeta `ui/` con primitives
		- `home/DTTHeader.vue` — Header y navegación (desktop + mobile)
		- `AppSidebar.vue` — Sidebar principal
		- `ThemeToggle.vue` — Componente para alternar tema
	- `layouts/` — Layouts como `MainLayout.vue` y `PanelLayout.vue`
	- `views/` — Vistas/Routes (HomeView, DashboardView...)
	- `stores/` — Pinia stores
	- `router/` — Rutas (Vue Router)

Otros archivos importantes:
- `package.json` — Scripts y dependencias
- `pnpm-lock.yaml` — Lockfile de pnpm
- `vite.config.ts` — Configuración de Vite
- `tailwind.config.*` — Configuración de Tailwind (si existe)

## Componentes y patrones clave

- `ThemeToggle.vue`: usa `@vueuse/core` (`useColorMode`) para leer y alternar el modo. `App.vue` añade o remueve la clase `dark` en `document.documentElement`.
- `DTTHeader.vue`: navegación responsiva. El menú móvil usa un `Sheet` con `Collapsible` para submenús; incluye una versión accesible y optimizada del menú.
- `AppSidebar.vue`: sidebar con `SidebarMenu`, botones y lógica para alternar tema desde el sidebar.
- `src/components/ui/`: contiene primitives (Button, DropdownMenu, Sheet, Collapsible, etc.) adaptados para este proyecto.

### Buenas prácticas en el repo
- Mantener los componentes pequeños y con responsabilidades claras (presentación vs lógica).
- Reutilizar los primitives en `src/components/ui` para mantener consistencia visual.

## Theming (modo claro/oscuro)

El proyecto centraliza el manejo del tema con `useColorMode` de `@vueuse/core`.

- `ThemeToggle.vue` exporta una función `toggleTheme` y un icono dinámico para indicar el estado.
- `App.vue` observa `mode.value` y añade la clase `dark` al elemento raíz del documento. Tailwind debe estar configurado para respetar la clase `dark` (modo `class`).

Si quieres forzar el modo desde la consola durante desarrollo:

```powershell
# abrir consola del navegador y ejecutar
document.documentElement.classList.add('dark')
# o
document.documentElement.classList.remove('dark')
```

## Desarrollo

- Mantén dependencias actualizadas y ejecuta `pnpm install` antes de iniciar.
- Para añadir una nueva ruta, crea la vista en `src/views/` y registra la ruta en `src/router/index.ts`.
- Para añadir un componente global de UI, colócalo en `src/components/ui/` y exporta desde el índice correspondiente.

### Formateo y chequeo de tipos

- Formato: `pnpm format`
- Chequeo de tipos: `pnpm type-check`

## Despliegue

El proyecto genera una build estática con Vite:

```powershell
pnpm build
# El contenido de `dist/` puede ser desplegado en cualquier hosting estático
```

## Contribuir

1. Haz fork y crea una rama feature/bugfix (`feature/mi-cambio`).
2. Asegúrate de que `pnpm install` y `pnpm dev` funcionen localmente.
3. Respeta las convenciones de código y ejecuta `pnpm format` antes de crear el PR.
4. Abre un Pull Request describiendo los cambios y su motivación.

## Contacto

Para preguntas o colaboración, puedes abrir un issue en GitHub o por correo.
