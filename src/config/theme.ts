import { MD3LightTheme, MD3DarkTheme, MD3Theme } from 'react-native-paper';

// Tema claro personalizado
export const lightTheme: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#007AFF',
    secondary: '#5856D6',
    tertiary: '#FF2D92',
    surface: '#FFFFFF',
    background: '#F2F2F7',
    error: '#FF3B30',
    onPrimary: '#FFFFFF',
    onSecondary: '#FFFFFF',
    onSurface: '#000000',
    onBackground: '#000000',
    onError: '#FFFFFF',
  },
  roundness: 8,
};

// Tema oscuro personalizado
export const darkTheme: MD3Theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#0A84FF',
    secondary: '#5E5CE6',
    tertiary: '#FF375F',
    surface: '#1C1C1E',
    background: '#000000',
    error: '#FF453A',
    onPrimary: '#FFFFFF',
    onSecondary: '#FFFFFF',
    onSurface: '#FFFFFF',
    onBackground: '#FFFFFF',
    onError: '#FFFFFF',
  },
  roundness: 8,
};

// Función para obtener el tema según el modo
export const getTheme = (isDark: boolean): MD3Theme => {
  return isDark ? darkTheme : lightTheme;
};
