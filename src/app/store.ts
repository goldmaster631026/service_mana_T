import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userReducer";
import modalReducer from "../features/modal/modalReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
