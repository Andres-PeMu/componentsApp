import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

interface StoreInitializerProps {
  children: React.ReactNode;
}

export const StoreInitializer: React.FC<StoreInitializerProps> = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Verificar que Zustand esté disponible
        const { create } = require('zustand');
        if (!create) {
          throw new Error('Zustand not available');
        }

        // Pequeña pausa para asegurar que todo esté cargado
        await new Promise(resolve => setTimeout(resolve, 300));

        console.log('Stores initialized successfully');
        setIsReady(true);
      } catch (err) {
        console.error('Error initializing stores:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      }
    };

    initializeApp();
  }, []);

  if (error) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111827',
        padding: 20,
      }}>
        <Text style={{
          color: '#ef4444',
          fontSize: 18,
          textAlign: 'center',
          marginBottom: 10,
        }}>
          Error al inicializar la aplicación
        </Text>
        <Text style={{
          color: '#64748b',
          fontSize: 14,
          textAlign: 'center',
          marginBottom: 20,
        }}>
          {error}
        </Text>
        <Text style={{
          color: '#94a3b8',
          fontSize: 12,
          textAlign: 'center',
        }}>
          Por favor, reinicia la aplicación
        </Text>
      </View>
    );
  }

  if (!isReady) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111827',
      }}>
        <ActivityIndicator size="large" color="#4f46e5" />
        <Text style={{
          color: '#f8fafc',
          fontSize: 16,
          marginTop: 16,
          textAlign: 'center',
        }}>
          Inicializando Casa de Reinas...
        </Text>
      </View>
    );
  }

  return <>{children}</>;
};
