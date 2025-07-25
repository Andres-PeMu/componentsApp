import { create } from 'zustand';

export interface Appointment {
  id: string
  title: string
  description?: string
  startDate: string
  endDate: string
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
  userId: string
  serviceId?: string
}

export interface Service {
  id: string
  name: string
  description: string
  price: number
  duration: number // en minutos
  category: string
}

interface AppState {
  appointments: Appointment[]
  services: Service[]
  currentAppointment: Appointment | null
  selectedService: Service | null
  refreshData: boolean
}

interface AppActions {
  setAppointments: (appointments: Appointment[]) => void
  addAppointment: (appointment: Appointment) => void
  updateAppointment: (id: string, updates: Partial<Appointment>) => void
  deleteAppointment: (id: string) => void
  setCurrentAppointment: (appointment: Appointment | null) => void
  setServices: (services: Service[]) => void
  setSelectedService: (service: Service | null) => void
  triggerRefresh: () => void
  clearAppData: () => void
}

type AppStore = AppState & AppActions

export const useAppStore = create<AppStore>((set, _get) => ({
  // Estado inicial
  appointments: [],
  services: [],
  currentAppointment: null,
  selectedService: null,
  refreshData: false,

  // Acciones
  setAppointments: (appointments: Appointment[]) =>
    set({ appointments }),

  addAppointment: (appointment: Appointment) =>
    set((state) => ({
      appointments: [...state.appointments, appointment],
    })),

  updateAppointment: (id: string, updates: Partial<Appointment>) =>
    set((state) => ({
      appointments: state.appointments.map((appointment) =>
        appointment.id === id ? { ...appointment, ...updates } : appointment
      ),
    })),

  deleteAppointment: (id: string) =>
    set((state) => ({
      appointments: state.appointments.filter((appointment) => appointment.id !== id),
    })),

  setCurrentAppointment: (appointment: Appointment | null) =>
    set({ currentAppointment: appointment }),

  setServices: (services: Service[]) => set({ services }),

  setSelectedService: (service: Service | null) =>
    set({ selectedService: service }),

  triggerRefresh: () =>
    set((state) => ({ refreshData: !state.refreshData })),

  clearAppData: () =>
    set({
      appointments: [],
      services: [],
      currentAppointment: null,
      selectedService: null,
      refreshData: false,
    }),
}));
