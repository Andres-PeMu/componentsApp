// Exportar todos los stores directamente
export { useAuthStore } from './authStore';
export { useUIStore } from './uiStore';
export { useAppStore } from './appStore';

// Re-exportar tipos si es necesario
export type { User } from './authStore';
export type { Appointment, Service } from './appStore';
