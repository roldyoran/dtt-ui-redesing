/**
 * Genera la ruta correcta para assets según el entorno
 * En desarrollo usa rutas desde la raíz
 * En producción incluye el base path configurado
 */
export function getAssetPath(path: string): string {
  // @ts-ignore - __BASE_PATH__ is defined in vite.config.ts
  const basePath = typeof __BASE_PATH__ !== 'undefined' ? __BASE_PATH__ : ''
  // Asegurarse de que el path comience con /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalizedPath}`
}
