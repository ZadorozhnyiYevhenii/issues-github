import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRepositoryItem } from "../../types/IRepository";

type RepositoryState = {
  currentRepository: IRepositoryItem | undefined;
  repositoryName: string;
};

const initialState: RepositoryState = {
  currentRepository: undefined,
  repositoryName: ''
};

export const repositorySlice = createSlice({
  name: "repository",
  initialState: initialState,
  reducers: {
    setCurrentRepository: (state, action: PayloadAction<IRepositoryItem | undefined>) => {
      state.currentRepository = action.payload;
    },
    setRepositoryName: (state, action: PayloadAction<string>) => {
      state.repositoryName = action.payload;
    }
  },
});

export const { setCurrentRepository, setRepositoryName } = repositorySlice.actions;

export const repositoryReducer = repositorySlice.reducer;
