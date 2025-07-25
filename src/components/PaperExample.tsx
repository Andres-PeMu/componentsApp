import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import {
  Button,
  Card,
  Text,
  TextInput,
  Switch,
  Chip,
  FAB,
  Appbar,
  List,
  Divider,
  Avatar,
  Badge,
  IconButton,
} from 'react-native-paper';
import { useUIStore, useAuthStore } from '../store';

export const PaperExample: React.FC = () => {
  const { theme, toggleTheme, addNotification } = useUIStore();
  const { user, isAuthenticated, login, logout } = useAuthStore();

  const handleLogin = () => {
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
      message: '¡Login exitoso con React Native Paper!',
      duration: 3000,
    });
  };

  const handleLogout = () => {
    logout();
    addNotification({
      type: 'info',
      message: 'Sesión cerrada',
      duration: 2000,
    });
  };

  const showNotification = () => {
    addNotification({
      type: 'success',
      message: '¡Componente de React Native Paper funcionando!',
      duration: 3000,
    });
  };

  return (
    <View style={styles.container}>
      {/* App Bar */}
      <Appbar.Header>
        <Appbar.Content title="React Native Paper Demo" />
        <Appbar.Action icon="theme-light-dark" onPress={toggleTheme} />
        <Appbar.Action icon="bell" onPress={showNotification} />
      </Appbar.Header>

      <ScrollView style={styles.scrollView}>
        {/* Sección de autenticación */}
        <Card style={styles.card}>
          <Card.Title
            title="Autenticación"
            subtitle="Estado del usuario"
            left={(props) => <Avatar.Icon {...props} icon="account" />}
          />
          <Card.Content>
            <Text variant="bodyMedium">
              Estado: {isAuthenticated ? 'Logueado' : 'No logueado'}
            </Text>
            {user && (
              <Text variant="bodyMedium">
                Usuario: {user.name} ({user.email})
              </Text>
            )}
          </Card.Content>
          <Card.Actions>
            {!isAuthenticated ? (
              <Button mode="contained" onPress={handleLogin}>
                Login
              </Button>
            ) : (
              <Button mode="outlined" onPress={handleLogout}>
                Logout
              </Button>
            )}
          </Card.Actions>
        </Card>

        {/* Sección de controles */}
        <Card style={styles.card}>
          <Card.Title title="Controles de UI" />
          <Card.Content>
            <View style={styles.inputContainer}>
              <TextInput
                label="Email"
                placeholder="Ingresa tu email"
                mode="outlined"
                style={styles.input}
              />
              <TextInput
                label="Contraseña"
                placeholder="Ingresa tu contraseña"
                mode="outlined"
                secureTextEntry
                style={styles.input}
              />
            </View>

            <View style={styles.switchContainer}>
              <Text variant="bodyMedium">Tema oscuro</Text>
              <Switch
                value={theme === 'dark'}
                onValueChange={toggleTheme}
              />
            </View>

            <View style={styles.chipContainer}>
              <Chip icon="star" onPress={showNotification}>
                Premium
              </Chip>
              <Chip icon="check" mode="outlined">
                Verificado
              </Chip>
              <Chip icon="alert" mode="outlined" textStyle={{ color: 'red' }}>
                Importante
              </Chip>
            </View>
          </Card.Content>
        </Card>

        {/* Lista de elementos */}
        <Card style={styles.card}>
          <Card.Title title="Lista de elementos" />
          <Card.Content style={styles.listContainer}>
            <List.Item
              title="Primer elemento"
              description="Descripción del primer elemento"
              left={(props) => <List.Icon {...props} icon="folder" />}
              right={(_props) => <IconButton icon="dots-vertical" />}
            />
            <Divider />
            <List.Item
              title="Segundo elemento"
              description="Descripción del segundo elemento"
              left={(props) => <List.Icon {...props} icon="file" />}
              right={() => (
                <Badge size={20} style={styles.badge}>
                  3
                </Badge>
              )}
            />
            <Divider />
            <List.Item
              title="Tercer elemento"
              description="Descripción del tercer elemento"
              left={(props) => <List.Icon {...props} icon="image" />}
              right={() => <IconButton icon="heart" />}
            />
          </Card.Content>
        </Card>

        {/* Botones de ejemplo */}
        <Card style={styles.card}>
          <Card.Title title="Botones" />
          <Card.Content>
            <View style={styles.buttonContainer}>
              <Button mode="contained" onPress={showNotification}>
                Contained
              </Button>
              <Button mode="outlined" onPress={showNotification}>
                Outlined
              </Button>
              <Button mode="text" onPress={showNotification}>
                Text
              </Button>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                mode="contained-tonal"
                onPress={showNotification}
                icon="heart"
              >
                Con Icono
              </Button>
              <Button
                mode="elevated"
                onPress={showNotification}
                icon="star"
              >
                Elevated
              </Button>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>

      {/* FAB */}
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={showNotification}
        label="Agregar"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    marginBottom: 8,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  listContainer: {
    padding: 0,
  },
  badge: {
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
