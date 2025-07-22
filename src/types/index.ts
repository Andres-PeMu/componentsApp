// Tipos principales para la aplicación móvil Casa de Reinas

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  phone?: string;
}

export interface Appointment {
  id: number;
  title: string;
  description?: string;
  startDate: string;
  endDate: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  userId: number;
  serviceId?: number;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number; // en minutos
  category: string;
}

export interface Message {
  id: number;
  content: string;
  senderId: number;
  receiverId: number;
  timestamp: string;
  isRead: boolean;
}

export interface Notification {
  id: number;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  isRead: boolean;
  timestamp: string;
  userId: number;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface RootState {
  auth: AuthState;
  appointments: AppointmentState;
  services: ServiceState;
  messages: MessageState;
  notifications: NotificationState;
}

export interface AppointmentState {
  appointments: Appointment[];
  isLoading: boolean;
  error: string | null;
}

export interface ServiceState {
  services: Service[];
  isLoading: boolean;
  error: string | null;
}

export interface MessageState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export interface NotificationState {
  notifications: Notification[];
  isLoading: boolean;
  error: string | null;
}

// Tipos para navegación
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Appointments: undefined;
  Services: undefined;
  Messages: undefined;
  Profile: undefined;
  AppointmentDetail: { appointmentId: number };
  ServiceDetail: { serviceId: number };
  Chat: { userId: number };
};

// Tipos para formularios
export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone?: string;
}

export interface AppointmentFormData {
  title: string;
  description?: string;
  startDate: string;
  endDate: string;
  serviceId?: number;
}
