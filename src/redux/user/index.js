import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const logIn = createAsyncThunk(
  "auth/logIn",
  async (credentials, { rejectWithValue }) => {
    const { email, password } = credentials;
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      toast.success("Login successful!");
      return foundUser; // Return user data
    } else {
      toast.error("Invalid email or password");
      return rejectWithValue("Invalid email or password"); // Reject with error message
    }
  }
);

const initialState = {
  users: [],
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initializeUsers: (state) => {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      state.users = storedUsers;
    },
    signUp: (state, action) => {
      const newUser = action.payload;
      const updatedUsers = [...state.users, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      state.users = updatedUsers;
      state.currentUser = newUser;
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      toast.success("Sign up successful!");
    },
    logOut: (state) => {
      state.currentUser = null;
      localStorage.removeItem("currentUser");
      toast.info("Logged out successfully!");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
  },
});

export const selectCurrentUser = (state) => state.auth.currentUser;
export const { initializeUsers, signUp, logOut } = authSlice.actions;
export default authSlice.reducer;
