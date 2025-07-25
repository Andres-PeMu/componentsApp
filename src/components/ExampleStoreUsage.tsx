import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuthStore, useUIStore, useAppStore } from '../store';

export const ExampleStoreUsage: React.FC = () => {
  // Usar stores con selectores específicos para mejor rendimiento
  const user = useAuthStore(state => state.user);
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const { login, logout } = useAuthStore();

  const theme = useUIStore(state => state.theme);
  const isLoading = useUIStore(state => state.isLoading);
  const { addNotification, toggleTheme, setLoading } = useUIStore();

  const appointments = useAppStore(state => state.appointments);
  const { addAppointment } = useAppStore();

  const handleLogin = () => {
    setLoading(true);

    // Simular login
    setTimeout(() => {
      login(
        {
          id: '1',
          email: 'usuario@ejemplo.com',
          name: 'Usuario Ejemplo',
          role: 'user',
        },
        'token123'
      );

      addNotification({
        type: 'success',
        message: '¡Login exitoso!',
        duration: 3000,
      });

      setLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    logout();
    addNotification({
      type: 'info',
      message: 'Sesión cerrada',
      duration: 2000,
    });
  };

  const handleAddAppointment = () => {
    addAppointment({
      id: Date.now().toString(),
      title: 'Cita de prueba',
      description: 'Esta es una cita de ejemplo',
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 60 * 60 * 1000).toISOString(), // 1 hora después
      status: 'pending',
      userId: user?.id || '1',
    });

    addNotification({
      type: 'success',
      message: 'Cita agregada correctamente',
      duration: 3000,
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#333' : '#fff' }]}>
      <Text style={[styles.title, { color: theme === 'dark' ? '#fff' : '#000' }]}>
        Ejemplo de uso de Stores
      </Text>

      {/* Estado de autenticación */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme === 'dark' ? '#fff' : '#000' }]}>
          Autenticación
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#000' }]}>
          Estado: {isAuthenticated ? 'Logueado' : 'No logueado'}
        </Text>
        {user && (
          <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#000' }]}>
            Usuario: {user.name} ({user.email})
          </Text>
        )}

        <View style={styles.buttonContainer}>
          {!isAuthenticated ? (
            <TouchableOpacity
              style={[styles.button, styles.primaryButton]}
              onPress={handleLogin}
              disabled={isLoading}
            >
              <Text style={styles.buttonText}>
                {isLoading ? 'Cargando...' : 'Login'}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.button, styles.secondaryButton]}
              onPress={handleLogout}
            >
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Estado de UI */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme === 'dark' ? '#fff' : '#000' }]}>
          Interfaz de Usuario
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#000' }]}>
          Tema: {theme === 'dark' ? 'Oscuro' : 'Claro'}
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#000' }]}>
          Loading: {isLoading ? 'Sí' : 'No'}
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.primaryButton]}
            onPress={toggleTheme}
          >
            <Text style={styles.buttonText}>Cambiar Tema</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={() => addNotification({
              type: 'info',
              message: 'Esta es una notificación de prueba',
              duration: 3000,
            })}
          >
            <Text style={styles.buttonText}>Mostrar Notificación</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Estado de la aplicación */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme === 'dark' ? '#fff' : '#000' }]}>
          Datos de la Aplicación
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#000' }]}>
          Citas: {appointments.length}
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.primaryButton]}
            onPress={handleAddAppointment}
          >
            <Text style={styles.buttonText}>Agregar Cita</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    minWidth: 100,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#007AFF',
  },
  secondaryButton: {
    backgroundColor: '#6C757D',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
