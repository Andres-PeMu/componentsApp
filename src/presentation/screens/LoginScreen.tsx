import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Image } from 'react-native';
import {
  Text,
  TextInput,
  Button,
  Card,
  Divider,
  HelperText,
} from 'react-native-paper';
import { useAuthStore, useUIStore } from '../../store';

// Logo PNG real de Casa de Reinas
const Logo: React.FC = () => (
  <View style={styles.logoContainer}>
    <Image
      source={require('../../assets/images/logo.png')}
      style={styles.logoImage}
      resizeMode="contain"
    />
  </View>
);

export const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { login, isLoading } = useAuthStore();
  const { addNotification } = useUIStore();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let isValid = true;

    // Validar email
    if (!email.trim()) {
      setEmailError('El email es requerido');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Ingresa un email válido');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validar contraseña
    if (!password.trim()) {
      setPasswordError('La contraseña es requerida');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleLogin = async () => {
    if (!validateForm()) {return;}

    try {
      // Simular login (aquí iría la llamada real a tu API)
      await new Promise(resolve => setTimeout(resolve, 1500));

      login(
        {
          id: '1',
          email: email,
          name: 'Usuario Demo',
          role: 'user',
        },
        'token123'
      );

      addNotification({
        type: 'success',
        message: '¡Bienvenido a Casa de Reinas!',
        duration: 3000,
      });
    } catch (error) {
      addNotification({
        type: 'error',
        message: 'Error al iniciar sesión. Intenta de nuevo.',
        duration: 4000,
      });
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.content}>
          {/* Logo */}
          <Logo />

          {/* Título */}
          <Text style={styles.title}>Iniciar Sesión</Text>
          <Text style={styles.subtitle}>
            Accede a tu cuenta de Casa de Reinas
          </Text>

          {/* Formulario */}
          <Card style={styles.formCard}>
            <Card.Content style={styles.formContent}>
              {/* Email */}
              <TextInput
                label="Email"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  if (emailError) {setEmailError('');}
                }}
                mode="outlined"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                left={<TextInput.Icon icon="email" />}
                error={!!emailError}
              />
              <HelperText type="error" visible={!!emailError}>
                {emailError}
              </HelperText>

              {/* Contraseña */}
              <TextInput
                label="Contraseña"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  if (passwordError) {setPasswordError('');}
                }}
                mode="outlined"
                secureTextEntry={!showPassword}
                style={styles.input}
                left={<TextInput.Icon icon="lock" />}
                right={
                  <TextInput.Icon
                    icon={showPassword ? 'eye-off' : 'eye'}
                    onPress={() => setShowPassword(!showPassword)}
                  />
                }
                error={!!passwordError}
              />
              <HelperText type="error" visible={!!passwordError}>
                {passwordError}
              </HelperText>

              {/* Botón de login */}
              <Button
                mode="contained"
                onPress={handleLogin}
                style={styles.loginButton}
                contentStyle={styles.loginButtonContent}
                disabled={isLoading}
                loading={isLoading}
              >
                {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
              </Button>

              <Divider style={styles.divider} />

              {/* Enlaces adicionales */}
              <View style={styles.linksContainer}>
                <Button
                  mode="text"
                  onPress={() => {
                    addNotification({
                      type: 'info',
                      message: 'Función de recuperar contraseña próximamente',
                      duration: 3000,
                    });
                  }}
                  style={styles.linkButton}
                >
                  ¿Olvidaste tu contraseña?
                </Button>

                <Button
                  mode="text"
                  onPress={() => {
                    addNotification({
                      type: 'info',
                      message: 'Función de registro próximamente',
                      duration: 3000,
                    });
                  }}
                  style={styles.linkButton}
                >
                  Crear cuenta
                </Button>
              </View>
            </Card.Content>
          </Card>

          {/* Footer */}
          <Text style={styles.footer}>
            © 2024 Casa de Reinas. Todos los derechos reservados.
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827', // Color de fondo más oscuro
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  content: {
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoImage: {
    width: 200,
    height: 80,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f8fafc', // Color de texto más claro
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8', // Color de texto secundario más claro
    marginBottom: 32,
    textAlign: 'center',
  },
  formCard: {
    width: '100%',
    maxWidth: 400,
    elevation: 4,
    borderRadius: 12,
    backgroundColor: '#1e293b', // Color de superficie más oscuro
  },
  formContent: {
    padding: 24,
  },
  input: {
    marginBottom: 8,
  },
  loginButton: {
    marginTop: 16,
    marginBottom: 24,
    borderRadius: 8,
    backgroundColor: '#4f46e5', // Color secondary de la web
  },
  loginButtonContent: {
    paddingVertical: 8,
  },
  divider: {
    marginVertical: 16,
  },
  linksContainer: {
    alignItems: 'center',
  },
  linkButton: {
    marginVertical: 4,
  },
  footer: {
    marginTop: 40,
    fontSize: 12,
    color: '#64748b', // Color de texto más claro para el footer
    textAlign: 'center',
  },
});
