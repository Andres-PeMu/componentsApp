import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from './config/PaperProvider';
import { LoginScreen } from './presentation/screens/LoginScreen';
import { NotificationBanner } from './components/NotificationBanner';
import { StoreInitializer } from './components/StoreInitializer';
import { View, Text } from 'react-native';

// Error Boundary para capturar errores de stores
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#111827' }}>
          <Text style={{ color: '#f8fafc', fontSize: 18, textAlign: 'center', padding: 20 }}>
            Algo salió mal al cargar la aplicación.{'\n'}
            Por favor, reinicia la app.
          </Text>
          <Text style={{ color: '#64748b', fontSize: 12, marginTop: 10 }}>
            Error: {this.state.error?.message}
          </Text>
        </View>
      );
    }

    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <StoreInitializer>
        <SafeAreaProvider>
          <PaperProvider>
            <LoginScreen />
            <NotificationBanner />
          </PaperProvider>
        </SafeAreaProvider>
      </StoreInitializer>
    </ErrorBoundary>
  );
}
