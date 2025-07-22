import { MD3LightTheme, configureFonts } from 'react-native-paper';
import { COLORS } from '../constants/colors';

// Configuración de fuentes
const fontConfig = {
  displayLarge: {
    fontFamily: 'System',
    fontSize: 57,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 64,
  },
  displayMedium: {
    fontFamily: 'System',
    fontSize: 45,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 52,
  },
  displaySmall: {
    fontFamily: 'System',
    fontSize: 36,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 44,
  },
  headlineLarge: {
    fontFamily: 'System',
    fontSize: 32,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 40,
  },
  headlineMedium: {
    fontFamily: 'System',
    fontSize: 28,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 36,
  },
  headlineSmall: {
    fontFamily: 'System',
    fontSize: 24,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 32,
  },
  titleLarge: {
    fontFamily: 'System',
    fontSize: 22,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 28,
  },
  titleMedium: {
    fontFamily: 'System',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.15,
    lineHeight: 24,
  },
  titleSmall: {
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  labelLarge: {
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  labelMedium: {
    fontFamily: 'System',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  labelSmall: {
    fontFamily: 'System',
    fontSize: 11,
    fontWeight: '500',
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  bodyLarge: {
    fontFamily: 'System',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.5,
    lineHeight: 24,
  },
  bodyMedium: {
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.25,
    lineHeight: 20,
  },
  bodySmall: {
    fontFamily: 'System',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.4,
    lineHeight: 16,
  },
};

// Tema personalizado para Casa de Reinas
export const theme = {
  ...MD3LightTheme,
  fonts: configureFonts({ config: fontConfig }),
  colors: {
    ...MD3LightTheme.colors,
    // Colores primarios
    primary: COLORS.primary,
    onPrimary: COLORS.white,
    primaryContainer: COLORS.primaryLight,
    onPrimaryContainer: COLORS.primaryDark,

    // Colores secundarios
    secondary: COLORS.secondary,
    onSecondary: COLORS.white,
    secondaryContainer: COLORS.secondaryLight,
    onSecondaryContainer: COLORS.secondaryDark,

    // Colores de estado
    error: COLORS.error,
    onError: COLORS.white,
    errorContainer: '#ffebee',
    onErrorContainer: COLORS.error,

    warning: COLORS.warning,
    onWarning: COLORS.white,
    warningContainer: '#fff3e0',
    onWarningContainer: COLORS.warning,

    success: COLORS.success,
    onSuccess: COLORS.white,
    successContainer: '#e8f5e8',
    onSuccessContainer: COLORS.success,

    info: COLORS.info,
    onInfo: COLORS.white,
    infoContainer: '#e3f2fd',
    onInfoContainer: COLORS.info,

    // Colores de fondo
    background: COLORS.background,
    onBackground: COLORS.textPrimary,
    surface: COLORS.surface,
    onSurface: COLORS.textPrimary,
    surfaceVariant: COLORS.lightGray,
    onSurfaceVariant: COLORS.textSecondary,

    // Colores de borde
    outline: COLORS.border,
    outlineVariant: COLORS.divider,

    // Colores de elevación
    elevation: {
      level0: 'transparent',
      level1: '#f8f9fa',
      level2: '#f1f3f4',
      level3: '#e8eaed',
      level4: '#dadce0',
      level5: '#bdc1c6',
    },

    // Colores de sombra
    shadow: COLORS.black,
    scrim: COLORS.black,

    // Colores de superficie
    surfaceDisabled: COLORS.lightGray,
    onSurfaceDisabled: COLORS.textDisabled,

    // Colores de inversión
    inverseSurface: COLORS.darkGray,
    inverseOnSurface: COLORS.white,
    inversePrimary: COLORS.primaryLight,
  },
  // Configuración adicional
  roundness: 8,
  animation: {
    scale: 1.0,
  },
};

export default theme;
