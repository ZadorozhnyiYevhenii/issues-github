import { configureStore } from "@reduxjs/toolkit";
import { repositoryReducer } from "./slices/repositorySlice";
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

export const store = configureStore({
  reducer: {
    repository: repositoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
