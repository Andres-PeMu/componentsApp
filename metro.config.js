const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    // Mejorar la resolución de módulos para Android
    platforms: ['ios', 'android', 'native', 'web'],
    // Asegurar que los módulos se resuelvan correctamente
    alias: {
      // Alias para stores si es necesario
    },
  },
  transformer: {
    // Configuración específica para Android
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  // Configuración específica para Android
  server: {
    port: 8081,
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
