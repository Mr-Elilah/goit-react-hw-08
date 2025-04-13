import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./Operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    isLoading: false,
    error: null,
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(logIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isLoading = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isLoading = false;
        state.isRefreshing = false;
        state.error = true;
      }),
});

export default authSlice.reducer;
