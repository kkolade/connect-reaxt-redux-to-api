import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: [],
  isLoading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default usersSlice.reducer;
