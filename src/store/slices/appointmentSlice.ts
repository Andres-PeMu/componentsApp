import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Appointment, AppointmentFormData } from '../../types';
import apiService from '../../services/api';
import { API_ENDPOINTS } from '../../constants/api';

interface AppointmentState {
  appointments: Appointment[];
  isLoading: boolean;
  error: string | null;
}

const initialState: AppointmentState = {
  appointments: [],
  isLoading: false,
  error: null,
};

export const fetchAppointments = createAsyncThunk(
  'appointments/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiService.get<Appointment[]>(API_ENDPOINTS.appointments.list);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const createAppointment = createAsyncThunk(
  'appointments/create',
  async (appointmentData: AppointmentFormData, { rejectWithValue }) => {
    try {
      const response = await apiService.post<Appointment>(
        API_ENDPOINTS.appointments.create,
        appointmentData
      );
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointments.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.appointments = action.payload;
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        state.appointments.push(action.payload);
      });
  },
});

export const { clearError } = appointmentSlice.actions;
export default appointmentSlice.reducer;
