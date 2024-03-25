import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface MainState {
  loading?: boolean;
}

const initialState: MainState = {
  loading: false,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = mainSlice.actions;

export default mainSlice.reducer;
