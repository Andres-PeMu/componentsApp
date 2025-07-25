import { create } from 'zustand';

interface Notification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  message: string
  duration?: number
}

interface UIState {
  isLoading: boolean
  isModalOpen: boolean
  modalContent: React.ReactNode | null
  notifications: Notification[]
  theme: 'light' | 'dark'
  sidebarOpen: boolean
}

interface UIActions {
  setLoading: (loading: boolean) => void
  openModal: (content: React.ReactNode) => void
  closeModal: () => void
  addNotification: (notification: Omit<Notification, 'id'>) => void
  removeNotification: (id: string) => void
  clearNotifications: () => void
  toggleTheme: () => void
  setTheme: (theme: 'light' | 'dark') => void
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
}

type UIStore = UIState & UIActions

export const useUIStore = create<UIStore>((set, get) => ({
  // Estado inicial
  isLoading: false,
  isModalOpen: false,
  modalContent: null,
  notifications: [],
  theme: 'light',
  sidebarOpen: false,

  // Acciones
  setLoading: (loading: boolean) => set({ isLoading: loading }),

  openModal: (content: React.ReactNode) =>
    set({ isModalOpen: true, modalContent: content }),

  closeModal: () =>
    set({ isModalOpen: false, modalContent: null }),

  addNotification: (notification) => {
    const id = Date.now().toString();
    const newNotification = { ...notification, id };

    set((state) => ({
      notifications: [...state.notifications, newNotification],
    }));

    // Auto-remove notification after duration (default: 5000ms)
    const duration = notification.duration || 5000;
    setTimeout(() => {
      get().removeNotification(id);
    }, duration);
  },

  removeNotification: (id: string) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),

  clearNotifications: () => set({ notifications: [] }),

  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    })),

  setTheme: (theme: 'light' | 'dark') => set({ theme }),

  toggleSidebar: () =>
    set((state) => ({ sidebarOpen: !state.sidebarOpen })),

  setSidebarOpen: (open: boolean) => set({ sidebarOpen: open }),
}));
