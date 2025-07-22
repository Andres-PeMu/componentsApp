// Configuración de la API para Casa de Reinas

// URL base de la API (ajusta según tu configuración)
export const API_BASE_URL = 'http://localhost:3000/api'; // Cambia por tu URL de producción

// Endpoints principales
export const API_ENDPOINTS = {
  // Autenticación
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
    profile: '/auth/profile',
  },

  // Usuarios
  users: {
    list: '/users',
    detail: (id: number) => `/users/${id}`,
    update: (id: number) => `/users/${id}`,
    delete: (id: number) => `/users/${id}`,
  },

  // Citas
  appointments: {
    list: '/appointments',
    detail: (id: number) => `/appointments/${id}`,
    create: '/appointments',
    update: (id: number) => `/appointments/${id}`,
    delete: (id: number) => `/appointments/${id}`,
    user: (userId: number) => `/appointments/user/${userId}`,
  },

  // Servicios
  services: {
    list: '/services',
    detail: (id: number) => `/services/${id}`,
    create: '/services',
    update: (id: number) => `/services/${id}`,
    delete: (id: number) => `/services/${id}`,
  },

  // Mensajes
  messages: {
    list: '/messages',
    detail: (id: number) => `/messages/${id}`,
    create: '/messages',
    update: (id: number) => `/messages/${id}`,
    delete: (id: number) => `/messages/${id}`,
    conversation: (userId: number) => `/messages/conversation/${userId}`,
  },

  // Notificaciones
  notifications: {
    list: '/notifications',
    detail: (id: number) => `/notifications/${id}`,
    markAsRead: (id: number) => `/notifications/${id}/read`,
    markAllAsRead: '/notifications/read-all',
  },

  // Calendario
  calendar: {
    events: '/calendar/events',
    create: '/calendar/events',
    update: (id: number) => `/calendar/events/${id}`,
    delete: (id: number) => `/calendar/events/${id}`,
  },
} as const;

// Headers por defecto
export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

// Configuración de timeout
export const API_TIMEOUT = 10000; // 10 segundos

// Códigos de estado HTTP
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;
