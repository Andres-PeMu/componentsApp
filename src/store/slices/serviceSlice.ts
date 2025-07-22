import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Service } from '../../types';
import apiService from '../../services/api';
import { API_ENDPOINTS } from '../../constants/api';

interface ServiceState {
  services: Service[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ServiceState = {
  services: [],
  isLoading: false,
  error: null,
};

export const fetchServices = createAsyncThunk(
  'services/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiService.get<Service[]>(API_ENDPOINTS.services.list);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.services = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = serviceSlice.actions;
export default serviceSlice.reducer;
