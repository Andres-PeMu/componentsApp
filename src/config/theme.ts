import { MD3LightTheme, MD3DarkTheme, MD3Theme } from 'react-native-paper';

// Tema claro personalizado - Colores de Casa de Reinas
export const lightTheme: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#334155', // Color principal más oscuro
    secondary: '#4f46e5', // Color secundario de la web
    tertiary: '#22d3ee', // Color terciario (skyBlue)
    surface: '#1e293b', // Superficie más oscura
    background: '#111827', // Fondo más oscuro
    error: '#f44336',
    onPrimary: '#FFFFFF',
    onSecondary: '#FFFFFF',
    onSurface: '#f8fafc', // Texto más claro
    onBackground: '#f8fafc',
    onError: '#FFFFFF',
  },
  roundness: 8,
};

// Tema oscuro personalizado - Colores de Casa de Reinas
export const darkTheme: MD3Theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#334155', // Color principal oscuro de la web
    secondary: '#4f46e5', // Color secundario (mantiene el mismo)
    tertiary: '#22d3ee', // Color terciario (skyBlue)
    surface: '#1e293b', // Color de superficie oscuro de la web
    background: '#111827', // Color de fondo oscuro de la web
    error: '#f44336',
    onPrimary: '#FFFFFF',
    onSecondary: '#FFFFFF',
    onSurface: '#f8fafc', // Texto más claro
    onBackground: '#f8fafc',
    onError: '#FFFFFF',
  },
  roundness: 8,
};

// Función para obtener el tema según el modo
export const getTheme = (isDark: boolean): MD3Theme => {
  return isDark ? darkTheme : lightTheme;
};
