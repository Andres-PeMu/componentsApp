import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import appointmentReducer from './slices/appointmentSlice';
import serviceReducer from './slices/serviceSlice';
import messageReducer from './slices/messageSlice';
import notificationReducer from './slices/notificationSlice';

// Configuración del store de Redux
export const store = configureStore({
  reducer: {
    auth: authReducer,
    appointments: appointmentReducer,
    services: serviceReducer,
    messages: messageReducer,
    notifications: notificationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignorar acciones que no son serializables
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// Tipos para TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
