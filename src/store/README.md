# Stores de Zustand

Esta carpeta contiene todos los stores de estado global de la aplicación usando Zustand.

## Stores disponibles

### 1. `authStore` - Autenticación
Maneja el estado de autenticación del usuario.

```typescript
import { useAuthStore } from '../store'

// En un componente
const { user, isAuthenticated, login, logout } = useAuthStore()

// Login
login({ id: '1', email: 'user@example.com', name: 'Usuario' }, 'token123')

// Logout
logout()

// Verificar si está autenticado
if (isAuthenticated) {
  // Usuario logueado
}
```

### 2. `uiStore` - Interfaz de usuario
Maneja el estado de la UI como loading, modales, notificaciones y tema.

```typescript
import { useUIStore } from '../store'

// En un componente
const { 
  isLoading, 
  theme, 
  notifications, 
  setLoading, 
  addNotification, 
  toggleTheme 
} = useUIStore()

// Mostrar loading
setLoading(true)

// Agregar notificación
addNotification({
  type: 'success',
  message: 'Operación exitosa!',
  duration: 3000
})

// Cambiar tema
toggleTheme()
```

### 3. `appStore` - Datos de la aplicación
Maneja datos como citas, servicios y otros datos dinámicos.

```typescript
import { useAppStore } from '../store'

// En un componente
const { 
  appointments, 
  services, 
  addAppointment, 
  setServices 
} = useAppStore()

// Agregar cita
addAppointment({
  id: '1',
  title: 'Cita de prueba',
  startDate: '2024-01-01T10:00:00Z',
  endDate: '2024-01-01T11:00:00Z',
  status: 'pending',
  userId: 'user123'
})

// Cargar servicios
setServices([
  {
    id: '1',
    name: 'Servicio 1',
    description: 'Descripción del servicio',
    price: 100,
    duration: 60,
    category: 'categoria1'
  }
])
```

## Características

- **Persistencia**: El `authStore` persiste automáticamente en AsyncStorage
- **TypeScript**: Todos los stores están completamente tipados
- **Simplicidad**: API simple y fácil de usar
- **Rendimiento**: Solo re-renderiza los componentes que usan el estado
- **DevTools**: Compatible con Redux DevTools para debugging

## Mejores prácticas

1. **Usar selectores específicos** para evitar re-renders innecesarios:
```typescript
// ✅ Bueno - solo se re-renderiza si user cambia
const user = useAuthStore(state => state.user)

// ❌ Evitar - se re-renderiza con cualquier cambio del store
const { user } = useAuthStore()
```

2. **Usar acciones del store** en lugar de modificar el estado directamente:
```typescript
// ✅ Bueno
const { login } = useAuthStore()
login(user, token)

// ❌ Evitar
const { user, token } = useAuthStore()
// Modificar directamente
```

3. **Combinar stores** cuando sea necesario:
```typescript
const user = useAuthStore(state => state.user)
const theme = useUIStore(state => state.theme)
``` 