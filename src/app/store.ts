import { configureStore } from "@reduxjs/toolkit";
import { repositoryReducer } from "./slices/repositorySlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistentRepositoryReducer = persistReducer(
  persistConfig,
  repositoryReducer
);

export const store = configureStore({
  reducer: {
    repository: persistentRepositoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
