import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface User {
  email?: string;
}
export interface AuthState {
  user: User;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: {},
  isLoading: false,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, setIsLoading } = authSlice.actions;

export default authSlice.reducer;
