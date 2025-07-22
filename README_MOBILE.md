# Casa de Reinas - Aplicación Móvil

Esta es la aplicación móvil de Casa de Reinas desarrollada con React Native, diseñada para ser lo más similar posible a la aplicación web.

## 🚀 Configuración Inicial

### Prerrequisitos

- Node.js >= 18
- React Native CLI
- Xcode (para iOS)
- Android Studio (para Android)
- CocoaPods (para iOS)

### Instalación de Dependencias

```bash
# Instalar dependencias de Node.js
npm install

# Para iOS (desde el directorio raíz)
cd ios && pod install && cd ..
```

## 📱 Dependencias Instaladas

### UI y Componentes
- **react-native-paper**: Equivalente a Material-UI para React Native
- **react-native-vector-icons**: Iconos vectoriales
- **react-native-paper-dates**: Selector de fechas
- **react-native-modal**: Modales personalizados

### Navegación
- **@react-navigation/native**: Navegación principal
- **@react-navigation/stack**: Navegación por stack
- **@react-navigation/bottom-tabs**: Navegación por tabs
- **@react-navigation/drawer**: Navegación por drawer
- **react-native-screens**: Pantallas optimizadas
- **react-native-safe-area-context**: Manejo de áreas seguras

### Estado Global
- **@reduxjs/toolkit**: Redux Toolkit para manejo de estado
- **react-redux**: Integración de Redux con React

### Formularios
- **react-hook-form**: Manejo de formularios
- **@hookform/resolvers**: Validadores para react-hook-form
- **zod**: Validación de esquemas

### HTTP y API
- **axios**: Cliente HTTP

### Calendario
- **react-native-calendars**: Calendario nativo
- **react-native-calendar-strip**: Franja de calendario

### Notificaciones
- **react-native-toast-message**: Mensajes toast
- **react-native-push-notification**: Notificaciones push

### Utilidades
- **moment**: Manejo de fechas
- **date-fns**: Utilidades de fechas
- **react-native-keychain**: Almacenamiento seguro
- **react-native-async-storage**: Almacenamiento local
- **react-native-svg**: Gráficos SVG
- **react-native-linear-gradient**: Gradientes
- **react-native-reanimated**: Animaciones
- **react-native-gesture-handler**: Gestos
- **react-native-chart-kit**: Gráficos
- **jwt-decode**: Decodificación de JWT

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
├── screens/            # Pantallas principales
├── navigation/         # Configuración de navegación
├── store/             # Redux store y slices
│   └── slices/        # Slices de Redux
├── services/          # Servicios API
├── hooks/             # Custom hooks
├── utils/             # Utilidades
├── types/             # Tipos TypeScript
├── constants/         # Constantes
│   ├── colors.ts      # Colores de la aplicación
│   └── api.ts         # Configuración de API
├── config/            # Configuraciones
│   └── theme.ts       # Tema de React Native Paper
└── assets/            # Imágenes, iconos, etc.
```

## 🎨 Tema y Colores

La aplicación utiliza un tema personalizado basado en React Native Paper que mantiene la consistencia visual con la aplicación web:

- **Colores primarios**: Azul (#1976d2)
- **Colores secundarios**: Rosa (#f50057)
- **Colores de estado**: Success, Warning, Error, Info
- **Tipografía**: Sistema nativo con configuración Material Design

## 🔧 Configuración de la API

La aplicación está configurada para conectarse al backend de Casa de Reinas. Asegúrate de:

1. Actualizar `API_BASE_URL` en `src/constants/api.ts`
2. Verificar que el backend esté corriendo
3. Configurar CORS en el backend si es necesario

## 📱 Ejecutar la Aplicación

### iOS
```bash
# Ejecutar en simulador iOS
npm run ios

# Ejecutar en dispositivo específico
npm run start:ios
```

### Android
```bash
# Ejecutar en emulador/dispositivo Android
npm run android
```

### Metro Bundler
```bash
# Iniciar Metro Bundler
npm start
```

## 🔐 Autenticación

La aplicación maneja la autenticación mediante:

- **JWT tokens** almacenados en AsyncStorage
- **Redux** para el estado de autenticación
- **Interceptores de Axios** para agregar tokens automáticamente
- **Manejo automático** de tokens expirados

## 📊 Estado Global (Redux)

La aplicación utiliza Redux Toolkit con los siguientes slices:

- **auth**: Autenticación y usuario
- **appointments**: Citas
- **services**: Servicios
- **messages**: Mensajes
- **notifications**: Notificaciones

## 🎯 Funcionalidades Principales

### Implementadas
- ✅ Estructura base del proyecto
- ✅ Configuración de Redux
- ✅ Servicio de API con Axios
- ✅ Tema personalizado
- ✅ Tipos TypeScript
- ✅ Constantes y configuración

### Por Implementar
- 🔄 Pantallas de autenticación (Login/Register)
- 🔄 Pantalla principal (Dashboard)
- 🔄 Gestión de citas
- 🔄 Calendario
- 🔄 Mensajería
- 🔄 Notificaciones
- 🔄 Perfil de usuario
- 🔄 Navegación completa

## 🛠️ Comandos Útiles

```bash
# Limpiar cache de Metro
npx react-native start --reset-cache

# Limpiar build de iOS
cd ios && xcodebuild clean && cd ..

# Limpiar build de Android
cd android && ./gradlew clean && cd ..

# Verificar tipos TypeScript
npx tsc --noEmit

# Linting
npm run lint
```

## 📝 Notas de Desarrollo

1. **Consistencia Visual**: Mantener la consistencia con la aplicación web
2. **Performance**: Usar FlatList para listas largas
3. **Offline**: Considerar funcionalidad offline
4. **Testing**: Implementar tests unitarios y de integración
5. **Accesibilidad**: Seguir las mejores prácticas de accesibilidad

## 🔗 Enlaces Útiles

- [React Native Documentation](https://reactnative.dev/)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [React Navigation](https://reactnavigation.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Hook Form](https://react-hook-form.com/)

## 📞 Soporte

Para dudas o problemas, consulta la documentación de cada librería o contacta al equipo de desarrollo. 