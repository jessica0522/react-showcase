import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authState/authSlice";
import mainRefucer from "./mainState/mainSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    main: mainRefucer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
