import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRepositoryItem } from "../../types/IRepository";

type RepositoryState = {
  currentRepository: IRepositoryItem | undefined;
  prevRepository: IRepositoryItem | undefined;
  repositoryName: string | null;
  prevRepositoryName: string | null;
};

const initialState: RepositoryState = {
  currentRepository: undefined,
  prevRepository: undefined,
  repositoryName: "",
  prevRepositoryName: "",
};

export const repositorySlice = createSlice({
  name: "repository",
  initialState: initialState,
  reducers: {
    setCurrentRepository: (
      state,
      action: PayloadAction<IRepositoryItem | undefined>
    ) => {
      state.currentRepository = action.payload;
    },
    setRepositoryName: (state, action: PayloadAction<string>) => {
      state.repositoryName = action.payload;
    },
    setPrevRepository: (
      state,
      action: PayloadAction<IRepositoryItem | undefined>
    ) => {
      state.prevRepository = action.payload;
    },
    setPrevRepositoryName: (state, action: PayloadAction<string>) => {
      state.prevRepositoryName = action.payload;
    },
  },
});

export const {
  setCurrentRepository,
  setRepositoryName,
  setPrevRepository,
  setPrevRepositoryName,
} = repositorySlice.actions;

export const repositoryReducer = repositorySlice.reducer;
