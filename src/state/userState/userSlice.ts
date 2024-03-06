import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  email: string;
  isSignedIn: boolean;
  loading: boolean;
  error: string;
}

const initialState: UserState = {
  email: "",
  isSignedIn: false,
  loading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = userSlice.actions;

export default userSlice.reducer;
