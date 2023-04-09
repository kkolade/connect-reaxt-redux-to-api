import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
  try {
    const { data } = axios.get('https://randomuser.me/api/?results=5');
    console.log(data);
    return data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export default usersSlice.reducer;
