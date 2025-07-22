import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Message } from '../../types';
import apiService from '../../services/api';
import { API_ENDPOINTS } from '../../constants/api';

interface MessageState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

const initialState: MessageState = {
  messages: [],
  isLoading: false,
  error: null,
};

export const fetchMessages = createAsyncThunk(
  'messages/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiService.get<Message[]>(API_ENDPOINTS.messages.list);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.messages = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = messageSlice.actions;
export default messageSlice.reducer;
