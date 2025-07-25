# React Native Paper - Configuración y Uso

## 📦 Instalación

React Native Paper ya está instalado y configurado en el proyecto con las siguientes dependencias:

- `react-native-paper` - Librería principal de UI
- `react-native-safe-area-context` - Manejo de áreas seguras
- `@react-native-async-storage/async-storage` - Persistencia de datos

## 🎨 Configuración del Tema

### Archivos de configuración:
- `src/config/theme.ts` - Definición de temas claro y oscuro
- `src/config/PaperProvider.tsx` - Provider que integra Paper con Zustand

### Características del tema:
- **Tema claro**: Colores claros y legibles
- **Tema oscuro**: Colores oscuros para mejor experiencia nocturna
- **Integración con Zustand**: El tema cambia automáticamente según el store de UI
- **Colores personalizados**: Adaptados a la identidad visual de Casa de Reinas

## 🚀 Componentes Disponibles

React Native Paper proporciona muchos componentes listos para usar:

### Componentes básicos:
- `Button` - Botones con diferentes estilos
- `TextInput` - Campos de entrada de texto
- `Card` - Tarjetas para organizar contenido
- `Text` - Texto con diferentes variantes
- `Avatar` - Avatares de usuario
- `IconButton` - Botones con iconos

### Componentes de navegación:
- `Appbar` - Barra de navegación superior
- `FAB` - Botón de acción flotante
- `BottomNavigation` - Navegación inferior

### Componentes de datos:
- `List` - Listas con elementos
- `DataTable` - Tablas de datos
- `Chip` - Etiquetas pequeñas
- `Badge` - Indicadores numéricos

### Componentes de entrada:
- `Switch` - Interruptores
- `Checkbox` - Casillas de verificación
- `RadioButton` - Botones de radio
- `Slider` - Deslizadores

## 💡 Ejemplos de Uso

### Botón básico:
```typescript
import { Button } from 'react-native-paper'

<Button mode="contained" onPress={handlePress}>
  Presionar
</Button>
```

### Campo de texto:
```typescript
import { TextInput } from 'react-native-paper'

<TextInput
  label="Email"
  placeholder="Ingresa tu email"
  mode="outlined"
  value={email}
  onChangeText={setEmail}
/>
```

### Tarjeta con contenido:
```typescript
import { Card, Text } from 'react-native-paper'

<Card>
  <Card.Title title="Título de la tarjeta" />
  <Card.Content>
    <Text variant="bodyMedium">Contenido de la tarjeta</Text>
  </Card.Content>
  <Card.Actions>
    <Button>Acción 1</Button>
    <Button>Acción 2</Button>
  </Card.Actions>
</Card>
```

### Barra de navegación:
```typescript
import { Appbar } from 'react-native-paper'

<Appbar.Header>
  <Appbar.Content title="Mi App" />
  <Appbar.Action icon="magnify" onPress={search} />
  <Appbar.Action icon="dots-vertical" onPress={showMenu} />
</Appbar.Header>
```

## 🎯 Integración con Zustand

Los componentes de React Native Paper se integran perfectamente con nuestros stores de Zustand:

```typescript
import { useUIStore } from '../store'
import { Switch, Text } from 'react-native-paper'

const { theme, toggleTheme } = useUIStore()

<View style={styles.container}>
  <Text>Tema oscuro</Text>
  <Switch
    value={theme === 'dark'}
    onValueChange={toggleTheme}
  />
</View>
```

## 🌈 Modos de botones disponibles:

- `contained` - Botón sólido (recomendado para acciones principales)
- `outlined` - Botón con borde
- `text` - Botón de texto plano
- `contained-tonal` - Botón con color secundario
- `elevated` - Botón con sombra

## 📱 Iconos

React Native Paper usa Material Design Icons. Puedes usar cualquier icono de la librería:

```typescript
<Button icon="heart" mode="contained">
  Me gusta
</Button>

<IconButton icon="star" size={20} onPress={onPress} />
```

## 🔧 Personalización

### Cambiar colores del tema:
Edita `src/config/theme.ts` para personalizar los colores:

```typescript
export const lightTheme: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#007AFF', // Color principal
    secondary: '#5856D6', // Color secundario
    // ... más colores
  },
}
```

### Estilos personalizados:
Puedes combinar los estilos de Paper con StyleSheet:

```typescript
<Button 
  mode="contained" 
  style={{ marginTop: 16, borderRadius: 25 }}
  labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
>
  Botón personalizado
</Button>
```

## 📚 Recursos adicionales

- [Documentación oficial](https://callstack.github.io/react-native-paper/)
- [Componentes disponibles](https://callstack.github.io/react-native-paper/docs/components/)
- [Guía de temas](https://callstack.github.io/react-native-paper/docs/guides/theming/)
- [Iconos disponibles](https://materialdesignicons.com/) 