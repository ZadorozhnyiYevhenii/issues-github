import { configureStore } from "@reduxjs/toolkit";
import { repositoryReducer } from "./slices/repositorySlice";

export const store = configureStore({
  reducer: {
    repository: repositoryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
