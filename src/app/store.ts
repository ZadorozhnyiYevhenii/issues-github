import { configureStore } from "@reduxjs/toolkit";
import { isPrevRepoReducer } from "./slices/isPrevRepoSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { repositoryNameReducer } from "./slices/repositoryNameSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistenRepositoryNameReducer = persistReducer(
  persistConfig,
  repositoryNameReducer
);
const persistentRepositoryReducer = persistReducer(
  persistConfig,
  isPrevRepoReducer
);

export const store = configureStore({
  reducer: {
    repository: persistentRepositoryReducer,
    repositoryName: persistenRepositoryNameReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
