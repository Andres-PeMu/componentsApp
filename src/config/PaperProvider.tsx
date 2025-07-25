import React from 'react';
import { PaperProvider as RNPProvider } from 'react-native-paper';
import { useUIStore } from '../store';
import { getTheme } from './theme';

interface PaperProviderProps {
  children: React.ReactNode
}

export const PaperProvider: React.FC<PaperProviderProps> = ({ children }) => {
  // Obtener el tema del store de UI
  const theme = useUIStore(state => state.theme);

  // Obtener el tema de React Native Paper
  const paperTheme = getTheme(theme === 'dark');

  return (
    <RNPProvider theme={paperTheme}>
      {children}
    </RNPProvider>
  );
};
