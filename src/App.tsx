import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from './config/PaperProvider';
import { LoginScreen } from './presentation/screens/LoginScreen';
import { NotificationBanner } from './components/NotificationBanner';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <LoginScreen />
        <NotificationBanner />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
