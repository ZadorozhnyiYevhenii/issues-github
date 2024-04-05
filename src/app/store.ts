import { configureStore } from "@reduxjs/toolkit";
import { repositoryReducer } from "./slices/repositorySlice";
import { issueReducer } from "./slices/issueSlice";

export const store = configureStore({
  reducer: {
    repository: repositoryReducer,
    issue: issueReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
