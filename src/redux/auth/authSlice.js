import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  logInUser,
  logOutUser,
  refreshThunk,
  registerUser,
} from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
  error: null,
  isRefreshing: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(logOutUser.fulfilled, (state, { payload }) => {
        return (state = initialState);
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLoggedIn = true;
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.rejected, state => {
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(registerUser.fulfilled, logInUser.fulfilled),
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.loading = false;
          state.isLoggedIn = true;
        }
      ),
});

export default slice.reducer;
