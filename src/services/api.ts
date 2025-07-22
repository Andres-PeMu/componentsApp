import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL, DEFAULT_HEADERS, API_TIMEOUT } from '../constants/api';

// Configuración de la instancia de Axios
const createApiInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: API_TIMEOUT,
    headers: DEFAULT_HEADERS,
  });

  // Interceptor para agregar el token de autenticación
  instance.interceptors.request.use(
    async (config) => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch (error) {
        console.error('Error getting auth token:', error);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Interceptor para manejar respuestas
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error) => {
      // Manejar errores de autenticación
      if (error.response?.status === 401) {
        // Token expirado o inválido
        await AsyncStorage.removeItem('authToken');
        await AsyncStorage.removeItem('user');
        // Aquí podrías redirigir al login
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

// Instancia de la API
const api = createApiInstance();

// Tipos para las respuestas de la API
export interface ApiResponse<T = any> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

// Clase para manejar errores de la API
export class ApiError extends Error {
  public status: number;
  public data: any;

  constructor(message: string, status: number, data?: any) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

// Funciones helper para las peticiones
export const apiService = {
  // GET request
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    try {
      const response = await api.get<ApiResponse<T>>(url, config);
      return response.data.data;
    } catch (error: any) {
      throw new ApiError(
        error.response?.data?.message || error.message,
        error.response?.status || 500,
        error.response?.data
      );
    }
  },

  // POST request
  post: async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    try {
      const response = await api.post<ApiResponse<T>>(url, data, config);
      return response.data.data;
    } catch (error: any) {
      throw new ApiError(
        error.response?.data?.message || error.message,
        error.response?.status || 500,
        error.response?.data
      );
    }
  },

  // PUT request
  put: async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    try {
      const response = await api.put<ApiResponse<T>>(url, data, config);
      return response.data.data;
    } catch (error: any) {
      throw new ApiError(
        error.response?.data?.message || error.message,
        error.response?.status || 500,
        error.response?.data
      );
    }
  },

  // DELETE request
  delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    try {
      const response = await api.delete<ApiResponse<T>>(url, config);
      return response.data.data;
    } catch (error: any) {
      throw new ApiError(
        error.response?.data?.message || error.message,
        error.response?.status || 500,
        error.response?.data
      );
    }
  },

  // PATCH request
  patch: async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    try {
      const response = await api.patch<ApiResponse<T>>(url, data, config);
      return response.data.data;
    } catch (error: any) {
      throw new ApiError(
        error.response?.data?.message || error.message,
        error.response?.status || 500,
        error.response?.data
      );
    }
  },
};

export default apiService;
