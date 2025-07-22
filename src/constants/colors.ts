// Colores principales de Casa de Reinas
export const COLORS = {
  // Colores principales
  primary: '#1976d2',
  primaryDark: '#1565c0',
  primaryLight: '#42a5f5',

  // Colores secundarios
  secondary: '#f50057',
  secondaryDark: '#c51162',
  secondaryLight: '#ff5983',

  // Colores de estado
  success: '#4caf50',
  warning: '#ff9800',
  error: '#f44336',
  info: '#2196f3',

  // Colores neutros
  white: '#ffffff',
  black: '#000000',
  gray: '#9e9e9e',
  lightGray: '#f5f5f5',
  darkGray: '#424242',

  // Colores de fondo
  background: '#fafafa',
  surface: '#ffffff',
  card: '#ffffff',

  // Colores de texto
  textPrimary: '#212121',
  textSecondary: '#757575',
  textDisabled: '#bdbdbd',

  // Colores de borde
  border: '#e0e0e0',
  divider: '#e0e0e0',

  // Colores específicos de la aplicación
  appointment: {
    pending: '#ff9800',
    confirmed: '#4caf50',
    cancelled: '#f44336',
    completed: '#2196f3',
  },

  // Gradientes
  gradients: {
    primary: ['#1976d2', '#1565c0'],
    secondary: ['#f50057', '#c51162'],
    success: ['#4caf50', '#388e3c'],
    warning: ['#ff9800', '#f57c00'],
    error: ['#f44336', '#d32f2f'],
  },
} as const;

export type ColorKey = keyof typeof COLORS;
